"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { typo } from "@/lib/typography";

type HomeContactFormProps = {
  heading?: string;
  note?: string;
  phoneRequired?: boolean;
  service?: string;
};

export function HomeContactForm({
  heading,
  note,
  phoneRequired = false,
  service = "Homepage Contact",
}: HomeContactFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    if (phoneRequired && !form.phone) return;
    setFormSubmitting(true);
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.phone || "Website Inquiry",
          service,
          notes: form.message,
          estimatedBudget: "TBD",
        }),
      });
      setFormSent(true);
      setTimeout(() => router.push("/thank-you"), 600);
    } catch {
      setFormSent(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800 shadow-2xl">
      {(heading || note) && !formSent ? (
        <div className="mb-6">
          {heading ? (
            <h2 className={`${typo.sectionTitle} text-white`}>{heading}</h2>
          ) : null}
          {note ? (
            <p className="mt-3 text-sm text-slate-300">{note}</p>
          ) : null}
        </div>
      ) : null}
      {formSent ? (
        <div className="py-10 text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" aria-hidden="true" />
          <h3 className={typo.contentTitle}>Message received</h3>
          <p className="mt-2 text-sm text-slate-400">We&apos;ll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="home-name" className="block text-xs font-semibold text-slate-400 mb-1.5">
              Name
            </label>
            <input
              id="home-name"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name *"
            />
          </div>
          <div>
            <label htmlFor="home-email" className="block text-xs font-semibold text-slate-400 mb-1.5">
              Email
            </label>
            <input
              id="home-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email *"
            />
          </div>
          <div>
            <label htmlFor="home-phone" className="block text-xs font-semibold text-slate-400 mb-1.5">
              Phone Number
            </label>
            <input
              id="home-phone"
              name="phone"
              type="tel"
              required={phoneRequired}
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={phoneRequired ? "Your Number *" : "Your Number"}
            />
          </div>
          <div>
            <label htmlFor="home-message" className="block text-xs font-semibold text-slate-400 mb-1.5">
              Message
            </label>
            <textarea
              id="home-message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Message..."
            />
          </div>
          <button
            type="submit"
            disabled={formSubmitting}
            className="w-full rounded-xl bg-white text-slate-950 font-bold text-sm py-3.5 hover:bg-slate-100 transition-colors disabled:opacity-60 cursor-pointer"
          >
            {formSubmitting ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      )}
    </div>
  );
}
