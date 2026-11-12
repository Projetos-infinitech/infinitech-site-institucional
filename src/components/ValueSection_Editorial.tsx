import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coins, Cpu, HeartHandshake, GraduationCap, Plus, Minus, ArrowUpRight } from "lucide-react";

const values = [
    {
        icon: Coins,
        title: "Custo Acessível & Alto Impacto",
        tagline: "Qualidade de software sênior com precificação de modelo júnior",
        description:
            "Como empresa júnior sem fins lucrativos, revertemos todo o faturamento em capacitação técnica contínua. Isso significa que você contrata soluções digitais completas por uma fração do investimento cobrado por agências tradicionais.",
    },
    {
        icon: Cpu,
        title: "Tecnologia & Inovação Constante",
        tagline: "Desenvolvimento com as stacks mais modernas do mercado global",
        description:
            "Nossos membros são estudantes imersos diariamente em pesquisa e novas tecnologias. Construímos aplicações com React, Next.js, TypeScript, Node.js e Inteligência Artificial, sem o peso de código legado de antigas software houses.",
    },
    {
        icon: HeartHandshake,
        title: "Atendimento Consultivo & Ágil",
        tagline: "Uma equipe dedicada diretamente ao sucesso da sua entrega",
        description:
            "Garantimos transparência com sprints semanais e alinhamentos constantes. Você dialoga diretamente com os desenvolvedores e designers que constroem a sua solução, eliminando ruídos de comunicação.",
    },
    {
        icon: GraduationCap,
        title: "Respaldo Acadêmico de Mestres e Doutores",
        tagline: "Projetos orientados e auditados por professores especialistas",
        description:
            "Cada arquitetura de software e linha de código conta com a validação de professores especialistas do Instituto Federal de São Paulo (IFSP), garantindo conformidade com as melhores práticas de engenharia.",
    },
];

const ValueSectionEditorial = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <section id="diferencial" className="py-24 md:py-36 bg-white text-zinc-950 relative border-b border-zinc-200">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
                    
                    {/* Left Column - Sticky Info (FIAP High-Contrast Style with EJ Color Accents) */}
                    <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 mb-8 lg:mb-0">
                        <div className="space-y-6">
                            <span className="inline-block text-[11px] font-mono tracking-[0.25em] text-[#0357FF] uppercase border border-[#0357FF]/30 px-3.5 py-1.5 rounded-full bg-[#0357FF]/5 font-semibold">
                                CONFIANÇA & METODOLOGIA // 01
                            </span>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase leading-[1.02] tracking-tight text-zinc-950">
                                Por que nos escolher como seu parceiro de{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64]">
                                    tecnologia?
                                </span>
                            </h2>
                            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md font-normal">
                                Redefinimos a experiência de contratação de software unindo o dinamismo e a dedicação universitária à seriedade e qualidade sênior.
                            </p>

                            <div className="pt-2">
                                <a 
                                    href="#sobre" 
                                    className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase font-semibold text-[#0357FF] hover:text-[#0357FF]/80 transition-colors"
                                >
                                    Conheça nossa história
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - High Contrast Interactive List */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col border-t border-zinc-200">
                        {values.map((item, i) => {
                            const isHovered = hoveredIndex === i;
                            return (
                                <div
                                    key={item.title}
                                    className={`border-b border-zinc-200 relative cursor-pointer py-7 md:py-9 transition-colors duration-200 ${
                                        isHovered ? "bg-zinc-50/80" : "hover:bg-zinc-50/40"
                                    }`}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onClick={() =>
                                        setHoveredIndex(
                                            hoveredIndex === i ? null : i,
                                        )
                                    }
                                >
                                    <div className="px-4 sm:px-6 flex items-start justify-between">
                                        <div className="flex gap-4 sm:gap-6 items-start">
                                            {/* Number indicator */}
                                            <span className={`font-mono text-sm mt-1 transition-colors duration-200 ${isHovered ? "text-[#0357FF] font-bold" : "text-zinc-400"}`}>
                                                (0{i + 1})
                                            </span>

                                            {/* Title & Tagline */}
                                            <div>
                                                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-zinc-950">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                                                    {item.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Icon interaction with EJ gradient on active */}
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                                            isHovered 
                                                ? "bg-gradient-to-r from-[#0357FF] to-[#18EF64] text-white border-transparent shadow-[0_0_12px_rgba(3,87,255,0.3)]" 
                                                : "border-zinc-300 text-zinc-500"
                                        }`}>
                                            {isHovered ? <Minus size={14} /> : <Plus size={14} />}
                                        </div>
                                    </div>

                                    {/* Expandable description panel */}
                                    <AnimatePresence initial={false}>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: "1rem" }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden px-4 sm:px-6 pl-12 sm:pl-16 pr-8"
                                            >
                                                <div className="flex flex-col md:flex-row gap-5 items-start md:items-center pt-2">
                                                    <div className="p-3 bg-gradient-to-br from-[#0357FF]/10 to-[#18EF64]/10 border border-[#0357FF]/20 text-[#0357FF] rounded-lg hidden md:flex">
                                                        <item.icon size={20} />
                                                    </div>
                                                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueSectionEditorial;
