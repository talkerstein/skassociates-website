"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Score = { spire: number; adagio: number };

type Option = {
  id: string;
  label: string;
  note?: string;
  score?: Score;
};

type Question = {
  id: string;
  prompt: string;
  multi?: boolean;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "industry",
    prompt: "What industry is your business in?",
    options: [
      { id: "distribution", label: "Distribution / Wholesale", score: { spire: 2, adagio: 0 } },
      { id: "services", label: "Service / Professional Services", score: { spire: 1, adagio: 1 } },
      { id: "nonprofit", label: "Not-for-Profit", score: { spire: 0, adagio: 3 } },
      { id: "manufacturing", label: "Manufacturing", score: { spire: 2, adagio: 0 } },
      { id: "retail", label: "Retail", score: { spire: 1, adagio: 0 } },
      { id: "other-industry", label: "Other" },
    ],
  },
  {
    id: "volume",
    prompt: "Roughly how many transactions does your business process per month?",
    options: [
      { id: "vol-low", label: "Under 500", score: { spire: 0, adagio: 2 } },
      { id: "vol-mid", label: "500 – 2,000", score: { spire: 1, adagio: 1 } },
      { id: "vol-high", label: "2,000 – 10,000", score: { spire: 2, adagio: 0 } },
      { id: "vol-xhigh", label: "More than 10,000", score: { spire: 3, adagio: 0 } },
    ],
  },
  {
    id: "inventory",
    prompt: "How important is real-time inventory and order management?",
    options: [
      {
        id: "inv-critical",
        label: "Critical — we live in our inventory system",
        score: { spire: 3, adagio: 0 },
      },
      {
        id: "inv-important",
        label: "Important but not central",
        score: { spire: 1, adagio: 0 },
      },
      {
        id: "inv-none",
        label: "Not really relevant to our business",
        score: { spire: 0, adagio: 2 },
      },
    ],
  },
  {
    id: "controls",
    prompt: "How important are advanced financial controls and audit trails?",
    options: [
      {
        id: "ctrl-critical",
        label: "Critical — we are audited or have strict controls",
        score: { spire: 0, adagio: 3 },
      },
      { id: "ctrl-important", label: "Important", score: { spire: 0, adagio: 1 } },
      { id: "ctrl-standard", label: "Standard requirements only" },
    ],
  },
  {
    id: "users",
    prompt: "How many people will use the system day-to-day?",
    options: [
      { id: "users-1", label: "1 – 5", score: { spire: 0, adagio: 1 } },
      { id: "users-2", label: "6 – 20", score: { spire: 1, adagio: 1 } },
      { id: "users-3", label: "21 – 50", score: { spire: 2, adagio: 0 } },
      { id: "users-4", label: "50+", score: { spire: 3, adagio: 0 } },
    ],
  },
  {
    id: "current",
    prompt: "What's your current system?",
    options: [
      { id: "cur-qb", label: "QuickBooks" },
      { id: "cur-sage", label: "Sage 50 / Simply Accounting" },
      {
        id: "cur-bv",
        label: "BusinessVision",
        note: "Ending support Dec 2026",
      },
      { id: "cur-adagio", label: "Adagio", note: "Existing — likely upgrade" },
      { id: "cur-spire", label: "Spire", note: "Existing — likely optimization" },
      { id: "cur-excel", label: "Excel / Manual" },
      { id: "cur-other", label: "Other ERP" },
    ],
  },
  {
    id: "drivers",
    prompt: "What's pushing you to look at a change?",
    multi: true,
    options: [
      { id: "drv-outgrown", label: "Outgrown current system" },
      { id: "drv-reporting", label: "Reporting is too painful" },
      { id: "drv-inventory", label: "Inventory issues" },
      { id: "drv-controls", label: "Need better controls" },
      { id: "drv-eol", label: "Current vendor is going end-of-life" },
      {
        id: "drv-payments",
        label: "Payment processing — we want better systems for this",
      },
      { id: "drv-answers", label: "Team can't get answers from the data" },
    ],
  },
];

type Answers = Record<string, string | string[] | undefined>;
type Contact = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  notes: string;
};

const initialContact: Contact = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  notes: "",
};

const TOTAL_STEPS = QUESTIONS.length + 1; // questions + contact step

