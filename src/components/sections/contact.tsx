"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});
type Values = z.infer<typeof schema>;

const field =
  "w-full rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/15";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = (v: Values) => {
    const subject = encodeURIComponent(`NSoC enquiry from ${v.name}`);
    const body = encodeURIComponent(`${v.message}\n\n${v.name} (${v.email})`);
    window.open(`mailto:${site.email}?subject=${subject}&body=${body}`, "_self");
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.75 },
      colors: ["#ffffff", "#bae6fd", "#38bdf8", "#fb923c"],
      shapes: ["circle"],
      scalar: 0.9,
      disableForReducedMotion: true,
    });
    toast.success("Opening your email app…");
    reset();
  };

  return (
    <section id="contact" className="section">
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Questions about NSoC?
          </h2>
          <p className="mt-5 text-muted">
            Write to{" "}
            <a className="font-medium text-primary underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            or use the form.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass space-y-4 rounded-3xl p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
              <input id="name" autoComplete="name" className={field} aria-invalid={!!errors.name} {...register("name")} />
              {errors.name && <p role="alert" className="mt-1.5 text-xs text-accent">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input id="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} {...register("email")} />
              {errors.email && <p role="alert" className="mt-1.5 text-xs text-accent">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="message" rows={5} className={field} aria-invalid={!!errors.message} {...register("message")} />
              {errors.message && <p role="alert" className="mt-1.5 text-xs text-accent">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="h-12 w-full sm:w-auto sm:px-8">
              <Send /> Send message
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
