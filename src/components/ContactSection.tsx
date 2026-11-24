import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { business, directionsUrl, waLink } from "../data/villa";

type FormState = {
  name: string;
  phone: string;
  topic: string;
  guests: string;
  date: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const BASE_TOPICS = [
  "Family stay",
  "Friends' get-together",
  "Birthday celebration",
  "Anniversary",
  "Corporate outing / office picnic",
  "Private party",
  "Other",
];

export default function ContactSection({
  defaultTopic = "",
  className = "",
}: {
  defaultTopic?: string;
  className?: string;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    topic: defaultTopic,
    guests: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "opened">("idle");
  const [lastLink, setLastLink] = useState("");

  useEffect(() => {
    if (defaultTopic) {
      setForm((previous) => ({ ...previous, topic: defaultTopic }));
    }
  }, [defaultTopic]);

  const topics = useMemo(() => {
    if (defaultTopic && !BASE_TOPICS.includes(defaultTopic)) {
      return [defaultTopic, ...BASE_TOPICS];
    }
    return BASE_TOPICS;
  }, [defaultTopic]);

  const today = new Date().toISOString().slice(0, 10);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    if (status === "opened") setStatus("idle");
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};

    if (form.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }

    const digits = form.phone.replace(/\D/g, "");
    const validPhone =
      digits.length === 10 || (digits.length === 12 && digits.startsWith("91"));
    if (!validPhone) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!form.topic) {
      next.topic = "Please choose an enquiry type.";
    }

    const guests = Number(form.guests);
    if (!form.guests || !Number.isInteger(guests) || guests < 1 || guests > 60) {
      next.guests = "Enter a group size between 1 and 60.";
    }

    if (form.date && form.date < today) {
      next.date = "Please choose today or a future date.";
    }

    if (form.message.length > 800) {
      next.message = "Please keep your message under 800 characters.";
    }

    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    const errorKeys = Object.keys(nextErrors) as Array<keyof FormState>;
    if (errorKeys.length > 0) {
      document.getElementById(`field-${errorKeys[0]}`)?.focus();
      return;
    }

    const lines = [
      "Hello, I would like to enquire about Bajirao Villa, Karjat.",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Enquiry type: ${form.topic}`,
      `Guests: ${form.guests}`,
      form.date ? `Preferred date: ${form.date}` : "",
      form.message.trim() ? `Message: ${form.message.trim()}` : "",
    ].filter(Boolean);

    const link = waLink(lines.join("\n"));
    setLastLink(link);
    setStatus("opened");
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 ${className}`}>
      <div className="flex flex-col justify-between rounded-3xl bg-forest p-8 text-cream sm:p-10">
        <div>
          <p className="eyebrow-light">Booking enquiries</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl">
            Tell us about your stay
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Share your dates and group size and we will help you plan. WhatsApp is the
            fastest way to reach the team.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={business.phoneHref}
              className="flex items-start gap-3 text-sm text-cream/85 transition hover:text-cream"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {business.phoneDisplay}
                <span className="block text-xs text-cream/45">Call us</span>
              </span>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-cream/85 transition hover:text-cream"
            >
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                WhatsApp enquiry
                <span className="block text-xs text-cream/45">
                  {business.whatsappDisplay}
                </span>
              </span>
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-cream/85 transition hover:text-cream"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {business.location}
                <span className="block text-xs text-cream/45">Near {business.nearby}</span>
              </span>
            </a>
          </div>
        </div>

        <p className="mt-10 rounded-2xl bg-cream/[0.06] p-4 text-xs leading-relaxed text-cream/55">
          Enquiries are not confirmed bookings. The team will confirm availability, pricing
          and inclusions with you directly.
        </p>
      </div>

      <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
        {status === "opened" ? (
          <div className="flex h-full flex-col justify-center py-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855]/10 text-[#1FA855]">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-3xl text-forest">
              Your enquiry is ready in WhatsApp
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              WhatsApp should have opened in a new tab with your details filled in. Nothing
              is stored on this website — press send in WhatsApp to reach the team.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a
                href={lastLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-[13px]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Open WhatsApp again
              </a>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn btn-outline text-[13px]"
              >
                Edit details
              </button>
            </div>
            <p className="mt-5 text-xs text-ink/45">
              If WhatsApp did not open, check your browser's pop-up settings and try again.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="field-name" className="mb-1.5 block text-xs font-semibold text-forest">
                  Your name <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="field-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`field ${errors.name ? "field-error" : ""}`}
                  placeholder="Full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  required
                />
                {errors.name ? (
                  <p id="error-name" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="field-phone" className="mb-1.5 block text-xs font-semibold text-forest">
                  Phone / WhatsApp <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="field-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={`field ${errors.phone ? "field-error" : ""}`}
                  placeholder="10-digit mobile number"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "error-phone" : undefined}
                  required
                />
                {errors.phone ? (
                  <p id="error-phone" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="field-topic" className="mb-1.5 block text-xs font-semibold text-forest">
                  Enquiry type <span className="text-gold-dark">*</span>
                </label>
                <select
                  id="field-topic"
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  className={`field ${errors.topic ? "field-error" : ""}`}
                  aria-invalid={Boolean(errors.topic)}
                  aria-describedby={errors.topic ? "error-topic" : undefined}
                  required
                >
                  <option value="">Select an option</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                {errors.topic ? (
                  <p id="error-topic" className="mt-1 text-xs text-red-600">
                    {errors.topic}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="field-guests" className="mb-1.5 block text-xs font-semibold text-forest">
                  Expected guests <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="field-guests"
                  name="guests"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={60}
                  value={form.guests}
                  onChange={handleChange}
                  className={`field ${errors.guests ? "field-error" : ""}`}
                  placeholder="e.g. 25"
                  aria-invalid={Boolean(errors.guests)}
                  aria-describedby={errors.guests ? "error-guests" : undefined}
                  required
                />
                {errors.guests ? (
                  <p id="error-guests" className="mt-1 text-xs text-red-600">
                    {errors.guests}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="field-date" className="mb-1.5 block text-xs font-semibold text-forest">
                  Preferred date
                </label>
                <input
                  id="field-date"
                  name="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={handleChange}
                  className={`field ${errors.date ? "field-error" : ""}`}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? "error-date" : undefined}
                />
                {errors.date ? (
                  <p id="error-date" className="mt-1 text-xs text-red-600">
                    {errors.date}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="field-message" className="mb-1.5 block text-xs font-semibold text-forest">
                  Message
                </label>
                <textarea
                  id="field-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`field resize-none ${errors.message ? "field-error" : ""}`}
                  placeholder="Tell us about your plans, any special requirements, or questions."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "error-message" : undefined}
                />
                {errors.message ? (
                  <p id="error-message" className="mt-1 text-xs text-red-600">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-6 w-full">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send enquiry on WhatsApp
            </button>

            <p className="mt-3 text-center text-xs leading-relaxed text-ink/45">
              This form opens WhatsApp with your details. Nothing is stored on this website.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 border-t border-forest/10 pt-5 text-xs text-ink/50">
              Prefer to call?
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-1 font-semibold text-forest hover:text-gold-dark"
              >
                {business.phoneDisplay}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
