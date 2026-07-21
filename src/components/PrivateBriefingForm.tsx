import React, { useState } from 'react';
import { Mail, Briefcase, DollarSign, ArrowRight, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

interface PrivateBriefingFormProps {
  onSuccessSubmit: () => void;
}

export default function PrivateBriefingForm({ onSuccessSubmit }: PrivateBriefingFormProps) {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Validate fields according to VMN standards
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // 1. Email validation
    if (!email || !email.includes('@') || email.length < 5) {
      newErrors.email = 'EMAIL_FORMAT_INVALID';
    }

    // 2. Name validation
    if (!name || name.trim().length < 3) {
      newErrors.name = 'NAME_REQUIRED_OR_SHORT';
    }

    // 3. Budget validation (Enterprise threshold of $75,000 from VMN Business Model)
    const budgetNum = parseFloat(budget.replace(/[^0-9.]/g, ''));
    if (isNaN(budgetNum) || budgetNum < 75000) {
      newErrors.budget = 'BUDGET_BELOW_ENTERPRISE_THRESHOLD';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear previous errors and simulate mechanical submission delay
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccessSubmit();
    }, 1500); // 1500ms mechanical coordinate validation delay
  };

  const handleResetForm = () => {
    setEmail('');
    setName('');
    setBudget('');
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div id="private-briefing-gate-card" className="border border-zinc-200 bg-[#F9F9FB] p-8 md:p-12 rounded-none relative">
      
      {/* 1. SUCCESS STATE (Mechanical Confirmation Banner) */}
      {isSubmitted ? (
        <div id="form-success-banner" className="space-y-6">
          <div className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>[ TRANSACTION: COMPLETE // CO-PRODUCTION_INITIATED ]</span>
            </div>
            <p className="font-sans text-sm text-zinc-300 leading-relaxed">
              Inbound briefing code compiled successfully. Representative Sarah Jenkins has scheduled coordinate vetting for your proposal.
            </p>
            <div className="border-t border-zinc-800 pt-4 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] text-zinc-500">
              <span>LEDGER_ID: VMN-55091-TX</span>
              <span>TIMESTAMP_SECURE: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleResetForm}
              id="btn-re-brief"
              className="border border-zinc-800 hover:bg-zinc-900 hover:text-white transition-colors py-3 px-6 font-mono text-xs text-zinc-800 uppercase rounded-none"
            >
              [ SUBMIT ANOTHER BRIEF ]
            </button>
            <a
              href="#trend-chart-card"
              id="btn-success-action-link"
              className="bg-[#9C8465] text-zinc-100 hover:bg-opacity-90 transition-all py-3 px-6 font-mono text-xs uppercase flex items-center justify-center gap-2 rounded-none"
            >
              [ BROWSE ALLIANCE STATUS ] <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      ) : (
        /* Form inputs Gate */
        <form onSubmit={handleSubmit} className="space-y-8" id="brief-intake-form" noValidate>
          <div className="border-b border-zinc-200 pb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">[ GATEWAY // DIRECT_ALLIANCE_INTAKE ]</span>
            <h3 className="font-sans font-medium text-2xl text-zinc-900 mt-1">Request Private Corporate Briefing</h3>
            <p className="font-sans text-xs text-zinc-500 mt-2 leading-relaxed">
              VMN serves luxury, enterprise, and deep-tech startups. Minimum alliance threshold is $75,000 for direct custom co-productions.
            </p>
          </div>

          <div className="space-y-6">
            {/* 1. Name Field */}
            <div className="space-y-2">
              <label htmlFor="brief-name-input" className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                01. Representative Contact Name *
              </label>
              <div className="relative">
                <input
                  id="brief-name-input"
                  type="text"
                  required
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'brief-name-error' : undefined}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full bg-white border px-4 py-3 text-sm font-sans text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-0 rounded-none transition-colors ${
                    errors.name ? 'border-[#9C8465] bg-red-50/10' : 'border-zinc-200 focus:border-zinc-800'
                  }`}
                />
                <Briefcase className="absolute right-4 top-3.5 w-4 h-4 text-zinc-300" />
              </div>
              {/* Tactical Validation Gate - No Color Reliance */}
              {errors.name && (
                <div id="brief-name-error" className="font-mono text-[10px] text-zinc-700 flex items-center gap-1.5 mt-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5 text-[#9C8465]" />
                  <span>[ ERROR: {errors.name} ] Contact name must be at least 3 characters.</span>
                </div>
              )}
            </div>

            {/* 2. Email Field */}
            <div className="space-y-2">
              <label htmlFor="brief-email-input" className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                02. Enterprise Corporate Email *
              </label>
              <div className="relative">
                <input
                  id="brief-email-input"
                  type="email"
                  required
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'brief-email-error' : undefined}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. s.jenkins@vanguard.com"
                  className={`w-full bg-white border px-4 py-3 text-sm font-sans text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-0 rounded-none transition-colors ${
                    errors.email ? 'border-[#9C8465] bg-red-50/10' : 'border-zinc-200 focus:border-zinc-800'
                  }`}
                />
                <Mail className="absolute right-4 top-3.5 w-4 h-4 text-zinc-300" />
              </div>
              {errors.email && (
                <div id="brief-email-error" className="font-mono text-[10px] text-zinc-700 flex items-center gap-1.5 mt-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5 text-[#9C8465]" />
                  <span>[ ERROR: {errors.email} ] Please provide a valid enterprise corporate address.</span>
                </div>
              )}
            </div>

            {/* 3. Budget Field */}
            <div className="space-y-2">
              <label htmlFor="brief-budget-input" className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                03. Projected Campaign Allocation *
              </label>
              <div className="relative">
                <input
                  id="brief-budget-input"
                  type="text"
                  required
                  aria-invalid={errors.budget ? 'true' : 'false'}
                  aria-describedby={errors.budget ? 'brief-budget-error' : undefined}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. 75,000"
                  className={`w-full bg-white border px-4 py-3 text-sm font-sans text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-0 rounded-none transition-colors ${
                    errors.budget ? 'border-[#9C8465] bg-red-50/10' : 'border-zinc-200 focus:border-zinc-800'
                  }`}
                />
                <DollarSign className="absolute right-4 top-3.5 w-4 h-4 text-zinc-300" />
              </div>
              {errors.budget ? (
                <div id="brief-budget-error" className="font-mono text-[10px] text-zinc-700 flex items-center gap-1.5 mt-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5 text-[#9C8465]" />
                  <span>[ ERROR: {errors.budget} ] Core projects require at least $75,000 budget underwrite.</span>
                </div>
              ) : (
                <span className="text-[10px] text-zinc-400 font-mono block leading-relaxed">
                  * Budget will be securely validated against corporate alliance tiers.
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            id="btn-submit-brief-inquiry"
            className="w-full bg-zinc-950 hover:bg-[#9C8465] text-white hover:text-zinc-950 transition-all duration-300 py-3.5 px-6 font-mono text-xs uppercase flex items-center justify-center gap-2 rounded-none cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" /> [ COMPILING_INBOUND_BRIEF... ]
              </>
            ) : (
              <>
                [ TRANSMIT DIRECT INQUIRY ] <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
