"use client";

import { useId, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type ContactFormProps = {
  className?: string;
  idPrefix?: string;
  submitLabel?: string;
  animate?: boolean;
};

type FieldErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "phone" | "message", string>
>;

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function ContactForm({
  className,
  idPrefix = "contact",
  submitLabel = "Send Message",
  animate = false,
}: ContactFormProps) {
  const reactId = useId();
  const formId = `${idPrefix}-${reactId}`;
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const reduce = useReducedMotion();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots often fill hidden fields
    if (String(data.get("company_website") ?? "").trim()) {
      setSubmitted(true);
      return;
    }

    const values = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const nextErrors: FieldErrors = {};
    if (!values.firstName) nextErrors.firstName = "First name is required.";
    if (!values.lastName) nextErrors.lastName = "Last name is required.";
    if (!values.email) nextErrors.email = "Email is required.";
    else if (!validateEmail(values.email))
      nextErrors.email = "Enter a valid email address.";
    if (!values.phone) nextErrors.phone = "Phone is required.";
    else if (!validatePhone(values.phone))
      nextErrors.phone = "Enter a valid phone number.";
    if (!values.message) nextErrors.message = "Please describe your matter.";
    else if (values.message.length < 10)
      nextErrors.message = "Please provide a bit more detail (at least 10 characters).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormError("Please correct the highlighted fields and try again.");
      return;
    }

    setPending(true);
    try {
      // Front-end demo submission — wire to API / form provider in production
      await new Promise((resolve) => setTimeout(resolve, 700));
      setSubmitted(true);
      form.reset();
    } catch {
      setFormError("Unable to send your message right now. Please call or email the office.");
    } finally {
      setPending(false);
    }
  }

  function fieldProps(name: keyof FieldErrors) {
    const errorId = `${formId}-${name}-error`;
    const hasError = Boolean(errors[name]);
    return {
      "aria-invalid": hasError || undefined,
      "aria-describedby": hasError ? errorId : undefined,
    } as const;
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "flex min-h-[420px] flex-col justify-center border border-mist-deep bg-white px-6 py-12 sm:px-8",
          className
        )}
      >
        <p className="font-serif text-3xl text-ink">Message received.</p>
        <p className="mt-4 max-w-sm text-muted-foreground">
          Thank you for contacting Spadafore Law. Our general response time is
          one business day.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 h-11 w-fit rounded-sm"
          onClick={() => {
            setSubmitted(false);
            setErrors({});
            setFormError(null);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const fields = (
    <>
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${formId}-company`}>Company website</label>
        <input
          id={`${formId}-company`}
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {formError && (
        <div
          role="alert"
          className="mb-5 border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {formError}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${formId}-firstName`}>
            First name <span className="text-muted-foreground">(required)</span>
          </Label>
          <Input
            id={`${formId}-firstName`}
            name="firstName"
            required
            autoComplete="given-name"
            className="h-11 rounded-sm bg-background"
            {...fieldProps("firstName")}
          />
          {errors.firstName && (
            <p id={`${formId}-firstName-error`} className="text-sm text-destructive">
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${formId}-lastName`}>
            Last name <span className="text-muted-foreground">(required)</span>
          </Label>
          <Input
            id={`${formId}-lastName`}
            name="lastName"
            required
            autoComplete="family-name"
            className="h-11 rounded-sm bg-background"
            {...fieldProps("lastName")}
          />
          {errors.lastName && (
            <p id={`${formId}-lastName-error`} className="text-sm text-destructive">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${formId}-email`}>
          Email <span className="text-muted-foreground">(required)</span>
        </Label>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          className="h-11 rounded-sm bg-background"
          {...fieldProps("email")}
        />
        {errors.email && (
          <p id={`${formId}-email-error`} className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${formId}-phone`}>
          Phone <span className="text-muted-foreground">(required)</span>
        </Label>
        <Input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          className="h-11 rounded-sm bg-background"
          {...fieldProps("phone")}
        />
        {errors.phone && (
          <p id={`${formId}-phone-error`} className="text-sm text-destructive">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${formId}-message`}>
          Message <span className="text-muted-foreground">(required)</span>
        </Label>
        <Textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={6}
          placeholder="Briefly describe your legal issue or question."
          className="min-h-32 rounded-sm bg-background"
          {...fieldProps("message")}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        Submitting this form does not create an attorney-client relationship.
        Please do not include confidential or privileged information.
      </p>

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="mt-6 h-12 w-full rounded-sm bg-ink text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase hover:bg-ink-soft disabled:opacity-70"
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </>
  );

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "relative border border-mist-deep bg-white/80 p-5 backdrop-blur-sm sm:p-6 md:p-8",
        className
      )}
    >
      {animate && !reduce ? (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
            }}
          >
            {fields}
          </motion.div>
        </motion.div>
      ) : (
        fields
      )}
    </form>
  );
}
