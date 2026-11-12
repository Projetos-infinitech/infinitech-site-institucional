import { motion } from "framer-motion";
import { Target, Eye, Rocket, Handshake, Users, Cpu } from "lucide-react";
import MVVImg from "../assets/mvv-img.png";

// Missão e Visão - Estrutura de dados industrial
const identityItems = [
    {
        id: "MIS-01",
        sys: "SYS-MISSION",
        icon: Target,
        title: "Nossa Missão",
        description:
            "Tornar-se uma referência no Núcleo Campinas de Empresas Juniores e, assim, promover a vivência empresarial para os alunos do IFSP - Salto através do desenvolvimento de soluções tecnológicas autênticas e personalizadas.",
    },
    {
        id: "VIS-02",
        sys: "SYS-VISION",
        icon: Eye,
        title: "Nossa Visão",
        description:
            "Buscamos nos tornar a maior empresa júnior do IFSP, sendo referência para desenvolvimento de projetos de Tecnologia e como prestadora de serviços da região; além de facilitar oportunidades de crescimento para PMEs, impulsionando o desenvolvimento regional.",
    },
];

// Valores (Acróstico IN-FI-NI-TECH)
const values = [
    {
        id: "01",
        sys: "VAL-IN",
        prev: "",
        prefix: "IN",
        suffix: "conformismo",
        icon: Rocket,
        description: "Não aceitamos estagnação e zona de conforto.",
    },
    {
        id: "02",
        sys: "VAL-FI",
        prev: "Con",
        prefix: "FI",
        suffix: "ança",
        icon: Handshake,
        description:
            "Confiamos uns nos outros para que tenham confiança em nós.",
    },
    {
        id: "03",
        sys: "VAL-NI",
        prev: "U",
        prefix: "NI",
        suffix: "ão",
        icon: Users,
        description:
            "Trabalhamos em equipe e com colaboração para alcançarmos objetivos comuns.",
    },
    {
        id: "04",
        sys: "VAL-TECH",
        prev: "",
        prefix: "TECH",
        suffix: "nologia",
        icon: Cpu,
        description:
            "Utilizamos as melhores e mais modernas tecnologias do mercado, a fim de entregar o melhor produto final.",
    },
];

