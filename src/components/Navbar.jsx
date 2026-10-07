import React from 'react';
import { 
  TrendingUp, 
  MapPin, 
  Bell, 
  BrainCircuit, 
  Globe, 
  UserCheck, 
  Activity,
  Layers,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  lang, 
  setLang, 
  persona, 
  setPersona, 
  theme,
  setTheme,
  t 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-emerald-500/20 shadow-sm dark:shadow-slate-950/50 transition-colors duration-200">
      {/* Primary Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentTab('dashboard')}>
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/30 flex items-center justify-center font-bold text-lg">
                🌴
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {t.brandName}
                  </h1>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                    KERALA AGRI
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {t.brandSubtitle}
                </p>
              </div>
            </div>

            {/* Mobile Controls (Lang & Theme) */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'ml' : 'en')}
                className="px-2.5 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs border border-emerald-300 dark:border-emerald-800"
              >
                {lang === 'en' ? 'മലയാളം' : 'English'}
              </button>
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
              </button>
            </div>
          </div>

          {/* Desktop Right Action Toolbar (Role Switcher + Lang Switch + Theme Switch) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Persona Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-medium">{t.persona}:</span>
              <select
                value={persona}
                onChange={(e) => setPersona(e.target.value)}
                className="bg-transparent text-emerald-700 dark:text-emerald-400 font-bold focus:outline-none cursor-pointer"
              >
                <option value="farmer" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                  {t.personas.farmer}
                </option>
                <option value="consumer" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                  {t.personas.consumer}
                </option>
                <option value="trader" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                  {t.personas.trader}
                </option>
                <option value="cooperative" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                  {t.personas.cooperative}
                </option>
              </select>
            </div>

            {/* Language Switch Button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ml' : 'en')}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm"
              title="Switch Language / ഭാഷ മാറ്റുക"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'മലയാളം' : 'English'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
          </div>
        </div>

        {/* Tab Links - Clean & Spaced */}
        <nav className="flex items-center overflow-x-auto gap-2 pt-3 border-t border-slate-200 dark:border-slate-800 mt-2">
          <button
            onClick={() => setCurrentTab('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              currentTab === 'dashboard'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t.nav.dashboard}</span>
          </button>

          <button
            onClick={() => setCurrentTab('trends')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              currentTab === 'trends'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{t.nav.trends}</span>
          </button>

          <button
            onClick={() => setCurrentTab('predict')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              currentTab === 'predict'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900 border border-emerald-200 dark:border-emerald-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>{t.nav.predict}</span>
          </button>

          <button
            onClick={() => setCurrentTab('map')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              currentTab === 'map'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{t.nav.districtMap}</span>
          </button>

          <button
            onClick={() => setCurrentTab('alerts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              currentTab === 'alerts'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bell className="w-4 h-4 text-amber-500" />
            <span>{t.nav.alerts}</span>
          </button>

          <button
            onClick={() => setCurrentTab('insights')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              currentTab === 'insights'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BrainCircuit className="w-4 h-4 text-teal-500" />
            <span>{t.nav.insights}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

