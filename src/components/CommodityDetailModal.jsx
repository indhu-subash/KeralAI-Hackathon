import React from 'react';
import { X, ShieldAlert, Sparkles, Building2, Store, Sprout, TrendingUp, Info } from 'lucide-react';

export default function CommodityDetailModal({ commodity, onClose, lang, persona, theme, t }) {
  if (!commodity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col relative text-slate-900 dark:text-white">
        
        {/* Crop Hero Image Banner Header */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950 shrink-0">
          <img
            src={commodity.image}
            alt={commodity.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Header Content Overlay */}
          <div className="absolute bottom-5 left-6 right-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/40 backdrop-blur-sm mb-2">
              {lang === 'ml' ? commodity.categoryNameMl : commodity.categoryNameEn}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">
              {lang === 'ml' ? commodity.nameMl : commodity.name}
            </h2>
          </div>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quality Spec Card */}
          <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              {t.modal.grade}
            </div>
            <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
              {commodity.grade}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Primary District Market: <strong className="text-slate-800 dark:text-slate-200">{commodity.primaryDistrict}</strong> | Est. Volume: <strong className="text-slate-800 dark:text-slate-200">{commodity.volume}</strong>
            </p>
          </div>

          {/* Price Spread Comparison */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-500" />
              {t.modal.spread}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-1">
                  <Sprout className="w-4 h-4" />
                  {t.modal.farmgate}
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white">
                  ₹{commodity.farmgatePrice.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Farmer Payout</div>
              </div>

              <div className="bg-emerald-50/60 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-300 dark:border-emerald-800">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-1">
                  <Building2 className="w-4 h-4" />
                  {t.modal.mandi}
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white">
                  ₹{commodity.mandiPrice.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Wholesale Rate</div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 text-xs font-semibold mb-1">
                  <Store className="w-4 h-4" />
                  {t.modal.retail}
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white">
                  ₹{commodity.retailPrice.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Shop Price</div>
              </div>
            </div>
          </div>

          {/* Persona Advisory Note */}
          <div className="bg-amber-50 dark:bg-slate-950 p-4 rounded-2xl border border-amber-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              {t.modal.advisory} ({t.personas[persona]})
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {commodity.advisory[persona]}
            </p>
          </div>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-sm text-xs"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
}




