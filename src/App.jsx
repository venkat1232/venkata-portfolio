import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Menu, X, ArrowRight, Github, Linkedin, Twitter, Dribbble, Mail, Terminal, Bot, Workflow, Layers, Database, ExternalLink, ChevronDown, CheckCircle } from 'lucide-react';

// --- DATA CONFIGURATION ---

const PERSONAL_INFO = {
    name: "Venkata Jarugula",
    title: "Principal RPA Architect & AI Strategist",
    tagline: "Orchestrating the digital workforce. 11+ Years of IT & 7+ Years of RPA Experience.",
    about: "I don't just build bots; I architect enterprise ecosystems. With deep expertise in UiPath, Blue Prism, Automation Anywhere, and Power Automate, I lead Centers of Excellence (CoE) that govern the full automation lifecycle. My industry experience spans Healthcare, Insurance, Banking, and Retail.",
    email: "hire@vkjarugula.com",
    location: "Kansas City, MO",
    keywords: "RPA Architect, UiPath, Blue Prism, Automation Anywhere, Power Automate, CoE Lead, SDLC, GenAI, Document Understanding, Process Mining, .NET, Java, Surface Automation"
};

const EXPERIENCE = [
    {
        id: 1,
        role: "RPA Lead & Architect",
        company: "Multiple Clients (Banking, Insurance, Healthcare, Retail)",
        period: "2016 — Present",
        description: "Leading platform engineering and end-to-end RPA implementations. Responsible for infrastructure setup, CoE governance, and managing cross-functional teams.",
        highlights: [
            "Team Leadership: Led Platform Engineering, Blue Prism/UiPath Development teams, Prod Controllers, and Business Analysts to ensure seamless delivery.",
            "Infrastructure: Architected and maintained robust Blue Prism & UiPath infrastructure for high-availability enterprise environments.",
            "Advanced Automation: Implemented Surface Automation for legacy systems and managed complex robot workloads using Blue Prism Work Queues.",
            "SDLC Governance: Enforced Solution Design Document (SDD) standards and managed the full lifecycle from requirement gathering to production support."
        ],
        tech: ["Blue Prism", "UiPath", "Infrastructure", "Leadership", "SDLC", "Surface Automation"]
    },
    {
        id: 2,
        role: "Sr. RPA Developer",
        company: "IT Services Company",
        period: "2013 — 2016",
        description: "Hands-on development and deployment of automation processes in an Agile environment. Focused on building robust, scalable bots for varied business systems.",
        highlights: [
            "Bot Engineering: Designed and tested bots using various spying methods including Win-32, Accessibility, and Region mode for dynamic applications.",
            "Control Room Management: optimized 'Available Processes' and 'Available Resources' to maximize bot utilization and throughput.",
            "Agile Delivery: Participated in daily stand-ups and sprint planning to deliver automation tasks on time.",
            "Multi-Platform: Leveraged working knowledge of Automation Anywhere and OpenSpan alongside deep Blue Prism expertise."
        ],
        tech: ["Blue Prism", "Automation Anywhere", "OpenSpan", "Agile", "Win32 Spying"]
    },
    {
        id: 3,
        role: "Software Engineer (.NET/Java)",
        company: "Software Development Firm",
        period: "2008 — 2013",
        description: "Full-stack application development experience using a wide range of Microsoft and Java technologies before transitioning to RPA.",
        highlights: [
            ".NET Stack: Developed enterprise applications using C#.Net 4.5, ASP.NET, MVC, ADO.NET, and XML Web Services.",
            "Java Ecosystem: Built web applications using Java/J2EE, Spring, Hibernate, JSP, and JMS for messaging.",
            "Database Engineering: Wrote complex Stored Procedures, Triggers, Views, and Joins on SQL Server and Oracle 10g.",
            "Frontend: Designed user interfaces using HTML, CSS, Bootstrap, and AngularJS."
        ],
        tech: ["C#.NET", "Java/J2EE", "SQL Server", "Oracle 10g", "AngularJS"]
    }
];

