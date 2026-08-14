import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { 
  Database, 
  Download, 
  Upload, 
  RotateCcw, 
  Code, 
  Check, 
  AlertTriangle, 
  FileJson,
  Layers,
  Users,
  CalendarDays
} from 'lucide-react';

export const MetaDataManager = () => {
  const { language, t } = useLanguage();
  const { 
    characters, 
    gears, 
    banners, 
    activeLineup, 
    savedPresets, 
    exportAllData, 
    importAllData, 
    resetToFactoryDefaults,
    showToast 
  } = useMetaData();

  const [rawJsonText, setRawJsonText] = useState(() => {
    return JSON.stringify(
      {
        characters,
        gears,
        banners,
        activeLineup,
        savedPresets,
      },
      null,
      2
    );
  });

  const [isEditingRaw, setIsEditingRaw] = useState(false);

  const handleApplyRawJson = () => {
    try {
      const parsed = JSON.parse(rawJsonText);
      importAllData(parsed);
      setIsEditingRaw(false);
      showToast(t('metadata.appliedChanges'));
    } catch (err) {
      showToast('JSON Syntax Error! Please verify brackets and quotes.', 'error');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result);
        importAllData(json);
        setRawJsonText(JSON.stringify(json, null, 2));
      } catch (err) {
        showToast('Invalid JSON file format', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-opm-borderHighlight/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-opm-yellow/20 text-opm-yellow border border-opm-yellow/40 uppercase tracking-wide">
                Database Control Center
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-opm-card text-slate-300 border border-opm-border">
                LocalStorage + JSON Sync
              </span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100">
              {t('metadata.title')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t('metadata.subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={exportAllData}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-opm-yellow hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-glow-yellow transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{t('metadata.exportAll')}</span>
            </button>

            <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-opm-cardLight border border-opm-border hover:border-opm-cyan/50 text-slate-200 font-bold text-xs sm:text-sm transition-all cursor-pointer">
              <Upload className="w-4 h-4 text-opm-cyan" />
              <span>{t('metadata.importAll')}</span>
              <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Database Metric Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-opm-border/60">
          <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-opm-yellow/20 text-opm-yellow">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">{t('metadata.totalCharacters')}</span>
              <span className="font-mono font-black text-xl text-slate-100">{characters.length}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">{t('metadata.totalGears')}</span>
              <span className="font-mono font-black text-xl text-slate-100">{gears.length}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">{t('metadata.totalBanners')}</span>
              <span className="font-mono font-black text-xl text-slate-100">{banners.length}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <FileJson className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">{t('teamBuilder.lineupPresets')}</span>
              <span className="font-mono font-black text-xl text-slate-100">{savedPresets.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Raw JSON Inspector & Live Patcher */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-opm-borderHighlight/80 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-opm-yellow" />
            <h3 className="font-display font-black text-base sm:text-lg text-slate-100">
              {t('metadata.jsonEditorTitle')}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {isEditingRaw ? (
              <>
                <button
                  onClick={() => setIsEditingRaw(false)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-300"
                >
                  {t('common.cancel')}
                </button>
                <button
                  onClick={handleApplyRawJson}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-colors"
                >
                  <Check className="w-4 h-4" />
                  <span>Apply Changes</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setRawJsonText(
                    JSON.stringify(
                      {
                        characters,
                        gears,
                        banners,
                        activeLineup,
                        savedPresets,
                      },
                      null,
                      2
                    )
                  );
                  setIsEditingRaw(true);
                }}
                className="px-4 py-1.5 rounded-xl bg-opm-cardLight border border-opm-border text-xs font-bold text-slate-200 hover:border-opm-yellow/50"
              >
                Edit Raw JSON
              </button>
            )}
          </div>
        </div>

        <textarea
          rows={16}
          disabled={!isEditingRaw}
          value={rawJsonText}
          onChange={(e) => setRawJsonText(e.target.value)}
          className={`w-full p-4 rounded-2xl font-mono text-xs leading-relaxed border transition-colors ${
            isEditingRaw
              ? 'bg-opm-bg text-amber-200 border-opm-yellow/60 focus:outline-none'
              : 'bg-black/50 text-slate-300 border-opm-border cursor-not-allowed opacity-90'
          }`}
        />
      </div>

      {/* Danger Zone: Factory Reset */}
      <div className="p-6 rounded-3xl bg-rose-950/20 border border-rose-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-display font-black text-sm text-rose-400 uppercase tracking-wide flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Danger Zone / Factory Restore</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            {t('metadata.resetConfirm')}
          </p>
        </div>

        <button
          onClick={() => {
            if (window.confirm(t('metadata.resetConfirm'))) {
              resetToFactoryDefaults();
            }
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm transition-all shadow-glow-red shrink-0"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t('metadata.resetDefaults')}</span>
        </button>
      </div>

    </div>
  );
};
