import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  BarChart, 
  Bar 
} from 'recharts';
import { TrendingUp, Calendar, CloudRain, Sparkles, Sliders } from 'lucide-react';

export default function HistoricalTrends({ commodities, lang, theme, t }) {
  const [selectedId, setSelectedId] = useState(commodities[0]?.id || 'rubber-rss4');
  const [compareId, setCompareId] = useState('none');
  const [timeframe, setTimeframe] = useState('1M');

  const mainCommodity = commodities.find((c) => c.id === selectedId) || commodities[0];
  const compareCommodity = commodities.find((c) => c.id === compareId);

  // Generate combined chart dataset for comparison
  const chartData = mainCommodity.history1M.map((item, index) => {
    let comparePrice = null;
    if (compareCommodity && compareCommodity.history1M[index]) {
      comparePrice = compareCommodity.history1M[index].price;
    }
    return {
      date: item.date,
      [mainCommodity.name]: item.price,
      ...(compareCommodity ? { [compareCommodity.name]: comparePrice } : {}),
      volume: item.volume
    };
  });

  const isDark = theme === 'dark';

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              {t.trends.title}
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {lang === 'ml' ? mainCommodity.nameMl : mainCommodity.name} {t.trends.chartTitle}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t.trends.subtitle}
            </p>
          </div>

          {/* Timeframe Selector */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {Object.entries(t.trends.timeframes).map(([tf, label]) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  timeframe === tf
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Commodity & Comparison Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {t.trends.selectCommodity}
            </label>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs focus:border-emerald-500 focus:outline-none cursor-pointer"
            >
              {commodities.map((c) => (
                <option key={c.id} value={c.id}>
                  {lang === 'ml' ? c.nameMl : c.name} ({c.grade})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {t.trends.compareWith}
            </label>
            <select
              value={compareId}
              onChange={(e) => setCompareId(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs focus:border-emerald-500 focus:outline-none cursor-pointer"
            >
              <option value="none">None (Single Line View)</option>
              {commodities
                .filter((c) => c.id !== selectedId)
                .map((c) => (
                  <option key={c.id} value={c.id}>
                    {lang === 'ml' ? c.nameMl : c.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Recharts Line Chart */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative">
        {/* Monsoon Overlay Banner */}
        <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 flex items-center justify-between text-xs">
          <span className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-bold">
            <CloudRain className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            {t.trends.monsoonEvent}
          </span>
          <span className="text-amber-700 dark:text-amber-300 font-bold flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {t.trends.onamEvent}
          </span>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} />
              <XAxis dataKey="date" stroke={isDark ? '#64748b' : '#64748b'} tick={{ fontSize: 11 }} />
              <YAxis stroke={isDark ? '#64748b' : '#64748b'} tick={{ fontSize: 11 }} domain={['auto', 'auto']} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#090d16' : '#ffffff',
                  borderColor: isDark ? '#334155' : '#cbd5e1',
                  borderRadius: '12px',
                  color: isDark ? '#fff' : '#0f172a',
                  fontSize: '12px'
                }}
              />
              <Line
                type="monotone"
                dataKey={mainCommodity.name}
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 4, fill: '#10b981' }}
                activeDot={{ r: 7 }}
              />
              {compareCommodity && (
                <Line
                  type="monotone"
                  dataKey={compareCommodity.name}
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#f59e0b' }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trade Volume Chart */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          {t.trends.volumeChartTitle} ({mainCommodity.name})
        </h3>
        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} />
              <XAxis dataKey="date" stroke="#64748b" tick={{ fontSize: 11 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#090d16' : '#ffffff',
                  borderColor: isDark ? '#334155' : '#cbd5e1',
                  borderRadius: '12px',
                  color: isDark ? '#fff' : '#0f172a',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="volume" fill="#0d9488" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

