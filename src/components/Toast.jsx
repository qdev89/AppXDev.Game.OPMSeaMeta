import React, { useEffect } from 'react';
import { useMetaData } from '../context/MetaDataContext';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export const Toast = () => {
  const { toast, closeToast } = useMetaData();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      closeToast();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-opm-cyan shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-opm-red shrink-0" />,
  };

  const borderColors = {
    success: 'border-green-500/40 shadow-green-950/40',
    info: 'border-cyan-500/40 shadow-cyan-950/40',
    error: 'border-red-500/40 shadow-red-950/40',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-opm-card/95 backdrop-blur-xl border ${
          borderColors[toast.type] || borderColors.success
        } text-slate-100 shadow-2xl max-w-md`}
      >
        {icons[toast.type] || icons.success}
        <p className="text-sm font-medium pr-2">{toast.message}</p>
        <button
          onClick={closeToast}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors ml-auto"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
