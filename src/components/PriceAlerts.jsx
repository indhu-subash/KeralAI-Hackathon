import React, { useState } from 'react';
import { 
  Bell, 
  Plus, 
  Smartphone, 
  MessageSquare, 
  Mail, 
  Trash2, 
  Play, 
  CheckCircle2, 
  Zap, 
  ShieldAlert 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PriceAlerts({ commodities, lang, theme, t }) {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      commodityId: 'rubber-rss4',
      commodityName: 'Rubber RSS-4',
      targetPrice: 215,
      condition: 'above',
      district: 'Kottayam',
      channel: 'WhatsApp',
      active: true
    },
    {
      id: 2,
      commodityId: 'nendran-banana',
      commodityName: 'Nendran Banana',
      targetPrice: 40,
      condition: 'below',
      district: 'Wayanad',
      channel: 'SMS',
      active: true
    }
  ]);

  // Form states
  const [formCommodityId, setFormCommodityId] = useState(commodities[0]?.id || 'rubber-rss4');
  const [formTargetPrice, setFormTargetPrice] = useState('210');
  const [formCondition, setFormCondition] = useState('above');
  const [formChannel, setFormChannel] = useState('WhatsApp');

  // Triggered alert simulation state
  const [simulatedAlert, setSimulatedAlert] = useState(null);

  const handleAddAlert = (e) => {
    e.preventDefault();
    const comm = commodities.find((c) => c.id === formCommodityId);
    if (!comm) return;

    const newAlert = {
      id: Date.now(),
      commodityId: comm.id,
      commodityName: comm.name,
      targetPrice: parseFloat(formTargetPrice) || comm.mandiPrice,
      condition: formCondition,
      district: comm.primaryDistrict,
      channel: formChannel,
      active: true
    };

    setAlerts([newAlert, ...alerts]);
  };

  const handleDelete = (id) => {
    setAlerts(alerts.filter((a) => a.id !== id));
  };

  const handleToggle = (id) => {
    setAlerts(alerts.map((a) => (a.id === id ? { ...a, active: !a.active } : a)));
  };

  const handleSimulateTrigger = () => {
    const randomAlert = alerts[0] || {
      commodityName: 'Rubber RSS-4',
      targetPrice: 215,
      condition: 'above',
      channel: 'WhatsApp'
    };

    setSimulatedAlert({
      title: `⚡ Price Alert Triggered!`,
      message: `${randomAlert.commodityName} mandi rate just hit ₹${randomAlert.targetPrice + 3.50}/kg at Kottayam APMC! Target was ₹${randomAlert.targetPrice}.`,
      channel: randomAlert.channel,
      time: 'Just Now'
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 flex items-center justify-center">
            <Bell className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{t.alerts.title}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.alerts.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Simulated Live Alert Toast Notification */}
      {simulatedAlert && (
        <div className="bg-emerald-900 dark:bg-emerald-950 border-2 border-emerald-500 rounded-2xl p-5 shadow-2xl relative animate-bounce">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500 text-slate-950 rounded-xl font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  {simulatedAlert.channel} Notification Simulator • {simulatedAlert.time}
                </span>
                <h4 className="text-base font-bold text-white">{simulatedAlert.title}</h4>
                <p className="text-xs text-emerald-100 font-medium mt-0.5">{simulatedAlert.message}</p>
              </div>
            </div>
            <button
              onClick={() => setSimulatedAlert(null)}
              className="text-slate-300 hover:text-white text-xs font-bold px-2 py-1 bg-slate-900 rounded-lg"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main Grid: Form & Active Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Create Alert Form */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Plus className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            {t.alerts.createAlert}
          </h3>

          <form onSubmit={handleAddAlert} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                {t.alerts.commodityLabel}
              </label>
              <select
                value={formCommodityId}
                onChange={(e) => setFormCommodityId(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:border-emerald-500 focus:outline-none"
              >
                {commodities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {lang === 'ml' ? c.nameMl : c.name} (Current: ₹{c.mandiPrice})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                {t.alerts.condition}
              </label>
              <select
                value={formCondition}
                onChange={(e) => setFormCondition(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:border-emerald-500 focus:outline-none"
              >
                <option value="above">{t.alerts.conditions.above}</option>
                <option value="below">{t.alerts.conditions.below}</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                {t.alerts.targetPrice}
              </label>
              <input
                type="number"
                value={formTargetPrice}
                onChange={(e) => setFormTargetPrice(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:border-emerald-500 focus:outline-none"
                placeholder="e.g. 215"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                {t.alerts.channel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['WhatsApp', 'SMS', 'In-App'].map((ch) => (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => setFormChannel(ch)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      formChannel === ch
                        ? 'bg-emerald-600 text-white border-emerald-500'
                        : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-sm text-xs mt-2"
            >
              {t.alerts.addBtn}
            </button>
          </form>
        </div>

        {/* Active Alerts List & Simulator */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {t.alerts.activeAlerts} ({alerts.length})
              </h3>

              {/* Trigger Simulator Button */}
              <button
                onClick={handleSimulateTrigger}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-bold hover:bg-amber-200 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {t.alerts.triggerSimBtn}
              </button>
            </div>

            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      {alert.channel === 'WhatsApp' ? (
                        <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      ) : alert.channel === 'SMS' ? (
                        <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      ) : (
                        <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{alert.commodityName}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Trigger when price is <strong className="text-emerald-700 dark:text-emerald-300">{alert.condition} ₹{alert.targetPrice}</strong> ({alert.district})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Active Switcher */}
                    <button
                      onClick={() => handleToggle(alert.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${
                        alert.active
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-500 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {alert.active ? 'ACTIVE' : 'PAUSED'}
                    </button>

                    <button
                      onClick={() => handleDelete(alert.id)}
                      className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