function computeScore(answers: Answers): Score {
  let spire = 0;
  let adagio = 0;
  for (const q of QUESTIONS) {
    const a = answers[q.id];
    if (!a) continue;
    const ids = Array.isArray(a) ? a : [a];
    for (const id of ids) {
      const opt = q.options.find((o) => o.id === id);
      if (opt?.score) {
        spire += opt.score.spire;
        adagio += opt.score.adagio;
      }
    }
  }
  return { spire, adagio };
}

function buildReasons(answers: Answers, winner: "Spire" | "Adagio" | "Both") {
  const reasons: string[] = [];
  const industryAns = answers["industry"] as string | undefined;
  const volumeAns = answers["volume"] as string | undefined;
  const invAns = answers["inventory"] as string | undefined;
  const ctrlAns = answers["controls"] as string | undefined;
  const usersAns = answers["users"] as string | undefined;
  const currentAns = answers["current"] as string | undefined;

  if (winner === "Spire") {
    if (industryAns === "distribution" || industryAns === "manufacturing") {
      reasons.push(
        "Your industry leans on inventory, orders, and operational flow — Spire's core strength."
      );
    }
    if (invAns === "inv-critical" || invAns === "inv-important") {
      reasons.push(
        "Real-time inventory and order management is central to your business, which is exactly where Spire shines."
      );
    }
    if (volumeAns === "vol-high" || volumeAns === "vol-xhigh") {
      reasons.push(
        "Your transaction volume needs the throughput and SQL-backed performance Spire provides."
      );
    }
    if (usersAns === "users-3" || usersAns === "users-4") {
      reasons.push(
        "A larger user base benefits from Spire's role-based security and concurrent-user architecture."
      );
    }
  } else if (winner === "Adagio") {
    if (industryAns === "nonprofit") {
      reasons.push(
        "Not-for-profits and fund-driven organizations consistently get more out of Adagio's accounting depth."
      );
    }
    if (ctrlAns === "ctrl-critical" || ctrlAns === "ctrl-important") {
      reasons.push(
        "Adagio's batch-based posting and audit trail are built for organizations that take controls seriously."
      );
    }
    if (volumeAns === "vol-low" || volumeAns === "vol-mid") {
      reasons.push(
        "Your transaction profile fits Adagio's sweet spot — depth of accounting without ERP overhead."
      );
    }
    if (invAns === "inv-none") {
      reasons.push(
        "You don't live in inventory, so you don't need to pay for it — Adagio keeps the focus on the books."
      );
    }
  } else {
    reasons.push(
      "Your answers map well to both platforms — the right call depends on weighting trade-offs (operations vs. accounting depth)."
    );
    reasons.push(
      "We can walk through the specific differences against your top priorities in a short conversation."
    );
  }

  if (currentAns === "cur-bv") {
    reasons.push(
      "BusinessVision support ends December 2026 — moving sooner gives you room to plan, not react."
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      "Your answers give us a clear starting point for a deeper conversation about the right fit."
    );
  }

  return reasons.slice(0, 3);
}

function getOptionLabel(qId: string, optId: string): string {
  const q = QUESTIONS.find((x) => x.id === qId);
  return q?.options.find((o) => o.id === optId)?.label ?? optId;
}

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.min(100, Math.round((step / total) * 100));
  const labelStep = Math.min(step + 1, total);
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2 text-xs text-slate-500 font-medium">
        <span>
          {step < QUESTIONS.length
            ? `Question ${labelStep} of ${QUESTIONS.length}`
            : "Almost done"}
        </span>
        <span className="tabular-nums">{pct}%</span>
      </div>
      <div className="h-1 w-full rounded-full bg-ivory-300/60 overflow-hidden">
        <motion.div
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: EXPO }}
          className="h-full bg-accent-500 rounded-full"
        />
      </div>
    </div>
  );
}

