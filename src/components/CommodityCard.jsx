import React from 'react';
import { TrendingUp, TrendingDown, Eye, MapPin, Tag, ShieldCheck } from 'lucide-react';

export default function CommodityCard({ commodity, onSelect, lang, persona, t }) {
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
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-5 flex flex-col justify-between group hover:shadow-xl hover:shadow-emerald-950/30">
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-emerald-400 border border-slate-700 mb-1.5">
              <Tag className="w-3 h-3" />
              {lang === 'ml' ? commodity.categoryNameMl : commodity.categoryNameEn}
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
              {lang === 'ml' ? commodity.nameMl : commodity.name}
            </h3>
          </div>

          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold ${
              isPositive
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
            }`}
          >
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {isPositive ? '+' : ''}{commodity.change24hPercent}%
          </span>
        </div>

        {/* Grade Specification Badge */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 bg-slate-950/60 p-2 rounded-lg border border-slate-850">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span className="truncate">{commodity.grade}</span>
        </div>

        {/* Price Information */}
        <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 mb-4">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
            {priceLabel}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-white">
              ₹{displayPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
            <span className="text-xs text-slate-400 font-medium">/ {commodity.unit}</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800 text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              {commodity.primaryDistrict} Hub
            </span>
            <span className="text-slate-400">
              Vol: <strong className="text-slate-200">{commodity.volume}</strong>
            </span>
          </div>
        </div>

        {/* Sparkline Visual */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mb-1">
            <span>7D Sparkline</span>
            <span>Current: ₹{commodity.mandiPrice}</span>
          </div>
          <div className="h-8 flex items-end gap-1 pt-1">
            {commodity.sparkline.map((val, idx) => {
              const min = Math.min(...commodity.sparkline);
              const max = Math.max(...commodity.sparkline);
              const range = max - min || 1;
              const heightPct = Math.max(15, Math.min(100, ((val - min) / range) * 100));
              return (
                <div
                  key={idx}
                  className={`flex-1 rounded-t transition-all ${
                    isPositive ? 'bg-emerald-500/60 hover:bg-emerald-400' : 'bg-rose-500/60 hover:bg-rose-400'
                  }`}
                  style={{ height: `${heightPct}%` }}
                  title={`Day ${idx + 1}: ₹${val}`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <button
        onClick={() => onSelect(commodity)}
        className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 font-semibold py-2.5 rounded-xl transition-all border border-slate-700 hover:border-emerald-500 text-xs"
      >
        <Eye className="w-4 h-4" />
        <span>{t.dashboard.tableHeaders.action} & Market Spread</span>
      </button>
    </div>
  );
}
