import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { business, navItems, waLink } from "../data/villa";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-gradient-to-b from-forest-900/70 via-forest-900/25 to-transparent"
          : "bg-cream/95 shadow-[0_1px_0_rgba(21,43,35,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className={`flex flex-col leading-none transition-colors ${
            transparent ? "text-cream" : "text-forest"
          }`}
          aria-label="Bajirao Villa — home"
        >
          <span className="font-display text-[22px] tracking-[0.08em] sm:text-2xl">
            BAJIRAO VILLA
          </span>
          <span
            className={`mt-1 text-[9px] font-medium uppercase tracking-[0.3em] ${
              transparent ? "text-cream/70" : "text-forest/60"
            }`}
          >
            A-S Farm &amp; Resort
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative py-2 text-[12.5px] font-medium tracking-wide transition-colors ${
                  transparent
                    ? isActive
                      ? "text-gold-light"
                      : "text-cream/85 hover:text-cream"
                    : isActive
                      ? "text-gold-dark"
                      : "text-forest/75 hover:text-forest"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="btn btn-gold hidden !px-5 !py-2.5 text-[13px] sm:inline-flex"
          >
            Book / Enquire
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
              transparent
                ? "border-cream/30 text-cream hover:bg-cream/10"
                : "border-forest/15 text-forest hover:bg-forest/5"
            }`}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-forest/10 bg-cream px-5 pb-8 pt-3 shadow-xl lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `border-b border-forest/10 py-3.5 font-display text-2xl transition-colors ${
                    isActive ? "text-gold-dark" : "text-forest"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link to="/contact" className="btn btn-primary w-full">
              Book / Enquire
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={business.phoneHref}
              className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-forest/70"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