function ChoiceCard({
  label,
  note,
  selected,
  onClick,
  multi,
}: {
  label: string;
  note?: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full text-left rounded-xl border px-5 py-4 transition-all duration-300 ease-[var(--ease-out-expo)] flex items-start gap-3
        ${
          selected
            ? "border-accent-500 bg-accent-500/[0.06] shadow-card-hover"
            : "border-navy-900/10 bg-white hover:border-navy-900/25 hover:shadow-card-hover hover:-translate-y-0.5"
        }`}
    >
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-${
          multi ? "md" : "full"
        } border transition-colors ${
          selected
            ? "border-accent-500 bg-accent-500 text-white"
            : "border-navy-900/25 bg-white"
        }`}
      >
        {selected && <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />}
      </span>
      <span className="flex-1">
        <span className="block text-navy-900 font-medium leading-snug">
          {label}
        </span>
        {note && (
          <span className="mt-0.5 block text-xs text-slate-500">{note}</span>
        )}
      </span>
    </button>
  );
}

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<Contact>(initialContact);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = QUESTIONS.length;

  const score = useMemo(() => computeScore(answers), [answers]);
  const winner: "Spire" | "Adagio" | "Both" = useMemo(() => {
    if (score.spire === score.adagio) return "Both";
    return score.spire > score.adagio ? "Spire" : "Adagio";
  }, [score]);

  const reasons = useMemo(
    () => buildReasons(answers, winner),
    [answers, winner]
  );

  function selectOption(qId: string, optId: string, multi?: boolean) {
    setAnswers((prev) => {
      if (multi) {
        const current = (prev[qId] as string[] | undefined) ?? [];
        const next = current.includes(optId)
          ? current.filter((x) => x !== optId)
          : [...current, optId];
        return { ...prev, [qId]: next };
      }
      return { ...prev, [qId]: optId };
    });
  }

  function canAdvance(): boolean {
    if (step < totalQuestions) {
      const q = QUESTIONS[step];
      const a = answers[q.id];
      if (q.multi) return Array.isArray(a) && a.length > 0;
      return Boolean(a);
    }
    // contact step
    return (
      contact.name.trim().length > 0 &&
      contact.email.trim().length > 0 &&
      contact.organization.trim().length > 0
    );
  }

  function goNext() {
    if (!canAdvance()) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submitAssessment() {
    if (!canAdvance() || submitting) return;
    setSubmitting(true);
    setSubmitError(null);

    const recommended =
      winner === "Both" ? "Both Spire & Adagio" : winner;

    const formattedAnswers: Record<string, string> = {};
    for (const q of QUESTIONS) {
      const a = answers[q.id];
      if (!a) {
        formattedAnswers[q.prompt] = "(no answer)";
        continue;
      }
      if (Array.isArray(a)) {
        formattedAnswers[q.prompt] = a
          .map((id) => getOptionLabel(q.id, id))
          .join("; ");
      } else {
        formattedAnswers[q.prompt] = getOptionLabel(q.id, a);
      }
    }

    const payload = {
      _subject: `New Fit Assessment — ${recommended}`,
      _template: "table",
      _captcha: "false",
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      organization: contact.organization,
      notes: contact.notes,
      recommendedPlatform: recommended,
      spireScore: score.spire,
      adagioScore: score.adagio,
      ...formattedAnswers,
    };

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/samuel@skassociates.ca",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error(`Submit failed (${res.status})`);
      setShowResults(true);
    } catch (err) {
      console.error(err);
      setSubmitError(
        "We couldn't submit your assessment. Please try again or email samuel@skassociates.ca directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const slideVariants = {
    enter: (dir: 1 | -1) => ({
      opacity: 0,
      x: dir === 1 ? 40 : -40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: 1 | -1) => ({
      opacity: 0,
      x: dir === 1 ? -40 : 40,
    }),
  };

  // Results view
  if (showResults) {
    return (
      <SectionWrapper background="ivory" padding="large">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EXPO }}
            className="text-center"
          >
            <div className="eyebrow text-accent-600 mb-4">Your Result</div>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] tracking-tight text-navy-900 text-balance">
              Based on your answers,{" "}
              {winner === "Both" ? (
                <span className="text-accent-600 italic">
                  both are strong candidates
                </span>
              ) : (
                <>
                  <span className="text-accent-600 italic">{winner}</span> looks
                  like the strongest fit
                </>
              )}
              .
            </h1>

            <div className="mt-6 inline-flex items-center gap-6 rounded-xl bg-white border border-navy-900/5 px-6 py-3 shadow-card">
              <div className="text-left">
                <div className="text-[0.65rem] uppercase tracking-wider text-slate-500 font-medium">
                  Spire
                </div>
                <div className="text-2xl font-semibold text-navy-900 tabular-nums">
                  {score.spire}
                </div>
              </div>
              <div className="w-px h-10 bg-navy-900/10" />
              <div className="text-left">
                <div className="text-[0.65rem] uppercase tracking-wider text-slate-500 font-medium">
                  Adagio
                </div>
                <div className="text-2xl font-semibold text-navy-900 tabular-nums">
                  {score.adagio}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
            className="mt-12 space-y-4"
          >
            {reasons.map((r, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: EXPO },
                  },
                }}
                className="flex items-start gap-4 rounded-xl bg-white border border-navy-900/5 p-5 shadow-card"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <p className="text-navy-800 leading-relaxed">{r}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EXPO }}
            className="mt-12 rounded-2xl bg-navy-900 text-ivory-50 p-8 sm:p-10 text-center"
          >
            <h2 className="font-display text-2xl sm:text-3xl leading-tight">
              But the right answer depends on more than a quiz.
            </h2>
            <p className="mt-3 text-slate-300 leading-relaxed max-w-xl mx-auto">
              Let's talk through your specific situation — your data, your team,
              and what's actually slowing you down today.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/contact" variant="accent" size="lg" arrow>
                Book a Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper background="ivory" padding="large">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="eyebrow text-accent-600 mb-3">
            Spire vs Adagio Fit Assessment
          </div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight tracking-tight text-navy-900 text-balance">
            Seven questions. A real recommendation.
          </h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Built from decades of accounting software implementation experience
            — not a generic quiz.
          </p>
        </div>

        <ProgressBar step={step} total={TOTAL_STEPS} />

        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EXPO }}
            >
              {step < totalQuestions ? (
                <QuestionStep
                  question={QUESTIONS[step]}
                  answers={answers}
                  onSelect={selectOption}
                />
              ) : (
                <ContactStep
                  contact={contact}
                  onChange={setContact}
                  submitError={submitError}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav */}
        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          {step < totalQuestions ? (
            <Button
              onClick={goNext}
              variant="primary"
              size="md"
              disabled={!canAdvance()}
              className="disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={submitAssessment}
              variant="accent"
              size="md"
              disabled={!canAdvance() || submitting}
              className="disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitting ? "Submitting…" : "See My Results"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

function QuestionStep({
  question,
  answers,
  onSelect,
}: {
  question: Question;
  answers: Answers;
  onSelect: (qId: string, optId: string, multi?: boolean) => void;
}) {
  const current = answers[question.id];

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl leading-tight text-navy-900 text-balance">
        {question.prompt}
      </h2>
      {question.multi && (
        <p className="mt-2 text-sm text-slate-500">
          Select all that apply.
        </p>
      )}

      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {question.options.map((opt) => {
          const selected = question.multi
            ? Array.isArray(current) && current.includes(opt.id)
            : current === opt.id;
          return (
            <ChoiceCard
              key={opt.id}
              label={opt.label}
              note={opt.note}
              selected={selected}
              multi={question.multi}
              onClick={() => onSelect(question.id, opt.id, question.multi)}
            />
          );
        })}
      </div>
    </div>
  );
}

function ContactStep({
  contact,
  onChange,
  submitError,
}: {
  contact: Contact;
  onChange: (c: Contact) => void;
  submitError: string | null;
}) {
  function set<K extends keyof Contact>(key: K, value: Contact[K]) {
    onChange({ ...contact, [key]: value });
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl leading-tight text-navy-900">
        Where should we send your results?
      </h2>
      <p className="mt-2 text-slate-600">
        We'll email you your assessment and follow up only if you'd like to
        chat.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <Field
          label="Name"
          required
          value={contact.name}
          onChange={(v) => set("name", v)}
        />
        <Field
          label="Business email"
          type="email"
          required
          value={contact.email}
          onChange={(v) => set("email", v)}
        />
        <Field
          label="Phone"
          type="tel"
          value={contact.phone}
          onChange={(v) => set("phone", v)}
        />
        <Field
          label="Organization"
          required
          value={contact.organization}
          onChange={(v) => set("organization", v)}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-navy-900 mb-1.5">
          Anything specific you want to discuss?
          <span className="text-slate-400 font-normal"> (optional)</span>
        </label>
        <textarea
          rows={4}
          value={contact.notes}
          onChange={(e) => set("notes", e.target.value)}
          className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all resize-none"
          placeholder="Current pain points, timing, anything else worth knowing…"
        />
      </div>

      {submitError && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm px-4 py-3">
          {submitError}
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy-900 mb-1.5">
        {label}
        {required && <span className="text-accent-600"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-2.5 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
      />
    </div>
  );
}
