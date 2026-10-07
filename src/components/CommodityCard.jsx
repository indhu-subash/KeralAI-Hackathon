import React from 'react';
import { TrendingUp, TrendingDown, Eye, MapPin, ShieldCheck } from 'lucide-react';

export default function CommodityCard({ commodity, onSelect, lang, persona, theme, t }) {
  const isPositive = commodity.change24h >= 0;

  // Determine key price display according to active user persona
  let displayPrice = commodity.mandiPrice;
  let priceLabel = t.dashboard.tableHeaders.mandiPrice;
  if (persona === 'farmer') {
    displayPrice = commodity.farmgatePrice;
    priceLabel = t.dashboard.tableHeaders.farmgatePrice;
  } else if (persona === 'consumer') {
    displayPrice = commodity.retailPrice;
    priceLabel = t.dashboard.tableHeaders.retailPrice;
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-200 overflow-hidden flex flex-col justify-between group hover:shadow-xl dark:hover:shadow-emerald-950/20">
      <div>
        {/* Crop Hero Image Banner */}
        <div className="relative h-40 w-full overflow-hidden bg-slate-950">
          <img
            src={commodity.image}
            alt={commodity.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Trend Badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black backdrop-blur-md shadow-sm ${
                isPositive
                  ? 'bg-emerald-500/90 text-white'
                  : 'bg-rose-500/90 text-white'
              }`}
            >
              {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              {isPositive ? '+' : ''}{commodity.change24hPercent}%
            </span>
          </div>

          {/* Title and Category Overlay */}
          <div className="absolute bottom-3 left-3 right-3">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 backdrop-blur-sm mb-1">
              {lang === 'ml' ? commodity.categoryNameMl : commodity.categoryNameEn}
            </span>
            <h3 className="text-lg font-black text-white drop-shadow-md leading-tight">
              {lang === 'ml' ? commodity.nameMl : commodity.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-3">
          {/* Quality Spec */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
            <span className="truncate font-medium">{commodity.grade}</span>
          </div>

          {/* Big Clean Price Box */}
          <div className="bg-emerald-50/60 dark:bg-slate-950 p-3.5 rounded-xl border border-emerald-100 dark:border-slate-800">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1">
              {priceLabel}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                ₹{displayPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">/ {commodity.unit}</span>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-emerald-200/50 dark:border-slate-800 text-[11px]">
              <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-amber-500" />
                {commodity.primaryDistrict} Market
              </span>
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Vol: <strong className="text-slate-800 dark:text-slate-200">{commodity.volume}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4 pt-0">
        <button
          onClick={() => onSelect(commodity)}
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition-all shadow-sm text-xs"
        >
          <Eye className="w-4 h-4" />
          <span>{t.dashboard.tableHeaders.action}</span>
        </button>
      </div>
    </div>
  );
}




