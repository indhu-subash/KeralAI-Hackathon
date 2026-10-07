import React from 'react';
import { X, ShieldAlert, Sparkles, Building2, Store, Sprout, TrendingUp, Info } from 'lucide-react';

export default function CommodityDetailModal({ commodity, onClose, lang, persona, t }) {
  if (!commodity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh] relative text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
              {lang === 'ml' ? commodity.categoryNameMl : commodity.categoryNameEn}
            </span>
            <h2 className="text-2xl font-black text-white">
              {lang === 'ml' ? commodity.nameMl : commodity.name}
            </h2>
          </div>
        </div>

        {/* Quality Spec Card */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-teal-400" />
            {t.modal.grade}
          </div>
          <p className="text-sm font-semibold text-emerald-300">
            {commodity.grade}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Primary District Hub: <strong className="text-slate-200">{commodity.primaryDistrict}</strong> | Daily Volume: <strong className="text-slate-200">{commodity.volume}</strong>
          </p>
        </div>

        {/* Price Spread Comparison */}
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-amber-400" />
          {t.modal.spread}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
              <Sprout className="w-4 h-4" />
              {t.modal.farmgate}
            </div>
            <div className="text-xl font-black text-white">
              ₹{commodity.farmgatePrice.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Direct Farmer Payout</div>
          </div>

          <div className="bg-slate-950/90 p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
              <Building2 className="w-4 h-4" />
              {t.modal.mandi}
            </div>
            <div className="text-xl font-black text-white">
              ₹{commodity.mandiPrice.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">APMC Wholesale Rate</div>
          </div>

          <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
              <Store className="w-4 h-4" />
              {t.modal.retail}
            </div>
            <div className="text-xl font-black text-white">
              ₹{commodity.retailPrice.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Consumer Retail Market</div>
          </div>
        </div>

        {/* Persona Tailored Advisory Note */}
        <div className="bg-gradient-to-r from-slate-950 via-emerald-950/30 to-slate-950 p-4 rounded-2xl border border-emerald-500/30 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            {t.modal.advisory} ({t.personas[persona]})
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {commodity.advisory[persona]}
          </p>
        </div>

        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/50"
        >
          {t.modal.close}
        </button>
      </div>
    </div>
  );
}
