import { Instagram, Mail, Facebook, Twitter, BookOpen, Feather } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "hsl(220 55% 10%)" }}
    >
      {/* Top golden rule */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(to right, transparent, hsl(42 70% 50%), transparent)" }} />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden pb-4" aria-hidden="true">
        <span
          className="font-playfair font-bold opacity-[0.025]"
          style={{ fontSize: "clamp(4rem, 15vw, 10rem)", color: "hsl(38 50% 80%)", lineHeight: 1 }}
        >
          Lingua Franca
        </span>
      </div>

      <div className="container px-6 pt-14 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Block */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo1.jpg"
                alt="Lingua Franca"
                className="h-12 w-12 rounded-full"
                style={{ boxShadow: "0 0 0 2px hsl(42 70% 50% / 0.5)" }}
              />
              <div>
                <h3 className="font-playfair text-2xl font-bold" style={{ color: "hsl(42 65% 60%)" }}>
                  Lingua Franca
                </h3>
                <p className="font-poppins text-xs uppercase tracking-widest" style={{ color: "hsl(38 20% 55%)", letterSpacing: "0.18em" }}>
                  Literary Society · JSSATEN
                </p>
              </div>
            </div>

            <p className="font-poppins text-sm leading-relaxed" style={{ color: "hsl(38 15% 60%)" }}>
              Official Literary Society of JSS Academy of Technical Education, Noida — fostering creativity, expression, and the boundless world of literature since our founding.
            </p>

            {/* Decorative quote */}
            <div
              className="pl-4 py-2"
              style={{ borderLeft: "2px solid hsl(42 60% 50% / 0.4)" }}
            >
              <p className="font-playfair italic text-sm" style={{ color: "hsl(38 25% 65%)" }}>
                "The pen is the tongue of the mind."
              </p>
              <p className="font-poppins text-xs mt-1" style={{ color: "hsl(42 50% 50%)" }}>
                — Miguel de Cervantes
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:linguafranca@jssaten.ac.in" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "hsl(220 40% 18%)",
                    border: "1px solid hsl(42 40% 35% / 0.3)",
                    color: "hsl(38 30% 65%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(42 65% 44%)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(220 50% 12%)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(42 55% 40%)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "hsl(220 40% 18%)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(38 30% 65%)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(42 40% 35% / 0.3)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="font-playfair font-bold text-base tracking-wide flex items-center gap-2"
              style={{ color: "hsl(42 60% 58%)" }}
            >
              <BookOpen size={14} />
              Quick Links
            </h4>
            <div className="h-px w-full" style={{ background: "hsl(42 40% 40% / 0.2)" }} />
            <ul className="space-y-2.5">
              {["About Us", "Events", "Departments", "Poetry", "Core Team", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    className="font-poppins text-sm flex items-center gap-2 transition-colors duration-200 group"
                    style={{ color: "hsl(38 18% 58%)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(42 65% 58%)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(38 18% 58%)"; }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                      style={{ background: "hsl(42 50% 45% / 0.5)" }}
                    />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4
              className="font-playfair font-bold text-base tracking-wide flex items-center gap-2"
              style={{ color: "hsl(42 60% 58%)" }}
            >
              <Feather size={14} />
              Get In Touch
            </h4>
            <div className="h-px w-full" style={{ background: "hsl(42 40% 40% / 0.2)" }} />
            <div className="space-y-4">
              {[
                { label: "Instagram", value: "@linguafranca_jssaten" },
                { label: "Email", value: "linguafranca@jssaten.ac.in" },
                { label: "College", value: "JSSATEN, Noida — Sec 62" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-poppins text-xs uppercase tracking-wider mb-0.5" style={{ color: "hsl(42 45% 48%)" }}>
                    {label}
                  </p>
                  <p className="font-poppins text-sm" style={{ color: "hsl(38 18% 65%)" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid hsl(220 30% 20%)" }}
        >
          <p className="font-poppins text-xs" style={{ color: "hsl(38 12% 45%)" }}>
            © 2025 Lingua Franca — JSSATEN Noida. All rights reserved.
          </p>
          <p className="font-playfair italic text-xs" style={{ color: "hsl(42 40% 42%)" }}>
            "Crafted with ink & imagination"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
