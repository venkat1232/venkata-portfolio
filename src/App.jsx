import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // IMPORTING SEO TOOL
import { Menu, X, ArrowRight, Github, Linkedin, Twitter, Dribbble, Mail, Terminal, PenTool, Users, ChevronDown, ExternalLink } from 'lucide-react';

// --- MOCK DATA ---
const PERSONAL_INFO = {
    name: "Venkata Jarugula",
    title: "Product Architect & Technical Lead",
    tagline: "Building resilient systems with human-centric design.",
    about: "With more than a decade of experience, I bridge the gap between conceptual design and technical execution.",
    email: "hire@vkjarugula.com",
    location: "Kansas City, MO",
    // SEO SPECIFIC KEYWORDS
    keywords: "Product Architect, React Developer, AWS Solutions Architect, Technical Lead, Frontend Engineer, System Design, Kansas City Developer, Micro-frontends"
};

const EXPERIENCE = [
    {
        id: 1,
        role: "Principal Architect",
        company: "TechNova",
        period: "2019 — Present",
        description: "Redefined the core SaaS architecture serving 5M+ users. Led a team of 15 engineers. Implemented a micro-frontend architecture that reduced deployment times by 60%.",
        tech: ["System Design", "React", "Leadership", "AWS"]
    },
    {
        id: 2,
        role: "Senior Lead",
        company: "Nexus Interactive",
        period: "2014 — 2019",
        description: "Spearheaded the mobile transformation initiative, resulting in 200% growth in mobile engagement. Managed cross-functional teams of designers and developers.",
        tech: ["Mobile", "Strategy", "UX", "React Native"]
    },
    {
        id: 3,
        role: "Creative Technologist",
        company: "Pixel Agency",
        period: "2008 — 2014",
        description: "Built award-winning marketing sites for global brands like Nike and Apple. Pioneered the use of WebGL for immersive web experiences.",
        tech: ["WebGL", "Creative", "Frontend", "Three.js"]
    }
];

const PROJECTS = [
    {
        id: 1,
        title: "Aether Finance",
        category: "FinTech",
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=800",
        description: "Institutional grade trading dashboard with real-time visualizations. Handles 50k transactions per second with sub-millisecond latency.",
        link: "#"
    },
    {
        id: 2,
        title: "Orbit OS",
        category: "Open Source",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
        description: "A comprehensive design system used by 2k+ developers globally. Features accessible primitives and automated documentation.",
        link: "#"
    },
    {
        id: 3,
        title: "Lumina",
        category: "HealthTech",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
        description: "AI-powered diagnostic assistant for remote patient monitoring. HIPAA compliant architecture with edge-based inference.",
        link: "#"
    }
];

const SKILL_CATEGORIES = [
    {
        id: 'eng',
        title: "Engineering",
        icon: Terminal,
        skills: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS Architecture", "CI/CD Pipelines"]
    },
    {
        id: 'des',
        title: "Design",
        icon: PenTool,
        skills: ["UI System Design", "Figma", "Interaction Design", "WebGL / Three.js", "Accessibility (a11y)"]
    },
    {
        id: 'lead',
        title: "Leadership",
        icon: Users,
        skills: ["Technical Strategy", "Team Mentorship", "Agile / Scrum", "Product Roadmapping"]
    }
];

// --- UI COMPONENTS ---

