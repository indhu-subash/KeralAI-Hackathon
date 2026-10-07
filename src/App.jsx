import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PriceDashboard from './components/PriceDashboard';
import HistoricalTrends from './components/HistoricalTrends';
import PricePrediction from './components/PricePrediction';
import DistrictMap from './components/DistrictMap';
import PriceAlerts from './components/PriceAlerts';
import MarketInsights from './components/MarketInsights';
import CommodityDetailModal from './components/CommodityDetailModal';
import Footer from './components/Footer';

import { commodities } from './data/commoditiesData';
import { translations } from './data/translations';

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [lang, setLang] = useState('ml'); // Default to Malayalam for Kerala common people accessibility!
  const [persona, setPersona] = useState('farmer');
  const [theme, setTheme] = useState('light'); // Clean, friendly light theme by default
  const [selectedCommodity, setSelectedCommodity] = useState(null);

  const t = translations[lang] || translations.en;

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-white transition-colors duration-200 font-sans">
        {/* Top Sticky Navigation */}
        <Navbar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          lang={lang}
          setLang={setLang}
          persona={persona}
          setPersona={setPersona}
          theme={theme}
          setTheme={setTheme}
          t={t}
        />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
          {currentTab === 'dashboard' && (
            <PriceDashboard
              commodities={commodities}
              onSelectCommodity={(item) => setSelectedCommodity(item)}
              lang={lang}
              persona={persona}
              theme={theme}
              t={t}
            />
          )}

          {currentTab === 'trends' && (
            <HistoricalTrends
              commodities={commodities}
              lang={lang}
              theme={theme}
              t={t}
            />
          )}

          {currentTab === 'predict' && (
            <PricePrediction
              commodities={commodities}
              lang={lang}
              theme={theme}
              t={t}
            />
          )}

          {currentTab === 'map' && (
            <DistrictMap
              commodities={commodities}
              lang={lang}
              theme={theme}
              t={t}
            />
          )}

          {currentTab === 'alerts' && (
            <PriceAlerts
              commodities={commodities}
              lang={lang}
              theme={theme}
              t={t}
            />
          )}

          {currentTab === 'insights' && (
            <MarketInsights
              commodities={commodities}
              lang={lang}
              theme={theme}
              t={t}
            />
          )}
        </main>

        {/* Detail Modal */}
        {selectedCommodity && (
          <CommodityDetailModal
            commodity={selectedCommodity}
            onClose={() => setSelectedCommodity(null)}
            lang={lang}
            persona={persona}
            theme={theme}
            t={t}
          />
        )}

        {/* Footer */}
        <Footer lang={lang} theme={theme} />
      </div>
    </div>
  );
}

