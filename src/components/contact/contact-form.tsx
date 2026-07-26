"use client";

import { useState } from "react";
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

export function ContactForm({
  className,
  idPrefix = "contact",
  submitLabel = "Send Message",
  animate = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex min-h-[420px] flex-col justify-center border border-mist-deep bg-white px-8 py-12",
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
          className="mt-8 w-fit rounded-sm"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const fields = (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-firstName`}>
            First name <span className="text-muted-foreground">(required)</span>
          </Label>
          <Input
            id={`${idPrefix}-firstName`}
            name="firstName"
            required
            autoComplete="given-name"
            className="h-11 rounded-sm bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-lastName`}>
            Last name <span className="text-muted-foreground">(required)</span>
          </Label>
          <Input
            id={`${idPrefix}-lastName`}
            name="lastName"
            required
            autoComplete="family-name"
            className="h-11 rounded-sm bg-background"
          />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${idPrefix}-email`}>
          Email <span className="text-muted-foreground">(required)</span>
        </Label>
        <Input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 rounded-sm bg-background"
        />
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${idPrefix}-phone`}>
          Phone <span className="text-muted-foreground">(required)</span>
        </Label>
        <Input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="h-11 rounded-sm bg-background"
        />
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${idPrefix}-message`}>
          Message <span className="text-muted-foreground">(required)</span>
        </Label>
        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={6}
          placeholder="Briefly describe your legal issue or question."
          className="rounded-sm bg-background"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-7 h-12 w-full rounded-sm bg-ink text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase hover:bg-ink-soft"
      >
        {submitLabel}
      </Button>
    </>
  );

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "border border-mist-deep bg-white/80 p-6 backdrop-blur-sm md:p-8",
        className
      )}
    >
      {animate && !reduce ? (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
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
