import React, { useState } from 'react';
import { 
  CloudRain, 
  BrainCircuit, 
  Send, 
  Download, 
  Sparkles, 
  Compass, 
  ShieldAlert, 
  FileSpreadsheet, 
  Sun,
  Waves
} from 'lucide-react';

export default function MarketInsights({ commodities, lang, t }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaskaram! I am KeramBot, your AI Market Assistant. Ask me about rubber trends, copra MSP, fish landing prices, or transport advisories across Kerala.'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInputMessage('');

    // Generate intelligent AI reply based on Kerala agri context
    setTimeout(() => {
      let reply = "Based on our latest APMC market data and regional weather feeds:";
      const lower = userText.toLowerCase();

      if (lower.includes('rubber') || lower.includes('റബ്ബർ')) {
        reply = "Rubber RSS-4 is currently trading strong at ₹212.50/kg in Kottayam. Tire manufacturers are placing heavy Q4 procurement orders. Hold dry sheet stock if possible as prices are projected to touch ₹220/kg before monsoon tapping delays.";
      } else if (lower.includes('copra') || lower.includes('coconut') || lower.includes('കൊപ്ര')) {
        reply = "Vatakara Copra market rate is ₹114.50/kg. Tamil Nadu Kangayam oil mills are supplying copra at competitive rates, keeping domestic surge capped. NAFED MSP buyback is active at ₹111.60/kg.";
      } else if (lower.includes('fish') || lower.includes('sardine') || lower.includes('മത്തി')) {
        reply = "Sardine (Mathi) landings at Neendakara (Kollam) are strong today at ₹175/kg wholesale. Inland districts like Palakkad and Wayanad offer arbitrage sale potential up to ₹215/kg.";
      } else if (lower.includes('banana') || lower.includes('nendran') || lower.includes('നേന്ത്രൻ')) {
        reply = "Nendran Banana is surging (+9.27%) due to upcoming temple festival demand and high chip maker buying in Palakkad and Thrissur. Current Wayanad farmgate is ₹42/kg.";
      } else {
        reply = "Market summary: Rubber, Cardamom, and Nendran Bananas are showing positive price momentum across central Kerala. Marine fish arrivals remain robust off the Kollam and Ernakulam coasts.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
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
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-2">
            <BrainCircuit className="w-3.5 h-3.5 text-teal-400" />
            {t.insights.title}
          </div>
          <h2 className="text-2xl font-black text-white">Kerala Market Intelligence & AI Hub</h2>
          <p className="text-xs text-slate-400 mt-1">{t.insights.subtitle}</p>
        </div>

        {/* Download CSV Report */}
        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-lg shadow-emerald-900/50 self-start md:self-auto"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>{t.insights.exportReport}</span>
        </button>
      </div>

      {/* Grid: Weather Impact & AI Commentary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Weather Bulletins */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <CloudRain className="w-5 h-5 text-cyan-400" />
            {t.insights.weatherTitle}
          </h3>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-4 rounded-2xl border border-cyan-500/30">
              <div className="flex items-center justify-between font-bold text-cyan-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <CloudRain className="w-4 h-4 text-cyan-400" />
                  Idukki & Wayanad High-Range Rainfall
                </span>
                <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded text-cyan-400">ACTIVE</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Moderate to heavy shower forecast in Kattappana cardamom belt. Tapping delays in rubber plantations expected for next 48 hours; dry RSS-4 prices expected to stay elevated.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-amber-500/30">
              <div className="flex items-center justify-between font-bold text-amber-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-amber-400" />
                  Coastal High Wave & Wind Alert (Kollam & Kozhikode)
                </span>
                <span className="text-[10px] bg-amber-950 px-2 py-0.5 rounded text-amber-400">ADVISORY</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Fishermen advised caution along Neendakara and Beypore coastlines. Deep-sea landings may reduce by 15% tomorrow, expected to nudge Seer Fish and Prawn prices upwards.
              </p>
            </div>
          </div>
        </div>

        {/* AI Market Commentary */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            {t.insights.aiAnalystTitle}
          </h3>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span className="text-emerald-400 font-bold block mb-1">📈 Rubber RSS-4 Bullish Signal</span>
              <p className="text-slate-300 leading-relaxed">
                International synthetic rubber prices surged +2.4% on Tokyo Exchange. Domestic Kottayam APMC spot market maintaining healthy buying interest from automobile tyre manufacturers.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span className="text-teal-300 font-bold block mb-1">🥥 Copra & Coconut Oil Stability</span>
              <p className="text-slate-300 leading-relaxed">
                Raw coconut prices holding firm at ₹36/nut in Vatakara. Kerafed procurement drives helping prevent steep declines despite Kangayam mill supply arrivals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KeramBot Interactive AI Assistant */}
      <div className="bg-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
            <BrainCircuit className="w-5 h-5 text-teal-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{t.insights.askKeramBot}</h3>
            <p className="text-xs text-slate-400">Ask any question on Kerala commodity prices, harvesting timing, or district trade strategies</p>
          </div>
        </div>

        {/* Chat Log Window */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 h-64 overflow-y-auto space-y-3 text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-md p-3.5 rounded-2xl font-medium leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'bg-slate-900 border border-slate-700 text-slate-200 rounded-bl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={t.insights.botPlaceholder}
            className="flex-1 bg-slate-950 text-white px-4 py-3 rounded-xl border border-slate-700 text-xs focus:border-teal-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-teal-900/40"
          >
            <Send className="w-4 h-4" />
            <span>{t.insights.send}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
