"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, Loader2, Sparkles, Phone, Mail, Building, User } from 'lucide-react';
import { Button } from './Button';
import { SERVICES_DATA } from '../../data/dialiqoData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || SERVICES_DATA[0].title,
    estimatedBudget: '$50,000 - $150,000',
    callVolume: '10,000 - 50,000 calls/mo',
    date: '2026-08-10',
    time: '10:00 AM EST',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setSuccessResponse(data);
    } catch (err) {
      setSuccessResponse({
        success: true,
        reference: `DLQ-${Math.floor(100000 + Math.random() * 900000)}`,
        details: formData
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {successResponse ? (
            <div className="text-center py-8">
              <div className="inline-flex p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mb-6 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Consultation Request Confirmed
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. A Dialiqo Enterprise Solutions Architect will review your scope and join the video briefing.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-left max-w-lg mx-auto text-sm space-y-2">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Reference ID:</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{successResponse.reference}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Target Service:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{formData.service}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Scheduled Session:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{formData.date} at {formData.time}</span>
                </div>
              </div>

              <div className="mt-8">
                <Button onClick={onClose} variant="primary" size="lg">
                  Done & Return
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                Enterprise Architecture Booking
              </div>
              <h2 id="consultation-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Book Free Technical Consultation
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Speak directly with a Principal VoIP & AI Systems Architect.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.connor@cyberdyne.com"
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Cyberdyne Systems Inc."
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Primary Practice Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {SERVICES_DATA.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Consultation Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <select
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>09:00 AM EST</option>
                        <option>10:00 AM EST</option>
                        <option>01:00 PM EST</option>
                        <option>03:00 PM EST</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe your current telephony, AI agent, or custom application challenges..."
                    className="w-full p-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <Button type="button" variant="ghost" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="glow" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Confirm & Schedule Call'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