export const MVVSectionIndustrial = () => {
    return (
        <section id="cultura" className="py-24 md:py-36 bg-black text-white relative overflow-hidden border-b border-zinc-800">
            {/* Fine tech grid background line */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

                {/* Header Industrial */}
                <div className="border-b border-white/10 pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="text-[11px] font-mono text-[#58D2FF] mb-3 tracking-[0.25em] uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#18EF64] rounded-full animate-pulse shadow-[0_0_8px_#18EF64]" />
                            [ DIRETRIZES & ESSÊNCIA // 03 ]
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
                            Conheça a{" "}
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)]">
                                Infinitech Jr
                            </span>
                        </h2>
                    </div>
                    <div className="md:max-w-xs font-mono text-xs text-zinc-400 leading-relaxed border-l border-white/10 pl-4">
                        Somos movidos por propósitos claros que guiam cada linha de código que escrevemos e cada projeto que entregamos.
                    </div>
                </div>

                {/* Grid Missão e Visão (Industrial Table) */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10 mb-16">
                    {identityItems.map((item) => (
                        <div
                            key={item.id}
                            className="border-r border-b border-white/10 p-8 md:p-12 relative overflow-hidden group hover:bg-zinc-900/40 transition-all duration-300"
                        >
                            {/* Technical Corner Marking */}
                            <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-500 group-hover:text-[#58D2FF] transition-colors">
                                [{item.sys}]
                            </div>

                            {/* Background Tag Watermark */}
                            <div className="absolute -bottom-6 -right-2 font-mono font-bold text-[80px] md:text-[110px] text-white/[0.03] select-none pointer-events-none group-hover:text-[#0357FF]/10 transition-all duration-300">
                                {item.id}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="w-11 h-11 rounded-md border border-[#0357FF]/30 bg-zinc-950 flex items-center justify-center text-[#58D2FF] group-hover:text-white group-hover:border-[#18EF64]/50 transition-colors shadow-[0_0_15px_rgba(3,87,255,0.15)]">
                                    <item.icon size={22} />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-display font-bold text-2xl tracking-tight text-white uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Header de Valores (Industrial) */}
                <div className="border-b border-white/10 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="text-[10px] font-mono text-[#58D2FF] mb-2 tracking-[0.3em] uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#18EF64] rounded-full animate-pulse shadow-[0_0_8px_#18EF64]" />
                            [ PILARES CULTURAIS // ACRÓSTICO ]
                        </div>
                        <h3 className="text-3xl md:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
                            Nossos{" "}
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)]">
                                Valores
                            </span>
                        </h3>
                    </div>
                    <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest border-l border-white/10 pl-3">
                        [ ARCHITECTURE OF VALUES ]
                    </div>
                </div>

                {/* Grid de Valores (Industrial Table 4-col) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 mb-20">
                    {values.map((item) => (
                        <div
                            key={item.sys}
                            className="border-r border-b border-white/10 p-6 md:p-8 relative overflow-hidden group hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Technical Tag */}
                            <div className="absolute top-3 right-3 font-mono text-[9px] text-zinc-500 group-hover:text-[#58D2FF] transition-colors">
                                [{item.sys}]
                            </div>

                            {/* Background Acrostic Lettering */}
                            <div className="absolute -bottom-6 -right-2 font-mono font-bold text-[70px] md:text-[90px] text-white/[0.04] select-none pointer-events-none group-hover:text-[#0357FF]/10 transition-all duration-300">
                                {item.prefix}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="w-10 h-10 rounded border border-[#0357FF]/30 bg-zinc-950 flex items-center justify-center text-[#58D2FF] group-hover:text-white group-hover:border-[#18EF64]/50 transition-colors shadow-[0_0_12px_rgba(3,87,255,0.15)]">
                                    <item.icon size={20} />
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-display font-bold text-xl uppercase tracking-wide text-white">
                                        {item.prev}
                                        <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)] font-mono font-extrabold">{item.prefix}</span>
                                        {item.suffix}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seção "Seu problema é meu problema" em formato Blueprint / Industrial */}
                <div className="border border-white/10 bg-zinc-950/80 relative overflow-hidden mb-20 p-8 md:p-12 rounded-xl">
                    <div className="absolute top-3 right-4 font-mono text-[9px] text-zinc-500">
                        [ CORE-PHILOSOPHY // LEMA-01 ]
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="text-[10px] font-mono text-[#58D2FF] tracking-[0.25em] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0357FF] rounded-full" />
                                [ CULTURA DE TRABALHO ]
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                                Seu problema é{" "}
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)]">
                                    meu problema.
                                </span>
                            </h3>
                            <div className="space-y-4 font-body text-zinc-300 text-sm sm:text-base leading-relaxed">
                                <p>
                                    O principal lema da Infinitech reflete nossa valorização pelo trabalho em equipe e colaboração. Acreditamos que time unido alcança seus objetivos em comum e também transforma a forma como entregamos soluções aos nossos clientes.
                                </p>
                                <p className="border-l-2 border-[#18EF64] pl-4 italic text-zinc-200 font-mono text-xs">
                                    Cada valor que cultivamos representa um pilar fundamental da nossa cultura e define como operamos, inovamos e crescemos juntos como uma empresa júnior.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-center p-4 border border-white/10 bg-black/60 rounded-xl group"
                        >
                            <div className="absolute top-2 left-2 font-mono text-[8px] text-zinc-500">
                                + ASSET-REF: MVV_IMG
                            </div>
                            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-[#18EF64]">
                                [ RENDERED_VIEW ]
                            </div>
                            <div className="p-2 w-full rounded relative overflow-hidden bg-gradient-to-b from-[#0357FF]/40 to-[#18EF64]/40">
                                <img
                                    className="w-full h-auto object-cover rounded-lg shadow-2xl translate-x-1 -translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                                    src={MVVImg}
                                    alt="Seu problema é meu problema"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MVVSectionIndustrial;
