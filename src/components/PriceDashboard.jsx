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
  Layers,
  X
} from 'lucide-react';
import CommodityCard from './CommodityCard';
import { keralaDistricts } from '../data/districtsData';

export default function PriceDashboard({ commodities, onSelectCommodity, lang, persona, theme, t }) {
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

  const categoryIcons = {
    all: "🌴",
    plantation: "🪵",
    coconut: "🥥",
    fruits: "🍌",
    tubers: "🥔"
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Clean Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-slate-900 dark:to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 mb-2">
            <Activity className="w-3.5 h-3.5" />
            Kerala APMC & Mandi Realtime Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.dashboard.title}
          </h2>
          <p className="text-sm text-emerald-100 dark:text-slate-300 mt-1 font-medium">
            {t.dashboard.subtitle}
          </p>
        </div>

        {/* Clean 3 Key Highlight Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/20 dark:border-slate-800">
          <div className="bg-white/10 dark:bg-slate-950/60 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20 dark:border-slate-800">
            <div className="text-xs text-emerald-100 dark:text-slate-400 font-semibold mb-0.5 flex items-center justify-between">
              {t.dashboard.stats.totalTracked}
              <Layers className="w-4 h-4 text-emerald-200 dark:text-emerald-400" />
            </div>
            <div className="text-xl font-black text-white">9 Major Crops</div>
            <div className="text-[11px] text-emerald-200 dark:text-emerald-400">All 14 Districts</div>
          </div>

          <div className="bg-white/10 dark:bg-slate-950/60 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20 dark:border-slate-800">
            <div className="text-xs text-emerald-100 dark:text-slate-400 font-semibold mb-0.5 flex items-center justify-between">
              {t.dashboard.stats.topGain}
              <TrendingUp className="w-4 h-4 text-amber-300" />
            </div>
            <div className="text-xl font-black text-amber-200 dark:text-amber-400">+9.27%</div>
            <div className="text-[11px] text-emerald-100 dark:text-slate-400">Nendran Banana (Wayanad)</div>
          </div>

          <div className="bg-white/10 dark:bg-slate-950/60 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20 dark:border-slate-800">
            <div className="text-xs text-emerald-100 dark:text-slate-400 font-semibold mb-0.5 flex items-center justify-between">
              {t.dashboard.stats.arbitrageOpp}
              <ArrowUpRight className="w-4 h-4 text-teal-200 dark:text-teal-400" />
            </div>
            <div className="text-xl font-black text-white">₹14.5 / kg</div>
            <div className="text-[11px] text-emerald-200 dark:text-teal-300">District Price Difference</div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.dashboard.searchPlaceholder}
              className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pl-10 pr-8 py-2 rounded-xl border border-slate-300 dark:border-slate-700 focus:border-emerald-500 focus:outline-none text-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* District Dropdown Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full md:w-auto bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs focus:border-emerald-500 focus:outline-none cursor-pointer"
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
          <div className="flex items-center bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'table' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ListFilter className="w-4 h-4" />
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>

        {/* Touch-Friendly Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500'
            }`}
          >
            <span>{categoryIcons.all}</span>
            <span>{t.dashboard.allCategories}</span>
          </button>
          {Object.entries(t.dashboard.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                selectedCategory === key
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500'
              }`}
            >
              <span>{categoryIcons[key] || "🌱"}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid or Table Display */}
      {filteredCommodities.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
          <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {lang === 'ml' ? 'ഉൽപ്പന്നങ്ങൾ ഒന്നും കണ്ടെത്തിയില്ല' : 'No commodities found'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {lang === 'ml' ? 'തിരച്ചിൽ മാറ്റുക അല്ലെങ്കിൽ മറ്റൊന്ന് നൽകുക.' : 'Try adjusting your category or search criteria.'}
          </p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCommodities.map((item) => (
            <CommodityCard
              key={item.id}
              commodity={item}
              onSelect={onSelectCommodity}
              lang={lang}
              persona={persona}
              theme={theme}
              t={t}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-[11px] font-bold uppercase border-b border-slate-200 dark:border-slate-800">
                  <th className="py-3 px-5">{t.dashboard.tableHeaders.commodity}</th>
                  <th className="py-3 px-4">{t.dashboard.tableHeaders.district}</th>
                  <th className="py-3 px-4">{t.dashboard.tableHeaders.farmgatePrice}</th>
                  <th className="py-3 px-4">{t.dashboard.tableHeaders.mandiPrice}</th>
                  <th className="py-3 px-4">{t.dashboard.tableHeaders.retailPrice}</th>
                  <th className="py-3 px-4">{t.dashboard.tableHeaders.change24h}</th>
                  <th className="py-3 px-5 text-right">{t.dashboard.tableHeaders.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200">
                {filteredCommodities.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-slate-900 dark:text-white">
                      <div>{lang === 'ml' ? item.nameMl : item.name}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">{item.grade}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        {item.primaryDistrict}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-600 dark:text-emerald-400">
                      ₹{item.farmgatePrice.toLocaleString()} / {item.unit}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      ₹{item.mandiPrice.toLocaleString()} / {item.unit}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-teal-600 dark:text-teal-300">
                      ₹{item.retailPrice.toLocaleString()} / {item.unit}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-0.5 font-bold ${
                        item.change24h >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                      }`}>
                        {item.change24h >= 0 ? '+' : ''}{item.change24hPercent}%
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button
                        onClick={() => onSelectCommodity(item)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-all shadow-sm"
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