const SectionHeader = ({ title, subtitle, align = "left" }) => (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}>
        <div className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : ""}`}>
            <div className="h-[1px] w-12 bg-orange-500/50"></div>
            <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">{title}</span>
            {align === "center" && <div className="h-[1px] w-12 bg-orange-500/50"></div>}
        </div>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-sans font-bold text-stone-100 leading-tight"
        >
            {subtitle}
        </motion.h2>
    </div>
);

const NavLink = ({ href, children, onClick }) => (
    <a 
        href={href} 
        onClick={onClick}
        className="text-sm font-medium text-stone-400 hover:text-orange-400 transition-colors duration-300 tracking-wide cursor-pointer relative group"
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
);

// --- SECTIONS ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-stone-950/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-tr from-orange-600 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-900/20 group-hover:scale-105 transition-transform">
                        V.
                    </div>
                    <span className={`font-bold transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>Venkata</span>
                </a>

                <div className="hidden md:flex items-center gap-10">
                    <NavLink href="#projects">Selected Work</NavLink>
                    <NavLink href="#expertise">Expertise</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <a href="#contact" className="px-6 py-2.5 text-sm font-semibold text-stone-950 bg-stone-100 hover:bg-white rounded-full transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Contact
                    </a>
                </div>

                <button className="md:hidden text-stone-200" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-stone-950 border-b border-stone-800 overflow-hidden absolute w-full"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            <NavLink href="#projects" onClick={() => setIsOpen(false)}>Selected Work</NavLink>
                            <NavLink href="#expertise" onClick={() => setIsOpen(false)}>Expertise</NavLink>
                            <NavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
                            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
            {/* Cinematic Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse duration-1000"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px] opacity-20 mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/50 border border-stone-800 mb-8 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-stone-300 uppercase tracking-widest">Available for 2026</span>
                    </div>
                    
                    <h1 className="text-6xl lg:text-8xl font-sans font-bold leading-[1.05] text-white mb-8 tracking-tight">
                        Digital <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-orange-400 animate-gradient bg-300%">Alchemist.</span>
                    </h1>

                    <p className="text-xl text-stone-400 mb-10 max-w-lg leading-relaxed font-light">
                        {PERSONAL_INFO.tagline} Combining technical depth with creative vision to build products that endure.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <a 
                            href="#projects" 
                            className="group relative px-8 py-4 bg-stone-100 text-stone-950 font-bold rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                            </span>
                        </a>
                    </div>
                </motion.div>

                {/* Abstract Visual Right Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden md:block relative"
                >
                     <div className="relative w-full aspect-square max-w-lg mx-auto">
                        <div className="absolute inset-0 border border-stone-800 rounded-full opacity-20 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-10 border border-orange-500/20 rounded-full opacity-30 animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="p-8 bg-stone-900/50 backdrop-blur-xl rounded-2xl border border-stone-800 shadow-2xl">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-2 font-mono text-sm text-stone-400">
                                    <div className="flex"><span className="text-rose-400 mr-2">const</span> architect = <span className="text-orange-400 ml-2">new</span> Visionary();</div>
                                    <div className="pl-4">architect.build(<span className="text-green-400">'Future'</span>);</div>
                                    <div className="pl-4">architect.scale(<span className="text-blue-400">100x</span>);</div>
                                </div>
                             </div>
                        </div>
                     </div>
                </motion.div>
            </div>

            <motion.a 
                href="#projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-500 flex flex-col items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={20} className="animate-bounce" />
            </motion.a>
        </section>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-stone-900/20">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader 
                    title="Selected Work" 
                    subtitle="Mission-critical applications and award-winning interfaces."
                />

                <div className="space-y-24">
                    {PROJECTS.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="lg:w-2/3 w-full group cursor-pointer">
                                <div className="aspect-video rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 relative shadow-2xl">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        <ExternalLink size={20} className="text-black" />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/3 w-full space-y-6">
                                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider rounded-full border border-orange-500/20">
                                    {project.category}
                                </span>
                                <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                                <p className="text-stone-400 text-lg leading-relaxed font-light">
                                    {project.description}
                                </p>
                                <ul className="flex gap-3 flex-wrap pt-4">
                                    {['React', 'TypeScript', 'WebGL'].map((tag, i) => (
                                        <li key={i} className="text-xs font-mono text-stone-500 border-b border-stone-800 pb-1">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Expertise = () => {
    return (
        <section id="expertise" className="py-32 border-t border-stone-900 bg-stone-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900/50 via-stone-950 to-stone-950 pointer-events-none"></div>
             
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <SectionHeader 
                            title="Expertise" 
                            subtitle="A comprehensive technical toolkit built over two decades."
                        />
                        <p className="text-stone-400 text-lg leading-relaxed mb-8 font-light max-w-md">
                            I don't just write code; I define systems. My approach balances bleeding-edge innovation with the stability required for enterprise scale.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                             <div>
                                <div className="text-4xl font-bold text-white mb-2">20+</div>
                                <div className="text-sm text-stone-500 uppercase tracking-wider">Years Experience</div>
                             </div>
                             <div>
                                <div className="text-4xl font-bold text-white mb-2">150+</div>
                                <div className="text-sm text-stone-500 uppercase tracking-wider">Projects Shipped</div>
                             </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {SKILL_CATEGORIES.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-stone-900/40 border border-stone-800 hover:border-orange-500/30 transition-colors group"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-stone-950 border border-stone-800 rounded text-stone-400 text-xs font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-32 relative border-t border-stone-900">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader 
                    title="Career History" 
                    subtitle="Roles & Impact"
                    align="center"
                />

                <div className="mt-20 space-y-20">
                    {EXPERIENCE.map((exp, index) => (
                        <div key={exp.id} className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20 group">
                            <div className="md:text-right md:sticky md:top-32 h-fit">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{exp.company}</h3>
                                <div className="text-stone-500 font-mono text-sm mb-4">{exp.period}</div>
                                <div className="hidden md:block h-[1px] w-full bg-gradient-to-l from-stone-800 to-transparent mt-6"></div>
                            </div>

                            <div>
                                <h4 className="text-xl text-stone-200 font-medium mb-4">{exp.role}</h4>
                                <p className="text-stone-400 leading-relaxed mb-6 font-light text-lg">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-stone-900 border border-stone-800 text-stone-500 text-xs rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [copied, setCopied] = useState(false);
    const [formStatus, setFormStatus] = useState("idle");

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
                 setCopied(true);
            }).catch(() => {
                 const textArea = document.createElement("textarea");
                 textArea.value = PERSONAL_INFO.email;
                 document.body.appendChild(textArea);
                 textArea.select();
                 document.execCommand('copy');
                 document.body.removeChild(textArea);
                 setCopied(true);
            });
        } catch (err) {
             const textArea = document.createElement("textarea");
             textArea.value = PERSONAL_INFO.email;
             document.body.appendChild(textArea);
             textArea.select();
             document.execCommand('copy');
             document.body.removeChild(textArea);
             setCopied(true);
        }
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("submitting");
        const formData = new FormData(e.target);
        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", { // REMEMBER TO PUT YOUR ID HERE
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                setFormStatus("success");
                e.target.reset();
                setTimeout(() => {
                    setShowForm(false);
                    setFormStatus("idle");
                }, 3000);
            } else {
                setFormStatus("error");
            }
        } catch (error) {
            setFormStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's build the <br/> <span className="text-stone-600">extraordinary.</span></h2>
                    <p className="text-xl text-stone-400 mb-12 max-w-xl mx-auto font-light">
                        Currently available for select consulting engagements and fractional CTO roles.
                    </p>
                    
                    {!showForm ? (
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                            <button 
                                onClick={() => setShowForm(true)}
                                className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2"
                            >
                                <Mail size={20} /> Start a Project
                            </button>
                            <button 
                                onClick={handleCopy}
                                className="px-10 py-5 bg-stone-900 border border-stone-800 hover:bg-stone-800 text-white font-medium rounded-full transition-all w-48"
                            >
                                {copied ? "Copied!" : "Copy Email"}
                            </button>
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-lg mx-auto mb-20 text-left bg-stone-900/50 p-8 rounded-3xl border border-stone-800 backdrop-blur-md"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Project Details</h3>
                                <button onClick={() => setShowForm(false)} className="text-stone-500 hover:text-white"><X size={20}/></button>
                            </div>
                            {formStatus === "success" ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-stone-400">I'll get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Name</label>
                                        <input type="text" name="name" required disabled={formStatus === "submitting"} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Email</label>
                                        <input type="email" name="email" required disabled={formStatus === "submitting"} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="your@email.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Message</label>
                                        <textarea name="message" rows="3" required disabled={formStatus === "submitting"} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="Tell me about your project..."></textarea>
                                    </div>
                                    <button type="submit" disabled={formStatus === "submitting"} className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:bg-stone-800 disabled:cursor-not-allowed">
                                        {formStatus === "submitting" ? <>Processing...</> : <>Send Message</>}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    )}

                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-stone-900/50 border border-white/5 backdrop-blur-md gap-2">
                        {[{ icon: Linkedin, href: "#" }, { icon: Twitter, href: "#" }, { icon: Github, href: "#" }, { icon: Dribbble, href: "#" }].map((item, i) => (
                            <a key={i} href={item.href} className="w-14 h-14 flex items-center justify-center rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
                                <item.icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-10 border-t border-stone-900 bg-stone-950 text-center relative z-10">
        <p className="text-stone-600 text-sm font-medium">
            © {new Date().getFullYear()} Designed & Built by Venkata Jarugula.
        </p>
    </footer>
);

const App = () => {
    // SEO STRUCTURED DATA FOR GOOGLE
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": PERSONAL_INFO.name,
        "jobTitle": PERSONAL_INFO.title,
        "url": "https://vkjarugula.com", // REPLACE WITH YOUR ACTUAL DOMAIN
        "knowsAbout": ["React", "AWS", "System Architecture", "Product Strategy", "WebGL", "TypeScript", "Node.js"],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kansas City",
            "addressRegion": "MO"
        }
    };

    return (
        <HelmetProvider>
            <div className="bg-stone-950 text-stone-200 min-h-screen font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden">
                <Helmet>
                    <title>{`${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`}</title>
                    <meta name="description" content={`${PERSONAL_INFO.title} based in ${PERSONAL_INFO.location}. Expert in ${PERSONAL_INFO.keywords}.`} />
                    <meta name="keywords" content={PERSONAL_INFO.keywords} />
                    <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                </Helmet>

                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
                    :root { font-family: 'Plus Jakarta Sans', sans-serif; }
                    body::before { content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events: none; z-index: 50; opacity: 0.4; }
                    ::-webkit-scrollbar { width: 8px; }
                    ::-webkit-scrollbar-track { background: #0c0a09; }
                    ::-webkit-scrollbar-thumb { background: #292524; border-radius: 4px; }
                    ::-webkit-scrollbar-thumb:hover { background: #44403c; }
                `}</style>
                
                <Navbar />
                <main>
                    <Hero />
                    <Projects />
                    <Expertise />
                    <Experience />
                    <Contact />
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default App;