const PROJECTS = [
    {
        id: 1,
        title: "Financial Reconciliation Engine",
        category: "UiPath & AI Center",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "End-to-End delivery from PDD to Hypercare. Reconciles $50M+ daily using AI matching. Managed the full SDLC including UAT and Production rollout.",
        link: "https://www.uipath.com/solutions/industry/banking-and-financial-services"
    },
    {
        id: 2,
        title: "Cognitive Invoice Processing",
        category: "Power Automate & AI Builder",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
        description: "Full lifecycle implementation. From discovery (Process Mining) to deployment. Uses AI models to extract data from invoices with 99% accuracy.",
        link: "https://powerautomate.microsoft.com/en-us/ai-builder/"
    },
    {
        id: 3,
        title: "IT Ops Self-Healing System",
        category: "Automation Anywhere A360",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        description: "Architected a self-healing bot framework. Monitors system health, performs auto-remediation, and manages ticketing. Delivered via Agile sprints.",
        link: "https://www.automationanywhere.com/products/automation-360"
    }
];

const SKILL_CATEGORIES = [
    {
        id: 'platforms',
        title: "RPA Platforms",
        icon: Bot,
        skills: ["UiPath", "Blue Prism", "Automation Anywhere", "OpenSpan", "Power Automate"]
    },
    {
        id: 'arch',
        title: "Architecture & SDLC",
        icon: Layers,
        skills: ["REFramework", "Work Queues", "PDD / SDD Documentation", "Control Room", "CI/CD Pipelines"]
    },
    {
        id: 'tech',
        title: "Development & Tech",
        icon: Database,
        skills: ["C# .NET", "Java / J2EE", "SQL Server / Oracle", "HTML / JS / CSS", "Web Services (REST/SOAP)"]
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
                    <NavLink href="#projects">Architecture</NavLink>
                    <NavLink href="#expertise">Tech Stack</NavLink>
                    <NavLink href="#experience">Professional Experience</NavLink>
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
                            <NavLink href="#projects" onClick={() => setIsOpen(false)}>Architecture</NavLink>
                            <NavLink href="#expertise" onClick={() => setIsOpen(false)}>Tech Stack</NavLink>
                            <NavLink href="#experience" onClick={() => setIsOpen(false)}>Professional Experience</NavLink>
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
                        <span className="text-xs font-medium text-stone-300 uppercase tracking-widest">Open for Consulting</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-sans font-bold leading-[1.05] text-white mb-8 tracking-tight">
                        Architecting the <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-orange-400 animate-gradient bg-300%">Digital Workforce.</span>
                    </h1>

                    <p className="text-xl text-stone-400 mb-10 max-w-lg leading-relaxed font-light">
                        {PERSONAL_INFO.tagline} I bridge the gap between complex business processes and resilient, scalable automation.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-stone-100 text-stone-950 font-bold rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Architecture <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                            </span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden md:flex justify-center items-center relative"
                >
                    <div className="relative w-full max-w-[450px] aspect-square">
                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-stone-800 shadow-2xl z-20 group">
                            <img
                                src="/profile.jpg" 
                                alt="Venkata Jarugula"
                                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                            />
                             <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
                        </div>
                        <div className="absolute inset-[-20px] -z-10 border border-stone-800 rounded-full opacity-30 animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-[20px] -z-10 border border-orange-500/20 rounded-full opacity-40 animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-stone-900/20">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Selected Automations"
                    subtitle="Enterprise-scale bots delivering measurable ROI."
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
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
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
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors">
                                    View Technology Stack <ArrowRight size={16} />
                                </a>
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
                            title="Capabilities"
                            subtitle="A comprehensive automation toolkit built over 11+ years."
                        />
                        <p className="text-stone-400 text-lg leading-relaxed mb-8 font-light max-w-md">
                            True architecture goes beyond recording macros. I design resilient systems that prioritize stability, compliance, and scalable exception handling using the latest frameworks.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                             <div>
                                <div className="text-4xl font-bold text-white mb-2">11+</div>
                                <div className="text-sm text-stone-500 uppercase tracking-wider">Years IT Exp</div>
                             </div>
                             <div>
                                <div className="text-4xl font-bold text-white mb-2">7+</div>
                                <div className="text-sm text-stone-500 uppercase tracking-wider">Years RPA Exp</div>
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
                    subtitle="Professional Experience"
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
                                
                                <div className="mb-6 space-y-3 bg-stone-900/30 p-6 rounded-xl border border-stone-800/50">
                                    {exp.highlights.map((point, i) => (
                                        <div key={i} className="flex gap-3 text-stone-400 text-sm leading-relaxed">
                                            <span className="text-orange-500 mt-1">▹</span>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

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
            // IMPORTANT: REPLACE WITH YOUR ACTUAL FORMSPREE ID
            const response = await fetch("https://formspree.io/f/mqajawjn", { 
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
                    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's automate the <br/> <span className="text-stone-600">extraordinary.</span></h2>
                    <p className="text-xl text-stone-400 mb-12 max-w-xl mx-auto font-light">
                        Available for CoE Consulting, RPA Architecture, and Digital Transformation strategies.
                    </p>
                    
                    {!showForm ? (
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                            <button 
                                onClick={() => setShowForm(true)}
                                className="relative z-20 px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2"
                            >
                                <Mail size={20} /> Discuss Automation
                            </button>
                            <button 
                                onClick={handleCopy}
                                className="relative z-20 px-10 py-5 bg-stone-900 border border-stone-800 hover:bg-stone-800 text-white font-medium rounded-full transition-all w-48"
                            >
                                {copied ? "Copied!" : "Copy Email"}
                            </button>
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-lg mx-auto mb-20 text-left bg-stone-900/50 p-8 rounded-3xl border border-stone-800 backdrop-blur-md relative z-30"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Project Details</h3>
                                <button onClick={() => setShowForm(false)} className="text-stone-500 hover:text-white"><X size={20}/></button>
                            </div>
                            
                            {/* SUCCESS MESSAGE */}
                            {formStatus === "success" ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Received your message!</h4>
                                    <p className="text-stone-400">Will get back in few minutes.</p>
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
                                        <textarea name="message" rows="3" required disabled={formStatus === "submitting"} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50" placeholder="Tell me about your automation needs..."></textarea>
                                    </div>
                                    
                                    {formStatus === "error" && (
                                        <p className="text-red-500 text-sm text-center">Something went wrong. Please check your Formspree ID.</p>
                                    )}

                                    <button type="submit" disabled={formStatus === "submitting"} className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:bg-stone-800 disabled:cursor-not-allowed">
                                        {formStatus === "submitting" ? <>Processing...</> : <>Send Message</>}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    )}

                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-stone-900/50 border border-white/5 backdrop-blur-md gap-2">
                        {[{ icon: Linkedin, href: "https://www.linkedin.com/in/venkatakrishnajarugula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" }, { icon: Twitter, href: "#" }, { icon: Github, href: "https://github.com/venkat1232" }, { icon: Dribbble, href: "#" }].map((item, i) => (
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
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": PERSONAL_INFO.name,
        "jobTitle": PERSONAL_INFO.title,
        "url": "https://vkjarugula.com",
        "knowsAbout": ["Robotic Process Automation", "UiPath", "Blue Prism", "Automation Anywhere", "Intelligent Automation", "Hyperautomation", "C#", "Java", ".NET"],
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
                    <meta name="description" content={`${PERSONAL_INFO.title} with 11+ years in IT and 7+ years in RPA. Expert in Blue Prism, UiPath, and end-to-end automation delivery.`} />
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