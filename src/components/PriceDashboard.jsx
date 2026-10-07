import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  LayoutGrid, 
  ListFilter, 
  TrendingUp, 
  Activity, 
  Zap, 
  ArrowUpRight, 
  Layers
} from 'lucide-react';
import CommodityCard from './CommodityCard';
import { keralaDistricts } from '../data/districtsData';

export default function PriceDashboard({ commodities, onSelectCommodity, lang, persona, t }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Filtered commodities
  const filteredCommodities = useMemo(() => {
    return commodities.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameMl.includes(searchQuery) ||
        item.grade.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      const matchesDistrict = selectedDistrict === 'all' || 
        item.primaryDistrict.toLowerCase() === selectedDistrict.toLowerCase();

      return matchesSearch && matchesCategory && matchesDistrict;
    });
  }, [commodities, searchQuery, selectedCategory, selectedDistrict]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner & Stats */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            Kerala APMC & Harbour Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.dashboard.title}
          </h2>
          <p className="text-sm text-slate-300 mt-2 font-medium">
            {t.dashboard.subtitle}
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold mb-1 flex items-center justify-between">
              {t.dashboard.stats.totalTracked}
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white">9 Major</div>
            <div className="text-[11px] text-emerald-400 mt-0.5">Across 14 Districts</div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold mb-1 flex items-center justify-between">
              {t.dashboard.stats.avgDailyVol}
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-white">₹18.4 Cr</div>
            <div className="text-[11px] text-amber-400 mt-0.5">Estimated Daily Turnout</div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold mb-1 flex items-center justify-between">
              {t.dashboard.stats.topGain}
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400">+9.27%</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Nendran Banana (Wayanad)</div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold mb-1 flex items-center justify-between">
              {t.dashboard.stats.arbitrageOpp}
              <ArrowUpRight className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl font-black text-teal-300">₹14.5 / kg</div>
            <div className="text-[11px] text-teal-400 mt-0.5">Max Inter-District Gap</div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.dashboard.searchPlaceholder}
              className="w-full bg-slate-950 text-white pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 focus:border-emerald-500 focus:outline-none text-xs transition-colors"
            />
          </div>

          {/* District Dropdown Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full md:w-auto bg-slate-950 text-white px-3.5 py-2.5 rounded-xl border border-slate-700 text-xs focus:border-emerald-500 focus:outline-none cursor-pointer"
            >
              <option value="all">{t.dashboard.allDistricts}</option>
              {keralaDistricts.map((d) => (
                <option key={d.id} value={d.name}>
                  {lang === 'ml' ? d.nameMl : d.name} ({d.primaryHub})
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'table' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ListFilter className="w-4 h-4" />
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            {t.dashboard.allCategories}
          </button>
          {Object.entries(t.dashboard.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                selectedCategory === key
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid or Table Display */}
      {filteredCommodities.length === 0 ? (
        <div className="bg-slate-900/60 p-12 rounded-3xl border border-slate-800 text-center">
          <Filter className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">No commodities found</h3>
          <p className="text-xs text-slate-400 mt-1">Try adjusting your category or search criteria.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommodities.map((item) => (
            <CommodityCard
              key={item.id}
              commodity={item}
              onSelect={onSelectCommodity}
              lang={lang}
              persona={persona}
              t={t}
            />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-slate-400 text-[11px] font-bold uppercase border-b border-slate-800">
                  <th className="py-4 px-6">{t.dashboard.tableHeaders.commodity}</th>
                  <th className="py-4 px-4">{t.dashboard.tableHeaders.district}</th>
                  <th className="py-4 px-4">{t.dashboard.tableHeaders.farmgatePrice}</th>
                  <th className="py-4 px-4">{t.dashboard.tableHeaders.mandiPrice}</th>
                  <th className="py-4 px-4">{t.dashboard.tableHeaders.retailPrice}</th>
                  <th className="py-4 px-4">{t.dashboard.tableHeaders.change24h}</th>
                  <th className="py-4 px-6 text-right">{t.dashboard.tableHeaders.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs font-medium text-slate-200">
                {filteredCommodities.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      <div>{lang === 'ml' ? item.nameMl : item.name}</div>
                      <div className="text-[10px] text-slate-400 font-normal">{item.grade}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {item.primaryDistrict}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-emerald-400">
                      ₹{item.farmgatePrice.toLocaleString()} / {item.unit}
                    </td>
                    <td className="py-4 px-4 font-bold text-white">
                      ₹{item.mandiPrice.toLocaleString()} / {item.unit}
                    </td>
                    <td className="py-4 px-4 font-semibold text-teal-300">
                      ₹{item.retailPrice.toLocaleString()} / {item.unit}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-0.5 font-bold ${
                        item.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400'
                      }`}>
                        {item.change24h >= 0 ? '+' : ''}{item.change24hPercent}%
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onSelectCommodity(item)}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-all"
                      >
                        {t.dashboard.tableHeaders.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
