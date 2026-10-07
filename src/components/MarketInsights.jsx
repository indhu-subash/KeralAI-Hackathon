import React, { useState } from 'react';
import { 
  CloudRain, 
  BrainCircuit, 
  Send, 
  Sparkles, 
  FileSpreadsheet, 
  Waves,
  MessageSquare
} from 'lucide-react';

export default function MarketInsights({ commodities, lang, theme, t }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'ml' 
        ? 'നമസ്കാരം! ഞാൻ കേരംബോട്ട് (KeramBot AI). റബ്ബർ വിപണി, കൊപ്ര തോട്ടവില, മത്തി ലേലം, അല്ലെങ്കിൽ ഗതാഗത നിർദ്ദേശങ്ങൾ ചോദിക്കൂ.'
        : 'Namaskaram! I am KeramBot, your AI Market Assistant. Ask me about rubber trends, copra MSP, fish landing prices, or transport advisories across Kerala.'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Common-person friendly 1-Tap Quick Sample Questions
  const sampleQuestions = lang === 'ml' ? [
    "റബ്ബർ ഇപ്പോൾ വിൽക്കണമോ?",
    "കോഴിക്കോട്ട് കൊപ്ര വില എത്ര?",
    "മത്തി വില വർദ്ധിക്കുമോ?",
    "നേന്ത്രപ്പഴം വിപണി ട്രെൻഡ് എന്താണ്?"
  ] : [
    "Should I sell Rubber RSS-4 today?",
    "What is Copra rate in Kozhikode?",
    "Will Sardine fish prices increase?",
    "Nendran Banana market demand trend?"
  ];

  const handleAsk = (queryText) => {
    if (!queryText.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: queryText }];
    setMessages(newMessages);
    setInputMessage('');

    // Generate intelligent AI reply based on Kerala agri context
    setTimeout(() => {
      let reply = lang === 'ml' 
        ? "ഞങ്ങളുടെ വിപണി വിവരങ്ങൾ അനുസരിച്ച്:" 
        : "Based on our latest APMC market data and regional weather feeds:";
      const lower = queryText.toLowerCase();

      if (lower.includes('rubber') || lower.includes('റബ്ബർ')) {
        reply = lang === 'ml'
          ? "കോട്ടയത്ത് റബ്ബർ RSS-4 ഇപ്പോൾ ₹212.50/kg നിരക്കിൽ വിൽപ്പന നടക്കുന്നു. ടയർ കമ്പനികളുടെ ആവശ്യകത ഉയർന്നതാണ്. മഴക്കാലത്തെ ഉത്പാദനക്കുറവ് കാരണം വില ₹220/kg വരെ ഉയരാൻ സാധ്യതയുണ്ട്."
          : "Rubber RSS-4 is currently trading strong at ₹212.50/kg in Kottayam. Tire manufacturers are placing heavy procurement orders. Hold dry sheet stock if possible as prices are projected to touch ₹220/kg.";
      } else if (lower.includes('copra') || lower.includes('coconut') || lower.includes('കൊപ്ര') || lower.includes('തേങ്ങ')) {
        reply = lang === 'ml'
          ? "വടകര വിപണിയിൽ കൊപ്ര വില ₹114.50/kg ആണ്. നാഫെഡ് (NAFED) സംഭരണ വില ₹111.60/kg ആണ്."
          : "Vatakara Copra market rate is ₹114.50/kg. NAFED MSP buyback is active at ₹111.60/kg.";
      } else if (lower.includes('fish') || lower.includes('sardine') || lower.includes('മത്തി')) {
        reply = lang === 'ml'
          ? "നീണ്ടകരയിൽ മത്തി വിപണി നിരക്ക് ₹175/kg ആണ്. പാലക്കാട്, വയനാട് ജില്ലകളിൽ ഇതിന് ₹215/kg വരെ വിൽപ്പന നിരക്കുണ്ട്."
          : "Sardine (Mathi) landings at Neendakara are ₹175/kg wholesale. Inland districts like Palakkad offer sale potential up to ₹215/kg.";
      } else if (lower.includes('banana') || lower.includes('nendran') || lower.includes('നേന്ത്രൻ')) {
        reply = lang === 'ml'
          ? "ഓണച്ചന്തയും ക്ഷേത്ര ഉത്സവങ്ങളും പ്രമാണിച്ച് നേന്ത്രപ്പഴത്തിന് വലിയ ഡിമാൻഡ് ഉണ്ട് (+9.27%). വയനാട്ടിൽ തോട്ടവില ₹42/kg ആണ്."
          : "Nendran Banana is surging (+9.27%) due to upcoming temple festival demand. Current Wayanad farmgate is ₹42/kg.";
      } else {
        reply = lang === 'ml'
          ? "കേരള വിപണിയിൽ റബ്ബർ, ഏലം, നേന്ത്രപ്പഴം എന്നിവയ്ക്ക് നല്ല വിലക്കയറ്റമുണ്ട്. തീരദേശങ്ങളിൽ മത്സ്യലഭ്യത സാധാരണ നിലയിലാണ്."
          : "Market summary: Rubber, Cardamom, and Nendran Bananas are showing positive price momentum across central Kerala.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 500);
  };

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,Commodity,Category,Primary District,Farmgate Price (INR),Mandi Price (INR),Retail Price (INR),24h Change (%)\n";
    commodities.forEach((c) => {
      csvContent += `"${c.name}","${c.categoryNameEn}","${c.primaryDistrict}",${c.farmgatePrice},${c.mandiPrice},${c.retailPrice},${c.change24hPercent}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Kerala_Market_Intelligence_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-800 mb-2">
            <BrainCircuit className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            {t.insights.title}
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {lang === 'ml' ? 'കേരള വിപണി AI വിവര കേന്ദ്രം' : 'Kerala Market Intelligence & AI Hub'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.insights.subtitle}</p>
        </div>

        {/* Download CSV Report */}
        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-sm self-start md:self-auto"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>{t.insights.exportReport}</span>
        </button>
      </div>

      {/* Grid: Weather Impact & AI Commentary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Weather Bulletins */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <CloudRain className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            {t.insights.weatherTitle}
          </h3>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-cyan-200 dark:border-cyan-900">
              <div className="flex items-center justify-between font-bold text-cyan-800 dark:text-cyan-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <CloudRain className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  {lang === 'ml' ? 'ഇടുക്കി & വയനാട് തോട്ടമേഖലയിൽ മഴ' : 'Idukki & Wayanad Rainfall Alert'}
                </span>
                <span className="text-[10px] bg-cyan-100 dark:bg-cyan-950 px-2 py-0.5 rounded font-bold text-cyan-800 dark:text-cyan-400">
                  ACTIVE
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'ml'
                  ? 'കട്ടപ്പന മേഖലയിൽ മഴയ്ക്ക് സാധ്യത. റബ്ബർ ടാപ്പിംഗ് തടസ്സപ്പെടാൻ സാധ്യതയുള്ളതിനാൽ റബ്ബർ ഷീറ്റ് വില സ്ഥിരത കൈവരിക്കും.'
                  : 'Shower forecast in Kattappana cardamom belt. Tapping delays expected; dry RSS-4 prices expected to stay elevated.'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-amber-200 dark:border-amber-900">
              <div className="flex items-center justify-between font-bold text-amber-800 dark:text-amber-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  {lang === 'ml' ? 'തീരദേശ കാറ്റ് & കടൽക്കാറ്റ് മുന്നറിയിപ്പ്' : 'Coastal High Wave Alert'}
                </span>
                <span className="text-[10px] bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded font-bold text-amber-800 dark:text-amber-400">
                  ADVISORY
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'ml'
                  ? 'നീണ്ടകര, ബേപ്പൂർ തീരങ്ങളിൽ ജാഗ്രതാ നിർദ്ദേശം. നാളെ ആഴക്കടൽ മത്സ്യലഭ്യതയിൽ മാറ്റമുണ്ടാകാം.'
                  : 'Fishermen advised caution along Neendakara coast. Deep-sea landings may adjust Seer Fish prices.'}
              </p>
            </div>
          </div>
        </div>

        {/* AI Market Commentary */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Sparkles className="w-5 h-5 text-amber-500" />
            {t.insights.aiAnalystTitle}
          </h3>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold block mb-1">
                {lang === 'ml' ? '📈 റബ്ബർ RSS-4 നല്ല സൂചന' : '📈 Rubber RSS-4 Bullish Signal'}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'ml'
                  ? 'കോട്ടയം മണ്ടിയിൽ വ്യാവസായിക വാങ്ങലുകൾ ശക്തമാണ്. കിലോയ്ക്ക് ₹212.50 സ്ഥിരത പുലർത്തുന്നു.'
                  : 'Domestic Kottayam APMC spot market maintaining healthy buying interest from tyre manufacturers.'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-teal-700 dark:text-teal-300 font-bold block mb-1">
                {lang === 'ml' ? '🥥 കൊപ്ര & നാളികേര നിരക്ക്' : '🥥 Copra & Coconut Oil Stability'}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'ml'
                  ? 'വടകരയിൽ പച്ചത്തേങ്ങയ്ക്ക് മുട്ടൊന്നിന് ₹36 നിരക്കിൽ മികച്ച വിപണിയുണ്ട്.'
                  : 'Raw coconut prices holding firm at ₹36/nut in Vatakara.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KeramBot Interactive AI Assistant */}
      <div className="bg-white dark:bg-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-950 border border-teal-300 dark:border-teal-800 flex items-center justify-center">
            <BrainCircuit className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.insights.askKeramBot}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {lang === 'ml' ? 'ചോദിക്കാനും സംശയങ്ങൾ തീർക്കാനും ഒറ്റ ടാപ്പിൽ ചോദ്യങ്ങൾ തിരഞ്ഞെടുക്കുക:' : 'Select a sample question below or type your query:'}
            </p>
          </div>
        </div>

        {/* Quick Tap Sample Prompts */}
        <div className="flex flex-wrap items-center gap-2">
          {sampleQuestions.map((sq, i) => (
            <button
              key={i}
              onClick={() => handleAsk(sq)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-slate-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 font-semibold text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{sq}</span>
            </button>
          ))}
        </div>

        {/* Chat Log Window */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 h-64 overflow-y-auto space-y-3 text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-md p-3.5 rounded-2xl font-medium leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk(inputMessage);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={t.insights.botPlaceholder}
            className="flex-1 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs focus:border-teal-500 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span>{t.insights.send}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

