import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Feather, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const JoinForm = () => {
  return (
    <section
      id="join-form"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "hsl(220 50% 12%)" }}
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(to right, transparent, hsl(42 70% 50%), transparent)" }} />

      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden" aria-hidden="true">
        <span className="font-playfair font-bold opacity-[0.025]" style={{ fontSize: "clamp(3rem, 12vw, 9rem)", color: "hsl(38 50% 80%)" }}>
          Join Us
        </span>
      </div>

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-poppins text-xs uppercase tracking-[0.35em] mb-3"
            style={{ color: "hsl(42 55% 55%)" }}
          >
            Begin Your Chapter
          </p>
          <h2
            className="font-playfair text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "hsl(38 50% 90%)" }}
          >
            Ready to Join?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(42 60% 50%))" }} />
            <span style={{ color: "hsl(42 60% 55%)" }}>✦</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(42 60% 50%))" }} />
          </div>
          <p className="font-poppins text-lg max-w-xl mx-auto" style={{ color: "hsl(38 20% 65%)" }}>
            Take the first step towards an amazing literary journey with Lingua Franca
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Form (3 cols) ── */}
          <motion.div
            className="lg:col-span-3 rounded-lg overflow-hidden"
            style={{
              background: "hsl(220 42% 16%)",
              border: "1px solid hsl(42 40% 40% / 0.25)",
              boxShadow: "0 8px 40px hsl(220 60% 5% / 0.4)",
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Form header */}
            <div
              className="px-7 py-5 flex items-center gap-3"
              style={{ borderBottom: "1px solid hsl(42 30% 35% / 0.2)", background: "hsl(220 40% 14%)" }}
            >
              <Feather size={18} style={{ color: "hsl(42 65% 55%)" }} />
              <h3 className="font-playfair text-xl font-bold" style={{ color: "hsl(38 45% 88%)" }}>
                Join Lingua Franca
              </h3>
            </div>

            <div className="p-7 space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="font-poppins text-sm"
                    style={{
                      background: "hsl(220 38% 20%)",
                      border: "1px solid hsl(42 30% 32% / 0.4)",
                      color: "hsl(38 40% 85%)",
                    }}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="font-poppins text-sm"
                    style={{
                      background: "hsl(220 38% 20%)",
                      border: "1px solid hsl(42 30% 32% / 0.4)",
                      color: "hsl(38 40% 85%)",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="font-poppins text-sm"
                  style={{
                    background: "hsl(220 38% 20%)",
                    border: "1px solid hsl(42 30% 32% / 0.4)",
                    color: "hsl(38 40% 85%)",
                  }}
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="font-poppins text-sm"
                  style={{
                    background: "hsl(220 38% 20%)",
                    border: "1px solid hsl(42 30% 32% / 0.4)",
                    color: "hsl(38 40% 85%)",
                  }}
                />
              </div>

              {/* Year + Branch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="year" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                    Year
                  </Label>
                  <Select>
                    <SelectTrigger style={{ background: "hsl(220 38% 20%)", border: "1px solid hsl(42 30% 32% / 0.4)", color: "hsl(38 40% 80%)" }}>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st">1st Year</SelectItem>
                      <SelectItem value="2nd">2nd Year</SelectItem>
                      <SelectItem value="3rd">3rd Year</SelectItem>
                      <SelectItem value="4th">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="branch" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                    Branch
                  </Label>
                  <Select>
                    <SelectTrigger style={{ background: "hsl(220 38% 20%)", border: "1px solid hsl(42 30% 32% / 0.4)", color: "hsl(38 40% 80%)" }}>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">CSE</SelectItem>
                      <SelectItem value="ece">ECE</SelectItem>
                      <SelectItem value="me">ME</SelectItem>
                      <SelectItem value="ce">CE</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Department */}
              <div className="space-y-1.5">
                <Label htmlFor="department" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                  Preferred Department
                </Label>
                <Select>
                  <SelectTrigger style={{ background: "hsl(220 38% 20%)", border: "1px solid hsl(42 30% 32% / 0.4)", color: "hsl(38 40% 80%)" }}>
                    <SelectValue placeholder="Choose your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="editorial">Editorial</SelectItem>
                    <SelectItem value="designing">Designing</SelectItem>
                    <SelectItem value="management">Management</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Why */}
              <div className="space-y-1.5">
                <Label htmlFor="why" className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(38 20% 62%)" }}>
                  Why do you want to join? <span style={{ color: "hsl(38 15% 50%)" }}>(Optional)</span>
                </Label>
                <Textarea
                  id="why"
                  placeholder="Tell us about your love for literature, creative interests, or any dream projects..."
                  className="font-poppins text-sm resize-none"
                  rows={3}
                  style={{
                    background: "hsl(220 38% 20%)",
                    border: "1px solid hsl(42 30% 32% / 0.4)",
                    color: "hsl(38 40% 85%)",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                className="w-full flex items-center justify-center gap-2 py-3 font-playfair font-semibold text-base rounded transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "linear-gradient(135deg, hsl(42 70% 44%), hsl(38 65% 54%))",
                  color: "hsl(220 50% 10%)",
                  border: "1px solid hsl(42 55% 38%)",
                  boxShadow: "0 4px 20px hsl(42 70% 50% / 0.3), inset 0 1px 0 hsl(42 80% 72% / 0.3)",
                  letterSpacing: "0.04em",
                }}
              >
                Submit Application
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* ── Sidebar (2 cols) ── */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Get in Touch */}
            <div
              className="rounded-lg p-6 space-y-4"
              style={{
                background: "hsl(220 42% 16%)",
                border: "1px solid hsl(42 40% 40% / 0.2)",
              }}
            >
              <h3 className="font-playfair text-lg font-bold flex items-center gap-2" style={{ color: "hsl(42 65% 58%)" }}>
                <Mail size={16} />
                Get in Touch
              </h3>
              <div className="h-px" style={{ background: "hsl(42 35% 38% / 0.25)" }} />
              <div className="space-y-4">
                {[
                  { label: "WhatsApp Group", value: "Join our official group for updates", icon: MessageCircle },
                  { label: "Instagram", value: "@linguafranca_jssaten" },
                  { label: "Email", value: "linguafranca@jssaten.ac.in" },
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-0.5">
                    <p className="font-poppins text-xs uppercase tracking-wider" style={{ color: "hsl(42 45% 52%)" }}>{label}</p>
                    <p className="font-poppins text-sm" style={{ color: "hsl(38 20% 65%)" }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What happens next */}
            <div
              className="rounded-lg p-6 space-y-4"
              style={{
                background: "hsl(220 42% 16%)",
                border: "1px solid hsl(42 40% 40% / 0.2)",
              }}
            >
              <h3 className="font-playfair text-lg font-bold" style={{ color: "hsl(42 65% 58%)" }}>
                What Happens Next?
              </h3>
              <div className="h-px" style={{ background: "hsl(42 35% 38% / 0.25)" }} />
              <div className="space-y-3">
                {[
                  "We'll review your application carefully",
                  "You'll receive a call or message within 2–3 days",
                  "A brief, friendly interview to know you better",
                  "Welcome to the Lingua Franca family! 🎉",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center font-poppins text-xs font-semibold mt-0.5"
                      style={{ background: "hsl(42 65% 44%)", color: "hsl(220 50% 10%)" }}
                    >
                      {i + 1}
                    </span>
                    <p className="font-poppins text-sm leading-relaxed" style={{ color: "hsl(38 18% 63%)" }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspirational note */}
            <div
              className="rounded-lg px-5 py-4 relative overflow-hidden"
              style={{
                background: "hsl(220 42% 16%)",
                border: "1px solid hsl(42 40% 40% / 0.18)",
              }}
            >
              <div className="text-3xl absolute -top-1 -left-1 opacity-15 font-playfair" style={{ color: "hsl(42 65% 55%)" }}>❝</div>
              <p className="font-playfair italic text-sm relative z-10 pl-2" style={{ color: "hsl(38 30% 68%)" }}>
                Every great writer was once a student who dared to begin.
              </p>
              <p className="font-poppins text-xs mt-2 pl-2" style={{ color: "hsl(42 45% 50%)" }}>— Lingua Franca</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;