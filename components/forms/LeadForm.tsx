'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  fullLeadSchema,
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
  LeadFormData,
  businessTypes,
  goalOptions,
} from '@/lib/validation/lead';
import {
  Check,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Globe,
  CalendarDays,
  Sparkles,
  LayoutDashboard,
  MessageCircle,
  Cpu,
  Bot,
  HelpCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const goalIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Website: Globe,
  Bookings: CalendarDays,
  'Guest experience': Sparkles,
  Operations: LayoutDashboard,
  WhatsApp: MessageCircle,
  Automation: Cpu,
  AI: Bot,
  'Not sure': HelpCircle,
};

const popularCities = ['Marrakech', 'Fès', 'Essaouira', 'Taghazout', 'Ouarzazate', 'Agadir'];

export const LeadForm = ({ submitLabel = 'Request Digital Audit' }: { submitLabel?: string }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<LeadFormData>>({
    goals: [],
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  const steps = [
    { num: '01', title: 'Contact', subtitle: 'Your details' },
    { num: '02', title: 'Operation', subtitle: 'Business profile' },
    { num: '03', title: 'Priorities', subtitle: 'Systems to audit' },
  ];
  const schemas = [stepOneSchema, stepTwoSchema, stepThreeSchema];

  useEffect(() => {
    const firstErrorName = ['name', 'email', 'whatsapp', 'businessName', 'businessType', 'city', 'goals'].find(
      (fieldName) => errors[fieldName]
    );
    const field = firstErrorName ? formRef.current?.elements.namedItem(firstErrorName) : null;

    if (field instanceof HTMLElement) {
      field.focus();
    }
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCitySelect = (cityName: string) => {
    setFormData((prev) => ({ ...prev, city: cityName }));
    if (errors.city) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.city;
        return newErrors;
      });
    }
  };

  const toggleGoal = (goal: typeof goalOptions[number]) => {
    setFormData((prev) => {
      const goals = prev.goals || [];
      if (goals.includes(goal)) {
        return { ...prev, goals: goals.filter((g) => g !== goal) };
      } else {
        return { ...prev, goals: [...goals, goal] };
      }
    });
    if (errors.goals) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.goals;
        return newErrors;
      });
    }
  };

  const handleNext = () => {
    const currentSchema = schemas[currentStep];
    const result = currentSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          formattedErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
      e.preventDefault();
      if (currentStep < 2) {
        handleNext();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = fullLeadSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          formattedErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setStatus('submitting');
    setServerError('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website_url: honeypot }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setServerError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerError('A network error occurred. Please try again.');
    }
  };

  // Success State
  if (status === 'success') {
    return (
      <div className="py-10 text-center flex flex-col items-center animate-step-fade">
        <div className="w-16 h-16 bg-accent/15 border border-accent/40 text-accent rounded-full flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(200,100,60,0.25)]">
          <CheckCircle2 className="w-8 h-8 text-accent animate-subtle-pulse" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>DIAGNOSTIC INTAKE CONFIRMED</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Audit Request Received
        </h3>
        <p className="text-sm text-muted max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <strong className="text-foreground font-semibold">{formData.name}</strong>. We will review{' '}
          <strong className="text-foreground font-semibold">{formData.businessName || 'your business'}</strong> and prepare your 48-hour diagnostic report.
        </p>

        {/* Diagnostic Snapshot Box */}
        <div className="w-full max-w-sm rounded-xl border border-border/80 bg-background/80 p-4 text-left font-mono text-xs space-y-2 mb-6">
          <div className="flex justify-between border-b border-border/50 pb-2 text-[10px] text-muted">
            <span>INTAKE SUMMARY</span>
            <span className="text-emerald-400">QUEUED FOR REVIEW</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Contact:</span>
            <span className="text-foreground font-semibold truncate max-w-[200px]">{formData.email}</span>
          </div>
          {formData.whatsapp && (
            <div className="flex justify-between">
              <span className="text-muted">WhatsApp:</span>
              <span className="text-foreground font-semibold">{formData.whatsapp}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted">Turnaround:</span>
            <span className="text-accent font-semibold">48 Hours</span>
          </div>
        </div>

        <p className="text-xs text-muted/80">
          Need immediate clarification? Reach our lead engineer directly on{' '}
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  const inputContainerClasses = "relative flex items-center";
  const inputClasses =
    "w-full bg-background/90 border border-border/80 rounded-lg pl-10 pr-9 py-2.5 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted/40 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all font-mono shadow-inner";
  const labelClasses = "block text-[11px] font-mono uppercase tracking-wider text-muted mb-1.5";
  const errorClasses = "text-red-400 text-[11px] font-mono mt-1.5 flex items-center gap-1";

  // Progress percentage
  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  return (
    <form ref={formRef} onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="relative">
      {/* Dynamic Progress Header */}
      <div className="mb-6 space-y-3" aria-live="polite">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">
              STEP {steps[currentStep].num}
            </span>
            <span className="text-muted/60">•</span>
            <span className="text-foreground font-semibold">
              {steps[currentStep].title}
            </span>
            <span className="text-muted hidden sm:inline">
              ({steps[currentStep].subtitle})
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted">
            <Clock className="w-3 h-3 text-accent" />
            <span>~45 sec</span>
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="h-1.5 w-full bg-background/80 rounded-full overflow-hidden border border-border/50">
          <div
            className="h-full bg-gradient-to-r from-accent/80 via-accent to-[#FFB08F] transition-all duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(224,122,82,0.5)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Clickable Step Pills */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {steps.map((step, idx) => {
            const isCurrent = idx === currentStep;
            const isPassed = idx < currentStep;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (isPassed) {
                    setCurrentStep(idx);
                    setErrors({});
                  }
                }}
                disabled={!isPassed && !isCurrent}
                className={`py-1.5 px-2 rounded-md border text-left transition-all ${
                  isCurrent
                    ? 'bg-accent/15 border-accent/50 text-accent'
                    : isPassed
                    ? 'bg-surface/90 border-border text-foreground hover:border-accent/40 cursor-pointer'
                    : 'bg-background/40 border-border/40 text-muted/40 cursor-default'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono leading-none">
                  <span>{step.num}. {step.title}</span>
                  {isPassed && <Check className="w-3 h-3 text-emerald-400" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {serverError && status === 'error' && (
        <div className="mb-5 bg-red-950/25 border border-red-900/60 p-3.5 rounded-lg flex items-center gap-2.5 text-xs font-mono text-red-200">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <p>{serverError}</p>
        </div>
      )}

      {/* Honeypot field for bot mitigation */}
      <input
        type="text"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      {/* Form Steps Body */}
      <div className="min-h-[250px]">
        {/* Step 1: Contact Details */}
        {currentStep === 0 && (
          <div className="space-y-4 animate-step-fade">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Primary Contact Name <span className="text-accent">*</span>
              </label>
              <div className={inputContainerClasses}>
                <User className="absolute left-3.5 w-4 h-4 text-muted pointer-events-none" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Youssef Bennani"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {formData.name && formData.name.length >= 2 && !errors.name && (
                  <Check className="absolute right-3 w-4 h-4 text-emerald-400 pointer-events-none" />
                )}
              </div>
              {errors.name && (
                <span id="name-error" className={errorClasses}>
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className={labelClasses}>
                Direct Email Address <span className="text-accent">*</span>
              </label>
              <div className={inputContainerClasses}>
                <Mail className="absolute left-3.5 w-4 h-4 text-muted pointer-events-none" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youssef@riadexample.com"
                  value={formData.email || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {formData.email && formData.email.includes('@') && !errors.email && (
                  <Check className="absolute right-3 w-4 h-4 text-emerald-400 pointer-events-none" />
                )}
              </div>
              {errors.email && (
                <span id="email-error" className={errorClasses}>
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.email}
                </span>
              )}
            </div>

            {/* WhatsApp Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="whatsapp" className="text-[11px] font-mono uppercase tracking-wider text-muted">
                  WhatsApp Mobile <span className="text-muted/60 lowercase">(optional)</span>
                </label>
                <span className="text-[10px] font-mono text-accent/80">Direct PDF delivery</span>
              </div>
              <div className={inputContainerClasses}>
                <Phone className="absolute left-3.5 w-4 h-4 text-muted pointer-events-none" />
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="+212 6XX-XXXXXX"
                  value={formData.whatsapp || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                />
                {formData.whatsapp && formData.whatsapp.length >= 8 && !errors.whatsapp && (
                  <Check className="absolute right-3 w-4 h-4 text-emerald-400 pointer-events-none" />
                )}
              </div>
              {errors.whatsapp && (
                <span id="whatsapp-error" className={errorClasses}>
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.whatsapp}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Business Profile */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-step-fade">
            {/* Property / Business Name */}
            <div>
              <label htmlFor="businessName" className={labelClasses}>
                Property or Agency Name <span className="text-accent">*</span>
              </label>
              <div className={inputContainerClasses}>
                <Building2 className="absolute left-3.5 w-4 h-4 text-muted pointer-events-none" />
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="e.g. Riad Kasbah Atlas"
                  value={formData.businessName || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                />
                {formData.businessName && formData.businessName.length >= 2 && !errors.businessName && (
                  <Check className="absolute right-3 w-4 h-4 text-emerald-400 pointer-events-none" />
                )}
              </div>
              {errors.businessName && (
                <span id="businessName-error" className={errorClasses}>
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.businessName}
                </span>
              )}
            </div>

            {/* Operation Category */}
            <div>
              <label htmlFor="businessType" className={labelClasses}>
                Operation Category <span className="text-accent">*</span>
              </label>
              <div className={inputContainerClasses}>
                <Sparkles className="absolute left-3.5 w-4 h-4 text-muted pointer-events-none" />
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType || ''}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                  aria-describedby={errors.businessType ? 'businessType-error' : undefined}
                >
                  <option value="" disabled>
                    Select business category...
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type} className="bg-surface text-foreground">
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 w-4 h-4 text-muted pointer-events-none" />
              </div>
              {errors.businessType && (
                <span id="businessType-error" className={errorClasses}>
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.businessType}
                </span>
              )}
            </div>

            {/* City / Region with Quick Chips */}
            <div>
              <label htmlFor="city" className={labelClasses}>
                Location / Moroccan City <span className="text-accent">*</span>
              </label>
              <div className={inputContainerClasses}>
                <MapPin className="absolute left-3.5 w-4 h-4 text-muted pointer-events-none" />
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="e.g. Marrakech, Fès, Essaouira..."
                  value={formData.city || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-describedby={errors.city ? 'city-error' : undefined}
                />
                {formData.city && formData.city.length >= 2 && !errors.city && (
                  <Check className="absolute right-3 w-4 h-4 text-emerald-400 pointer-events-none" />
                )}
              </div>
              {/* Quick Select Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                <span className="text-[10px] font-mono text-muted/70">Quick pick:</span>
                {popularCities.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleCitySelect(c)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-all ${
                      formData.city === c
                        ? 'bg-accent/20 border-accent text-accent font-semibold'
                        : 'bg-surface/80 border-border/60 text-muted hover:border-accent/40 hover:text-foreground'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {errors.city && (
                <span id="city-error" className={errorClasses}>
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.city}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Upgrade Priorities */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-step-fade">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted">
                  Primary Systems to Upgrade <span className="text-accent">*</span>
                </label>
                <span className="text-[10px] font-mono text-accent">
                  {formData.goals?.length || 0} selected
                </span>
              </div>

              {/* Tactile 8-Card Interactive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {goalOptions.map((goal) => {
                  const isSelected = formData.goals?.includes(goal as typeof goalOptions[number]);
                  const GoalIcon = goalIconMap[goal] || Sparkles;

                  return (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal as typeof goalOptions[number])}
                      aria-pressed={isSelected}
                      className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between min-h-[64px] cursor-pointer group ${
                        isSelected
                          ? 'bg-accent/15 border-accent text-accent shadow-sm shadow-accent/20'
                          : 'bg-background/60 border-border/80 text-muted hover:border-accent/40 hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <GoalIcon className={`w-4 h-4 ${isSelected ? 'text-accent' : 'text-muted group-hover:text-accent'}`} />
                        {isSelected ? (
                          <Check className="w-3.5 h-3.5 text-accent" />
                        ) : (
                          <span className="text-[10px] font-mono opacity-40">+</span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono font-medium leading-tight mt-1 truncate">
                        {goal}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.goals && (
                <span className={errorClasses}>
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.goals}
                </span>
              )}
            </div>

            {/* Operational Notes */}
            <div>
              <label htmlFor="message" className={labelClasses}>
                Current Operational Bottlenecks <span className="text-muted/60 lowercase">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                placeholder="e.g. Overwhelmed by WhatsApp inquiries, double-booking OTA rooms, staff communication gaps..."
                value={formData.message || ''}
                onChange={handleChange}
                className="w-full bg-background/90 border border-border/80 rounded-lg p-3 text-xs sm:text-sm text-foreground placeholder:text-muted/40 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all font-mono resize-none shadow-inner"
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-border/60 bg-surface/50 text-xs font-mono text-muted hover:text-foreground hover:border-accent/40 transition-all uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK</span>
          </button>
        ) : (
          <div />
        )}

        {currentStep < 2 ? (
          <button
            type="button"
            onClick={handleNext}
            className="bg-accent hover:bg-accent/90 text-foreground px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/40 active:scale-[0.98] flex items-center gap-2 group cursor-pointer"
          >
            <span>CONTINUE</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-accent hover:bg-accent/90 text-foreground px-6 py-2.5 sm:py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
          >
            {status === 'submitting' ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>SUBMITTING AUDIT...</span>
              </>
            ) : (
              <span className="flex items-center gap-1.5">
                <span>{submitLabel.toUpperCase()}</span>
                <span>→</span>
              </span>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

