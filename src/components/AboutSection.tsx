import { motion } from "framer-motion";
import { MapPin, School, ShieldCheck } from "lucide-react";
import AboutImg from "../assets/about-img.png";

const highlights = [
    {
        icon: School,
        title: "Origem Acadêmica Federal",
        desc: "Fundada por graduandos dos cursos de Ciência da Computação e Análise e Desenvolvimento de Sistemas (ADS) do IFSP Câmpus Salto.",
    },
    {
        icon: ShieldCheck,
        title: "Chancela do Movimento Empresa Júnior",
        desc: "Integrada à rede oficial Brasil Júnior e Núcleo Campinas, seguindo elevados padrões éticos e de entrega.",
    },
    {
        icon: MapPin,
        title: "Atuação Regional & Nacional",
        desc: "Atendimento próximo em Salto, Itu, Indaiatuba, Campinas e projetos remotos para organizações de todo o Brasil.",
    },
];

const AboutSection = () => {
    return (
        <section id="sobre" className="py-24 md:py-36 bg-[#F8F9FA] text-zinc-950 relative border-b border-zinc-200">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column - Institutional Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <span className="inline-block text-[11px] font-mono tracking-[0.25em] text-[#0357FF] uppercase border border-[#0357FF]/30 px-3.5 py-1.5 rounded-full bg-[#0357FF]/5 font-semibold">
                            SOBRE A INFINITECH // 02
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-zinc-950 leading-[1.05]">
                            Jovens profissionais,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64]">
                                resultados reais.
                            </span>
                        </h2>

                        <div className="space-y-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
                            <p>
                                Somos a <strong className="text-zinc-950 font-semibold">Infinitech Jr</strong>, a <strong className="text-zinc-950 font-semibold">Empresa Júnior</strong> dos cursos de Ciência da Computação e Análise e Desenvolvimento de Sistemas (ADS) do <strong className="text-zinc-950 font-semibold">IFSP (Câmpus Salto)</strong>. Formada por estudantes talentosos e apaixonados por resolver problemas reais através da tecnologia, nosso foco é entregar soluções de alto impacto com excelente custo-benefício.
                            </p>
                            <p>
                                Especialistas em <strong className="text-zinc-950 font-semibold">desenvolvimento de sites</strong>, <strong className="text-zinc-950 font-semibold">desenvolvimento de sistemas sob medida</strong>, <strong className="text-zinc-950 font-semibold">desenvolvimento de landing page</strong> e consultoria tecnológica, ajudamos empresas em Salto, Indaiatuba, Itu, Campinas e região a acelerar seu crescimento no ambiente digital.
                            </p>
                        </div>

                        {/* Feature Badges */}
                        <div className="grid sm:grid-cols-1 gap-4 pt-4 border-t border-zinc-200">
                            {highlights.map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <div className="p-2.5 rounded-md bg-white border border-[#0357FF]/20 text-[#0357FF] mt-1 shadow-sm shrink-0">
                                        <item.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-sm sm:text-base text-zinc-900">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Right Column - Architectural Photographic Frame */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }} 
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            {/* Outer minimalist structural frame with brand gradient accent */}
                            <div className="absolute -inset-3 rounded-2xl border border-[#0357FF]/20 pointer-events-none" />
                            
                            <div className="relative rounded-xl overflow-hidden bg-white border border-zinc-200 shadow-xl">
                                <img 
                                    className="w-full h-auto object-cover object-center" 
                                    src={AboutImg} 
                                    alt="Equipe Infinitech Jr"
                                />

                                {/* Subtle caption bar */}
                                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-600">
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#18EF64] shadow-[0_0_6px_#18EF64]" />
                                        EQUIPE DE DESENVOLVIMENTO
                                    </span>
                                    <span className="text-[#0357FF] font-semibold">IFSP SALTO</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
