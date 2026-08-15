import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultCharacters } from '../data/defaultCharacters';
import { defaultGears } from '../data/defaultGears';
import { defaultBanners } from '../data/defaultBanners';
import { getStoredItem, setStoredItem, STORAGE_KEYS, exportToJsonFile } from '../utils/storage';

const MetaDataContext = createContext();

export const MetaDataProvider = ({ children }) => {
  // Characters State
  const [characters, setCharacters] = useState(() => {
    const stored = getStoredItem(STORAGE_KEYS.CHARACTERS, null);
    if (!stored) return defaultCharacters;
    
    // Auto-migrate avatar paths & ensure all default characters exist
    const defaultIds = new Set(defaultCharacters.map(d => d.id));
    const merged = defaultCharacters.map(defChar => {
      const existing = stored.find(s => s.id === defChar.id);
      if (!existing) return defChar;
      return {
        ...defChar,
        ...existing,
        // Always enforce authentic local avatar
        avatar: defChar.avatar
      };
    });
    
    // Append any custom user-created characters
    const customChars = stored.filter(s => !defaultIds.has(s.id));
    return [...merged, ...customChars];
  });

  // Gears State
  const [gears, setGears] = useState(() => {
    return getStoredItem(STORAGE_KEYS.GEARS, defaultGears);
  });

  // Banners State
  const [banners, setBanners] = useState(() => {
    return getStoredItem(STORAGE_KEYS.BANNERS, defaultBanners);
  });

  // Active Team Lineup (6 Slots: 0-2 Front Row, 3-5 Back Row)
  const [activeLineup, setActiveLineup] = useState(() => {
    return getStoredItem(STORAGE_KEYS.LINEUP, [
      'bomb_core',        // Slot 0 (Front 1)
      'ssr_plus_silverfang', // Slot 1 (Front 2)
      'ur_saitama',       // Slot 2 (Front 3)
      'ur_tatsumaki',     // Slot 3 (Back 1)
      'ur_sonic',         // Slot 4 (Back 2)
      'ssr_plus_atomic',  // Slot 5 (Back 3)
    ]);
  });

  // Saved Team Presets
  const [savedPresets, setSavedPresets] = useState(() => {
    return getStoredItem(STORAGE_KEYS.SAVED_PRESETS, [
      {
        id: 'preset_default_bomb_stall',
        name: 'Top 1 SEA Bomb Core Hyper Carry',
        slots: ['bomb_core', 'ssr_plus_silverfang', 'ur_saitama', 'ur_tatsumaki', 'ur_sonic', 'ssr_plus_atomic'],
        speedOrder: [4, 3, 2, 5, 1, 0], // Turn order (Sonic -> Tatsumaki -> Saitama -> Atomic -> Silverfang -> Bomb)
      },
      {
        id: 'preset_monster_gyoro_dot',
        name: 'Monster Corrode & Splash Meta',
        slots: ['gyoro_core', 'ssr_plus_silverfang', 'ur_boros', 'ssr_plus_mosquito', 'ssr_plus_geryu', 'ur_tatsumaki'],
        speedOrder: [4, 3, 2, 5, 0, 1],
      }
    ]);
  });

  // Toast Notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
  };

  const closeToast = () => {
    setToast(null);
  };

  // Sync to LocalStorage
  useEffect(() => {
    setStoredItem(STORAGE_KEYS.CHARACTERS, characters);
  }, [characters]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.GEARS, gears);
  }, [gears]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.BANNERS, banners);
  }, [banners]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.LINEUP, activeLineup);
  }, [activeLineup]);

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.SAVED_PRESETS, savedPresets);
  }, [savedPresets]);

  // Character CRUD
  const addCharacter = (newChar) => {
    const id = newChar.id || `char_${Date.now()}`;
    const formatted = { ...newChar, id };
    setCharacters((prev) => [formatted, ...prev]);
    showToast(`Added character: ${newChar.name.en || newChar.name.vi || id}`);
  };

  const updateCharacter = (id, updatedChar) => {
    setCharacters((prev) =>
      prev.map((char) => (char.id === id ? { ...char, ...updatedChar } : char))
    );
    showToast(`Updated character: ${updatedChar.name?.en || updatedChar.name?.vi || id}`);
  };

  const deleteCharacter = (id) => {
    setCharacters((prev) => prev.filter((char) => char.id !== id));
    // Also remove from active lineup if present
    setActiveLineup((prev) => prev.map((charId) => (charId === id ? null : charId)));
    showToast(`Deleted character: ${id}`, 'info');
  };

  const cloneCharacter = (id) => {
    const original = characters.find((c) => c.id === id);
    if (!original) return;
    const cloned = {
      ...JSON.parse(JSON.stringify(original)),
      id: `${original.id}_copy_${Date.now().toString().slice(-4)}`,
      name: {
        en: `${original.name.en} (Copy)`,
        vi: `${original.name.vi} (Bản sao)`,
      },
    };
    setCharacters((prev) => [cloned, ...prev]);
    showToast(`Cloned: ${cloned.name.en}`);
  };

  // Team Lineup Management
  const setSlotCharacter = (slotIndex, charId) => {
    setActiveLineup((prev) => {
      const newLineup = [...prev];
      // If the character is already in another slot, swap or clear that slot
      const existingIdx = newLineup.indexOf(charId);
      if (existingIdx !== -1 && existingIdx !== slotIndex) {
        newLineup[existingIdx] = newLineup[slotIndex];
      }
      newLineup[slotIndex] = charId;
      return newLineup;
    });
  };

  const clearSlot = (slotIndex) => {
    setActiveLineup((prev) => {
      const newLineup = [...prev];
      newLineup[slotIndex] = null;
      return newLineup;
    });
  };

  const clearLineup = () => {
    setActiveLineup([null, null, null, null, null, null]);
    showToast('Lineup cleared', 'info');
  };

  const saveLineupPreset = (name) => {
    if (!name.trim()) return;
    const newPreset = {
      id: `preset_${Date.now()}`,
      name,
      slots: [...activeLineup],
      speedOrder: [0, 1, 2, 3, 4, 5],
    };
    setSavedPresets((prev) => [newPreset, ...prev]);
    showToast(`Preset "${name}" saved!`);
  };

  const loadLineupPreset = (presetId) => {
    const preset = savedPresets.find((p) => p.id === presetId);
    if (preset) {
      setActiveLineup(preset.slots);
      showToast(`Loaded preset: "${preset.name}"`);
    }
  };

  const deleteLineupPreset = (presetId) => {
    setSavedPresets((prev) => prev.filter((p) => p.id !== presetId));
    showToast('Preset deleted', 'info');
  };

  // Gear CRUD
  const addGear = (newGear) => {
    const id = newGear.id || `gear_${Date.now()}`;
    setGears((prev) => [...prev, { ...newGear, id }]);
    showToast(`Added Gear: ${newGear.name.en}`);
  };

  const updateGear = (id, updatedGear) => {
    setGears((prev) => prev.map((g) => (g.id === id ? { ...g, ...updatedGear } : g)));
    showToast(`Updated Gear: ${updatedGear.name?.en || id}`);
  };

  const deleteGear = (id) => {
    setGears((prev) => prev.filter((g) => g.id !== id));
    showToast('Gear deleted', 'info');
  };

  // Banner CRUD
  const addBanner = (newBanner) => {
    const id = newBanner.id || `banner_${Date.now()}`;
    setBanners((prev) => [...prev, { ...newBanner, id }]);
    showToast(`Added Banner: ${newBanner.name.en}`);
  };

  const updateBanner = (id, updatedBanner) => {
    setBanners((prev) => prev.map((b) => (b.id === id ? { ...b, ...updatedBanner } : b)));
    showToast(`Updated Banner: ${updatedBanner.name?.en || id}`);
  };

  const deleteBanner = (id) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
    showToast('Banner deleted', 'info');
  };

  // Export / Import / Reset Full Metadata
  const exportAllData = () => {
    const fullBackup = {
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      game: 'ONE PUNCH MAN: The Strongest (SEA)',
      characters,
      gears,
      banners,
      activeLineup,
      savedPresets,
    };
    exportToJsonFile(fullBackup, `opm_sea_meta_backup_${new Date().toISOString().slice(0, 10)}.json`);
    showToast('Full metadata exported successfully!');
  };

  const importAllData = (importedData) => {
    if (!importedData || typeof importedData !== 'object') {
      showToast('Invalid data format', 'error');
      return;
    }
    if (importedData.characters && Array.isArray(importedData.characters)) {
      setCharacters(importedData.characters);
    }
    if (importedData.gears && Array.isArray(importedData.gears)) {
      setGears(importedData.gears);
    }
    if (importedData.banners && Array.isArray(importedData.banners)) {
      setBanners(importedData.banners);
    }
    if (importedData.activeLineup && Array.isArray(importedData.activeLineup)) {
      setActiveLineup(importedData.activeLineup);
    }
    if (importedData.savedPresets && Array.isArray(importedData.savedPresets)) {
      setSavedPresets(importedData.savedPresets);
    }
    showToast('Metadata successfully imported & synchronized!');
  };

  const resetToFactoryDefaults = () => {
    setCharacters(defaultCharacters);
    setGears(defaultGears);
    setBanners(defaultBanners);
    setActiveLineup([
      'bomb_core',
      'ssr_plus_silverfang',
      'ur_saitama',
      'ur_tatsumaki',
      'ur_sonic',
      'ssr_plus_atomic',
    ]);
    showToast('Reset to Factory SEA Meta defaults!', 'info');
  };

  return (
    <MetaDataContext.Provider
      value={{
        characters,
        gears,
        banners,
        activeLineup,
        savedPresets,
        addCharacter,
        updateCharacter,
        deleteCharacter,
        cloneCharacter,
        setSlotCharacter,
        clearSlot,
        clearLineup,
        saveLineupPreset,
        loadLineupPreset,
        deleteLineupPreset,
        addGear,
        updateGear,
        deleteGear,
        addBanner,
        updateBanner,
        deleteBanner,
        exportAllData,
        importAllData,
        resetToFactoryDefaults,
        toast,
        showToast,
        closeToast,
      }}
    >
      {children}
    </MetaDataContext.Provider>
  );
};

export const useMetaData = () => {
  const context = useContext(MetaDataContext);
  if (!context) {
    throw new Error('useMetaData must be used within a MetaDataProvider');
  }
  return context;
};
