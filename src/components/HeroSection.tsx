import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, ShieldCheck, Code2, Building2 } from "lucide-react";
import HeroImage from "../assets/hero-img-with-blur.png";

interface HeroSectionProps {
    ready?: boolean;
}

const institutionalPillars = [
    {
        icon: Building2,
        title: "IFSP Salto",
        subtitle: "Instituto Federal de Educação, Ciência e Tecnologia",
    },
    {
        icon: GraduationCap,
        title: "Ciência da Computação & ADS",
        subtitle: "Estudantes em formação técnica de nível superior",
    },
    {
        icon: ShieldCheck,
        title: "Movimento Empresa Júnior",
        subtitle: "Chancela oficial Brasil Júnior e Núcleo Campinas",
    },
    {
        icon: Code2,
        title: "Engenharia de Software",
        subtitle: "Desenvolvimento de sites, sistemas e landing pages",
    },
];

const HeroSection = ({ ready = true }: HeroSectionProps) => {
    return (
        <section
            id="inicio"
            className="relative min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden pt-28 md:pt-36"
        >
            {/* Team Photo Background with Cinematic Contrast Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(3, 15, 60, 0.65) 50%, rgba(0, 0, 0, 0.95) 100%), url(${HeroImage})`,
                }}
            />

            {/* Precision Grid Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Brand Ambient Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#0357FF]/20 via-[#58D2FF]/15 to-[#18EF64]/20 blur-3xl pointer-events-none" />

            {/* Main Content */}
            <div className="relative container mx-auto px-4 md:px-8 max-w-5xl my-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Badge with EJ Mint/Green Color */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#18EF64]/30 bg-[#18EF64]/10 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#18EF64] animate-pulse shadow-[0_0_8px_#18EF64]" />
                        <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#C2FFDE] uppercase">
                            EMPRESA JÚNIOR DE TECNOLOGIA DO IFSP - SALTO
                        </span>
                    </div>

                    {/* FIAP Architectural Structure with Infinitech EJ Gradient */}
                    <h1 className="font-display text-center mb-6">
                        {/* 1º Span */}
                        <span className="block text-white text-lg sm:text-2xl md:text-3xl font-normal tracking-tight mb-3">
                            Especialistas em desenvolvimento de sites, sistemas e landing pages
                        </span>

                        {/* 2º Span - Signature Infinitech EJ Gradient */}
                        <span className="block text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.92] tracking-tight mb-3">
                            SITES, SISTEMAS & LANDING PAGES
                        </span>

                        {/* 3º Span - Crisp White High Contrast */}
                        <span className="block text-white text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-tight">
                            A SUA EMPRESA JÚNIOR DE TECNOLOGIA
                        </span>
                    </h1>

                    {/* Descriptive Paragraph */}
                    <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                        Somos a <strong className="text-white font-semibold">Empresa Júnior</strong> do IFSP. Entregamos excelência em <strong className="text-white font-semibold">desenvolvimento de sites</strong>, <strong className="text-white font-semibold">sistemas sob medida</strong> e <strong className="text-white font-semibold">landing pages</strong> de alta performance.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64] text-black hover:opacity-95 font-display font-bold text-base px-8 py-6 rounded-md transition-all shadow-[0_0_30px_rgba(88,210,255,0.3)] flex items-center justify-center gap-2 group"
                        >
                            <a href="#contato">
                                Solicitar Orçamento
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="w-full sm:w-auto border-white/20 bg-black/60 text-white hover:bg-white/10 hover:text-white font-display text-base px-8 py-6 rounded-md transition-all backdrop-blur-sm"
                        >
                            <a href="#diferencial">Conhecer Diferenciais</a>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Authentic Institutional Pillars (100% Real Info, No Fabricated Metrics) */}
            <div className="relative border-t border-white/10 bg-black/85 backdrop-blur-md mt-16 z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 py-2">
                        {institutionalPillars.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 15 }}
                                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="p-5 sm:p-6 flex items-start gap-4"
                            >
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#58D2FF] shrink-0 mt-0.5">
                                    <item.icon size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-display font-bold text-white tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-snug">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
