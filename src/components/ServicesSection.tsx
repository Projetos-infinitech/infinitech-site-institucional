import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Globe2, Code2, LayoutTemplate, Bot, Minus, ArrowRight } from "lucide-react";

const services = [
    {
        id: "SRV-01",
        icon: LayoutTemplate,
        title: "Landing Pages de Alta Conversão",
        stack: "Copywriting Estruturado • UI/UX • CRO • Analytics",
        description:
            "O desenvolvimento de landing page focada em conversão é o melhor caminho para campanhas e captação de leads. Criamos landing pages ultrarrápidas, otimizadas para mobile e estrategicamente desenhadas para converter visitantes em clientes.",
    },
    {
        id: "SRV-02",
        icon: Globe2,
        title: "Desenvolvimento de Sites Institucionais",
        stack: "Next.js • React • SEO Avançado • Performance 90+",
        description:
            "Desenvolvimento de websites modernos, responsivos e otimizados para motores de busca (SEO). Criamos arquiteturas digitais que transmitem autoridade imediata, carregam instantaneamente e posicionam sua marca com destaque no mercado.",
    },
    {
        id: "SRV-03",
        icon: Code2,
        title: "Sistemas Web & Plataformas Sob Medida",
        stack: "TypeScript • Node.js • APIs REST • PostgreSQL",
        description:
            "Sistemas personalizados para automatizar rotinas, gerenciar processos operacionais e substituir planilhas desorganizadas. Plataformas seguras, intuitivas e escaláveis, desenvolvidas especificamente para as regras do seu negócio.",
    },
    {
        id: "SRV-04",
        icon: Bot,
        title: "Consultoria Tech & Automações Inteligentes",
        stack: "Inteligência Artificial • Automações • Integração de APIs",
        description:
            "Diagnóstico técnico e aplicação de inteligência artificial prática e automação de fluxos. Apoiamos sua empresa a modernizar processos e adotar as tecnologias certas com o suporte e supervisão do corpo docente do IFSP.",
    },
];

const ServicesSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };

    return (
        <section id="servicos" className="py-24 md:py-36 bg-white text-zinc-950 relative border-b border-zinc-200">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                
                {/* Header with EJ Color Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="inline-block text-[11px] font-mono tracking-[0.25em] text-[#0357FF] uppercase border border-[#0357FF]/30 px-3.5 py-1.5 rounded-full bg-[#0357FF]/5 font-semibold">
                        SOLUÇÕES & SERVIÇOS // 04
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-zinc-950">
                        O que construímos{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64]">
                            para você
                        </span>
                    </h2>

                    <p className="text-zinc-600 max-w-xl mx-auto text-base sm:text-lg font-normal leading-relaxed">
                        Soluções de software desenvolvidas sob medida com excelência técnica, código limpo e acompanhamento próximo.
                    </p>
                </motion.div>

                {/* Services Accordion List (FIAP High-Contrast Architecture with EJ Highlights) */}
                <div className="space-y-4">
                    {services.map((service, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                                    isOpen 
                                        ? "bg-zinc-50/80 shadow-md border-[#0357FF]/30" 
                                        : "bg-white border-zinc-200 hover:border-zinc-300"
                                }`}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors"
                                >
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                                            isOpen 
                                                ? "bg-gradient-to-r from-[#0357FF] to-[#18EF64] text-white shadow-[0_0_15px_rgba(3,87,255,0.25)]" 
                                                : "bg-zinc-100 text-zinc-700"
                                        }`}>
                                            <service.icon size={22} />
                                        </div>

                                        <div>
                                            <span className={`font-mono text-xs font-semibold tracking-wider block mb-1 ${
                                                isOpen ? "text-[#0357FF]" : "text-zinc-400"
                                            }`}>
                                                [{service.id}]
                                            </span>
                                            <h3 className="font-display font-bold text-lg sm:text-2xl text-zinc-950 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="font-mono text-xs text-zinc-500 mt-1 hidden sm:block">
                                                {service.stack}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                        isOpen ? "bg-zinc-950 text-white border-zinc-950" : "border-zinc-300 text-zinc-500"
                                    }`}>
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 sm:px-8 pb-8 pt-2 pl-6 sm:pl-[5.5rem] border-t border-zinc-200/60 mt-2 space-y-4">
                                                <p className="text-zinc-600 text-base leading-relaxed max-w-2xl font-normal">
                                                    {service.description}
                                                </p>

                                                <div>
                                                    <a
                                                        href="#contato"
                                                        className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase font-semibold text-[#0357FF] hover:text-[#0357FF]/80 transition-colors"
                                                    >
                                                        Solicitar proposta para este serviço
                                                        <ArrowRight size={14} />
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
