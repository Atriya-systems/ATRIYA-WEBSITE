"use client";

import * as React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  ArrowRight, BookOpen, FileText, 
  History, Newspaper, Zap, Scale,
  Layers, BrainCircuit
} from "lucide-react";
import Link from "next/link";

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const categories = ["All", "Architecture", "Compliance", "Product", "Regulation", "IP"];
  
  const posts = [
    { 
      id: 1, 
      category: "Architecture", 
      title: "Governance as Execution Physics: A Primer", 
      date: "March 15, 2026", 
      excerpt: "Moving beyond policy-based AI safety to structural governance embedded in the platform substrate.",
      readTime: "8 min read"
    },
    { 
      id: 2, 
      category: "Compliance", 
      title: "EU AI Act: Structural Compliance vs Documented Compliance", 
      date: "March 10, 2026", 
      excerpt: "How ATRIYA addresses high-risk AI system requirements at the architecture level.",
      readTime: "12 min read"
    },
    { 
      id: 3, 
      category: "IP", 
      title: "Protecting the Substrate: Our Intellectual Property Thesis", 
      date: "March 5, 2026", 
      excerpt: "Why architectural innovations are the only honest way to build a governed AI infrastructure.",
      readTime: "6 min read"
    },
    { 
      id: 4, 
      category: "Regulation", 
      title: "Indian DPDP 2023: The Erasure Right and Mathematical Proof", 
      date: "February 28, 2026", 
      excerpt: "Proving data deletion in AI systems with Erasure Certificates.",
      readTime: "10 min read"
    },
    { 
      id: 5, 
      category: "Product", 
      title: "AcademicOS: The Universal Cognitive Engine for Education", 
      date: "February 22, 2026", 
      excerpt: "How reasoning engines calibrated for physics derivation scale to any high-stakes professional domain.",
      readTime: "7 min read"
    },
    { 
      id: 6, 
      category: "Compliance", 
      title: "RBI Guidelines: Auditability in Financial AI", 
      date: "February 15, 2026", 
      excerpt: "Preparing for the RBI AI examination with deterministic replay chains.",
      readTime: "15 min read"
    }
  ];

  const filteredPosts = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32 min-h-screen">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] bg-[linear-gradient(to_right,#0A0E1A_1px,transparent_1px),linear-gradient(to_bottom,#0A0E1A_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section className="max-w-4xl pt-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <SectionLabel>BLOG</SectionLabel>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-display mt-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Thinking on <br />
          <span className="text-gold">constitutional AI.</span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl md:text-2xl text-text-secondary font-sans max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Governance architecture, regulation, and the substrate.
        </motion.p>
      </section>

      {/* FILTER TABS */}
      <section className="border-y border-border py-4">
        <div className="flex gap-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
           {categories.map((cat, idx) => (
             <button 
               key={idx} 
               onClick={() => setActiveCategory(cat)}
               className={`text-sm font-mono uppercase tracking-[0.2em] font-bold transition-all ${activeCategory === cat ? 'text-gold' : 'text-text-tertiary hover:text-text-primary'}`}
             >
                {cat}
             </button>
           ))}
        </div>
      </section>

      {/* FEATURED POST */}
      {activeCategory === "All" && (
        <section className="group">
           <Link href="/blog/governance-as-physics" className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="aspect-video bg-bg-secondary rounded-2xl border border-border group-hover:border-gold transition-all flex items-center justify-center p-24 overflow-hidden relative">
                 <History size={200} className="text-gold opacity-[0.05] group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute top-8 left-8">
                    <Badge variant="outline" className="bg-gold text-white font-mono text-[10px] uppercase border-none">FEATURED POST</Badge>
                 </div>
              </div>
              <div className="space-y-8">
                 <div className="flex gap-4 items-center">
                    <span className="text-sm font-mono text-gold uppercase tracking-widest font-bold">Architecture</span>
                    <span className="text-sm text-text-tertiary">•</span>
                    <span className="text-sm text-text-tertiary">10 min read</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-display group-hover:text-gold transition-colors">Why Governance must be Substrate, not Layer.</h2>
                 <p className="text-xl text-text-secondary font-sans leading-relaxed">
                   A deep dive into why removable AI safety wrappers fail and why structural enforcement is the only way to build enterprise-ready AI infrastructure.
                 </p>
                 <div className="flex">
                    <Button variant="ghost" className="px-0 h-auto text-xl font-display text-text-primary hover:text-gold flex items-center gap-4 transition-colors">
                       Read full article <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </div>
              </div>
           </Link>
        </section>
      )}

      {/* POST GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
         {filteredPosts.map((post, idx) => (
           <motion.div 
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: idx * 0.1 }}
             className="group"
           >
              <Link href={`/blog/${post.id}`} className="space-y-8 flex flex-col h-full"> 
                 <div className="aspect-square bg-bg-secondary border border-border rounded-xl group-hover:border-gold/30 transition-all flex items-center justify-center overflow-hidden relative">
                   <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold p-1 bg-white border border-border">{post.category}</span>
                   </div>
                   <LogoOutline className="text-gold opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" size={150} />
                 </div>
                 <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-bold font-sans group-hover:text-gold transition-colors leading-tight">{post.title}</h3>
                    <p className="text-base text-text-secondary font-sans leading-relaxed line-clamp-3 italic opacity-80">{post.excerpt}</p>
                 </div>
                 <div className="flex justify-between items-center pt-8 border-t border-border/50 text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                 </div>
              </Link>
           </motion.div>
         ))}
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="bg-bg-tertiary p-12 lg:p-24 rounded-[4rem] border border-border text-center space-y-16">
          <div className="space-y-6">
             <h2 className="text-4xl md:text-6xl font-display">Get notified when we publish.</h2>
             <p className="text-xl text-text-secondary font-sans max-w-2xl mx-auto">
                No filler. Long-form thinking on the technical and regulatory 
                future of constitutional AI governance.
             </p>
          </div>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
             <input type="email" placeholder="email@example.com" className="h-16 px-8 rounded-xl bg-white border border-border flex-1 focus:outline-none focus:border-gold transition-colors font-sans" />
             <Button size="lg" className="h-16 px-12 bg-gold text-white hover:bg-gold/90 transition-colors">Subscribe</Button>
          </form>
      </section>
    </main>
  );
}

function LogoOutline(props:any) {
  return <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>;
}
