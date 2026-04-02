"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown, ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

// --- Announcement Banner ---
export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("atriya-banner-dismissed");
    if (!dismissed) setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("atriya-banner-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#0F172A] text-slate-100 py-1.5 px-4 sticky top-0 z-[100] flex items-center justify-center font-sans">
      <p className="text-[11px] font-mono uppercase tracking-[0.05em] text-center pr-8 opacity-90">
        AcademicOS is live — India&apos;s first constitutionally governed exam prep substrate.{" "}
        <Link href="/products/education" className="underline hover:text-white transition-colors">
          View Launch →
        </Link>
      </p>
      <button 
        onClick={handleDismiss} 
        className="absolute right-4 hover:opacity-50 transition-opacity p-1"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}

// --- Navigation Item with Dropdown ---
function NavItem({ label, links, hasBadge }: { label: string, links?: any[], hasBadge?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  if (!links) {
    return (
      <Link href={`/${label.toLowerCase()}`} className="text-[11px] font-mono uppercase tracking-widest text-text-secondary hover:text-gold transition-colors py-4">
        {label}
      </Link>
    );
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button 
        className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-text-secondary hover:text-gold transition-all duration-300 group py-2"
      >
        {label}
        <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform duration-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[60]"
          >
            <div className="bg-bg-secondary border border-border rounded-xl shadow-2xl p-6 min-w-[240px] backdrop-blur-xl">
               <div className="grid gap-2">
                  {links.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.href} 
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-bg-tertiary transition-colors"
                    >
                       <div className="flex flex-col">
                          <span className="text-sm font-sans font-medium text-text-primary group-hover:text-gold flex items-center gap-2">
                             {link.label}
                             {link.live && <span className="w-2 h-2 bg-green rounded-full animate-pulse" />}
                          </span>
                          {link.sub && <span className="text-[10px] text-text-tertiary font-mono uppercase tracking-widest mt-1">{link.sub}</span>}
                       </div>
                       <ArrowRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main Navbar ---
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 flex justify-between items-center px-6 lg:px-12 h-20 border-b border-border bg-bg-primary/80 backdrop-blur-md sticky top-0">
      {/* Logo */}
      <Link href="/">
        <Logo variant="full" size="md" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10 items-center">
          <NavItem label="Platform" links={[ 
            { label: "Platform Overview", href: "/platform", sub: "THE MISSION" },
            { label: "Case Studies", href: "/case-studies", sub: "THE EVIDENCE", live: true },
            { label: "Insights Hub", href: "/insights", sub: "THE REGISTRY OF TRUTH", live: true },
            { label: "System Status", href: "/status", sub: "OPERATIONAL HEALTH", live: true },
            { label: "Architecture", href: "/platform/architecture", sub: "SYSTEM REACH" }
          ]} />
          
          <NavItem label="Products" links={[ 
             { label: "AcademicOS", href: "/products/education", sub: "LIVE", live: true },
             { label: "Pricing & Tiers", href: "/pricing", sub: "T-01 TO T-03", live: true },
             { label: "Wellness OS", href: "/products/wellness-os", sub: "COGNITIVE HEALTH" },
             { label: "Vertical AI Studio", href: "/products/vertical-studio", sub: "ENTERPRISE BUILD" },
             { label: "Executive Audit Hub", href: "/products/audit-hub", sub: "VISIBILITY" }
          ]} />

          <NavItem label="Developers" links={[ 
             { label: "Developer Hub", href: "/developers", sub: "HOME" },
             { label: "Documentation", href: "/developers/docs", sub: "TECHNICAL DEEP-DIVE", live: true },
             { label: "API Reference", href: "/developers/api", sub: "CORE ENDPOINTS" },
             { label: "Status Page", href: "/status", sub: "SYSTEM UPTIME" }
          ]} />

          <NavItem label="Solutions" links={[ 
             { label: "Institutions", href: "/solutions/institutions", sub: "TEACHER AUTOPILOT" },
             { label: "Healthcare", href: "/solutions/healthcare", sub: "CLINICAL CERTAINTY" },
             { label: "Finance", href: "/solutions/finance", sub: "TRANSACTIONAL PROOF" },
             { label: "Government", href: "/solutions/government", sub: "SOVEREIGN CONTROL" }
          ]} />

          <NavItem label="Compliance" links={[ 
             { label: "Case Studies", href: "/case-studies", sub: "OUTCOMES" },
             { label: "Compliance Hub", href: "/compliance", sub: "GOVERNANCE" },
             { label: "Trust Center", href: "/trust", sub: "SAFETY & SECURITY" },
             { label: "Pricing & Tiers", href: "/pricing", sub: "ENGAGEMENT" }
          ]} />

         <NavItem label="About" links={[ 
            { label: "Company", href: "/about" },
            { label: "Careers", href: "/about/careers", sub: "JOIN THE SUBSTRATE", live: true },
            { label: "Team", href: "/about/team" },
            { label: "Press Hub", href: "/about/press" }
         ]} />
      </div>

      <div className="flex items-center gap-4">
        <Button size="sm" className="hidden md:flex">
          <Link href="/contact" className="flex items-center gap-2">Get Started <ArrowRight size={14} /></Link>
        </Button>
        
        {/* Mobile Toggle */}
        <button 
           onClick={() => setIsMobileMenuOpen(true)}
           className="lg:hidden p-2 text-text-secondary hover:text-gold transition-colors"
           aria-label="Open Menu"
        >
           <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-bg-primary/95 backdrop-blur-xl flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-display uppercase tracking-widest text-gold"><Logo size="md" /></span>
              <button 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="p-2 text-text-secondary hover:text-gold transition-colors"
                 aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-12 flex-1">
               <div className="space-y-6">
                 <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest font-bold">Main Sections</p>
                 <Link href="/platform" className="block text-4xl font-display hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Platform</Link>
                 <Link href="/products" className="block text-4xl font-display hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                 <Link href="/developers" className="block text-4xl font-display hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Developers</Link>
                 <Link href="/solutions" className="block text-4xl font-display hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
                 <Link href="/compliance" className="block text-4xl font-display hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Compliance</Link>
                 <Link href="/about" className="block text-4xl font-display hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
               </div>
               
               <div className="space-y-6">
                 <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest font-bold">Featured</p>
                 <Link href="/products/education" className="flex items-center gap-3 text-xl font-sans group underline decoration-gold/30 hover:decoration-gold transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                    AcademicOS <Badge variant="live">LIVE</Badge>
                 </Link>
                 <Link href="/products/ai-artifact-studio" className="block text-xl font-sans hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>AI Artifact Studio</Link>
               </div>
            </div>

            <div className="pt-12">
               <Button size="lg" className="w-full h-16 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
               <Link href="/contact" className="w-full h-full flex items-center justify-center gap-2">Get Started <ArrowRight size={18} /></Link>
               </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- Footer ---
export function Footer() {
  return (
    <footer className="border-t border-border pt-24 pb-12 px-6 lg:px-12 bg-bg-secondary/30 relative z-10">
       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-1 space-y-6">
             <Link href="/">
               <Logo size="md" className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
             </Link>
             <p className="text-sm text-text-secondary font-sans leading-relaxed">The governance layer beneath AI.</p>
             <div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
                {/* Social placeholders */}
                <div className="w-5 h-5 rounded-sm border border-border" />
                <div className="w-5 h-5 rounded-sm border border-border" />
                <div className="w-5 h-5 rounded-sm border border-border" />
             </div>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-tertiary px-1 border-l-2 border-gold/30">Platform</h4>
              <ul className="space-y-4 text-sm text-text-secondary font-sans transition-all">
                 <li><Link href="/case-studies" className="hover:text-gold transition-colors">Case Studies</Link></li>
                 <li><Link href="/insights" className="hover:text-gold transition-colors">Insights Hub</Link></li>
                 <li><Link href="/status" className="hover:text-gold transition-colors">System Status</Link></li>
                 <li><Link href="/platform/architecture" className="hover:text-gold transition-colors">Architecture</Link></li>
                 <li><Link href="/pricing" className="hover:text-gold transition-colors">Pricing & Tiers</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-tertiary px-1 border-l-2 border-gold/30">Products</h4>
              <ul className="space-y-4 text-sm text-text-secondary font-sans transition-all">
                  <li><Link href="/products/education" className="flex items-center gap-2 hover:text-gold transition-colors">AcademicOS <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse" /></Link></li>
                  <li><Link href="/developers" className="hover:text-gold transition-colors">Developer Hub</Link></li>
                  <li><Link href="/developers/docs" className="hover:text-gold transition-colors">Documentation</Link></li>
                  <li><Link href="/products/audit-hub" className="hover:text-gold transition-colors">Audit Hub</Link></li>
              </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-tertiary px-1 border-l-2 border-gold/30">Solutions</h4>
             <ul className="space-y-4 text-sm text-text-secondary font-sans transition-all">
                <li><Link href="/solutions/institutions" className="hover:text-gold transition-colors">Institutions</Link></li>
                <li><Link href="/solutions/healthcare" className="hover:text-gold transition-colors">Healthcare</Link></li>
                <li><Link href="/solutions/finance" className="hover:text-gold transition-colors">Finance</Link></li>
                <li><Link href="/solutions/legal" className="hover:text-gold transition-colors">Legal</Link></li>
                <li><Link href="/solutions/government" className="hover:text-gold transition-colors">Government</Link></li>
                <li><Link href="/developers" className="hover:text-gold transition-colors">For Developers</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-tertiary px-1 border-l-2 border-gold/30">Company</h4>
             <ul className="space-y-4 text-sm text-text-secondary font-sans">
                <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
                <li><Link href="/about/team" className="hover:text-gold transition-colors">Team</Link></li>
                <li><Link href="/about/careers" className="hover:text-gold transition-colors">Careers</Link></li>
                <li><Link href="/about/press" className="hover:text-gold transition-colors">Press</Link></li>
                <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-tertiary px-1 border-l-2 border-gold/30">Legal</h4>
             <ul className="space-y-4 text-sm text-text-secondary font-sans">
                <li><Link href="/legal/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
                <li><Link href="/legal/security-policy" className="hover:text-gold transition-colors">Security Policy</Link></li>
             </ul>
          </div>
       </div>

       <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-widest text-text-tertiary">
          <p>© 2026 ATRIYA Systems Private Limited. All rights reserved.</p>
          <p className="flex items-center gap-2">\ud83c\uddee\ud83c\uddf3 Made in India</p>
          <p>Proprietary architectural innovation.</p>
       </div>
    </footer>
  );
}

// --- Cookie Consent ---
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("atriya-cookie-consent");
    if (!choice) setIsVisible(true);
  }, []);

  const handleChoice = (choice: string) => {
    setIsVisible(false);
    localStorage.setItem("atriya-cookie-consent", choice);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] bg-bg-secondary p-4 md:p-6 border-t border-gold/20 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
         <p className="text-sm text-text-secondary font-sans text-center md:text-left">
           We use cookies for analytics. No personal data sold or shared.
         </p>
         <div className="flex gap-4">
            <Button size="sm" variant="ghost" onClick={() => handleChoice("decline")}>Decline</Button>
            <Button size="sm" onClick={() => handleChoice("accept")}>Accept</Button>
         </div>
      </div>
    </div>
  );
}
