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
        description: "Confiamos uns nos outros para que tenham confiança em nós.",
    },
    {
        id: "03",
        sys: "VAL-NI",
        prev: "U",
        prefix: "NI",
        suffix: "ão",
        icon: Users,
        description: "Trabalhamos em equipe e com colaboração para alcançarmos objetivos comuns.",
    },
    {
        id: "04",
        sys: "VAL-TECH",
        prev: "",
        prefix: "TECH",
        suffix: "nologia",
        icon: Cpu,
        description: "Utilizamos as melhores e mais modernas tecnologias do mercado, a fim de entregar o melhor produto final.",
    },
];

export const MVVSectionIndustrial = () => {
    return (
        <section id="identidade" className="py-24 md:py-32 bg-background relative overflow-hidden border-y border-border/40">
            {/* Fine tech grid background line */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Header Industrial */}
                <div className="border-b border-border/40 pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="text-[10px] font-mono text-accent mb-3 tracking-[0.3em] uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            [ DIRETRIZES E ESSÊNCIA // INFINITECH JR ]
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                            Conheça a <span className="text-gradient">Infinitech Jr</span>
                        </h2>
                    </div>
                    <div className="md:max-w-xs font-mono text-xs text-muted-foreground leading-relaxed border-l border-border/40 pl-4">
                        Somos movidos por propósitos claros que guiam cada linha de código que escrevemos e cada projeto que entregamos.
                    </div>
                </div>

                {/* Grid Missão e Visão (Industrial Table) */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border/40 mb-16">
                    {identityItems.map((item) => (
                        <div
                            key={item.id}
                            className="border-r border-b border-border/40 p-8 md:p-12 relative overflow-hidden group hover:bg-secondary/15 transition-all duration-300"
                        >
                            {/* Technical Corner Marking */}
                            <div className="absolute top-3 right-3 font-mono text-[9px] text-muted-foreground/40 group-hover:text-accent transition-colors">
                                [{item.sys}]
                            </div>

                            {/* Background Tag Watermark */}
                            <div className="absolute -bottom-6 -right-2 font-mono font-bold text-[80px] md:text-[110px] text-border/20 select-none pointer-events-none group-hover:text-primary/5 transition-all duration-300">
                                {item.id}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="w-10 h-10 rounded border border-border/60 bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors">
                                    <item.icon size={20} />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-display font-bold text-2xl tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seção "Seu problema é meu problema" em formato Blueprint / Industrial */}
                <div className="border border-border/40 bg-secondary/5 relative overflow-hidden mb-20 p-8 md:p-12">
                    <div className="absolute top-3 right-4 font-mono text-[9px] text-muted-foreground/40">
                        [ CORE-PHILOSOPHY // LEMA-01 ]
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="text-[10px] font-mono text-primary tracking-[0.25em] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                [ CULTURA DE TRABALHO ]
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                                Seu problema é{" "}
                                <span className="text-gradient">
                                    meu problema.
                                </span>
                            </h3>
                            <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed">
                                <p>
                                    O principal lema da Infinitech reflete nossa valorização pelo trabalho em equipe e colaboração. Acreditamos que time unido alcança seus objetivos em comum e também transforma a forma como entregamos soluções aos nossos clientes.
                                </p>
                                <p className="border-l-2 border-primary/40 pl-4 italic text-foreground/90 font-mono text-xs">
                                    Cada valor que cultivamos representa um pilar fundamental da nossa cultura e define como operamos, inovamos e crescemos juntos como uma empresa júnior.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-center p-4 border border-border/60 bg-background/50 rounded-lg group"
                        >
                            <div className="absolute top-2 left-2 font-mono text-[8px] text-muted-foreground/50">
                                + ASSET-REF: MVV_IMG
                            </div>
                            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-accent/70">
                                [ RENDERED_VIEW ]
                            </div>
                            <div className="p-2 w-full bg-gradient-to-b from-[rgba(39,179,255,0.80)] to-[rgba(51,245,255,0.80)] rounded relative">
                                <img
                                    className="translate-x-2 -translate-y-2 rounded shadow-xl transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                                    src={MVVImg}
                                    alt="Seu problema é meu problema"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Header de Valores (Industrial) */}
                <div className="border-b border-border/40 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="text-[10px] font-mono text-accent mb-2 tracking-[0.3em] uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            [ PILARES CULTURAIS // ACRÓSTICO ]
                        </div>
                        <h3 className="text-3xl md:text-5xl font-display font-bold">
                            Nossos <span className="text-gradient">Valores</span>
                        </h3>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest border-l border-border/40 pl-3">
                        [ ARCHITECTURE OF VALUES ]
                    </div>
                </div>

                {/* Grid de Valores (Industrial Table 4-col) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border/40">
                    {values.map((item) => (
                        <div
                            key={item.sys}
                            className="border-r border-b border-border/40 p-6 md:p-8 relative overflow-hidden group hover:bg-secondary/15 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Technical Tag */}
                            <div className="absolute top-3 right-3 font-mono text-[9px] text-muted-foreground/40 group-hover:text-primary transition-colors">
                                [{item.sys}]
                            </div>

                            {/* Background Acrostic Lettering */}
                            <div className="absolute -bottom-6 -right-2 font-mono font-bold text-[70px] md:text-[90px] text-border/15 select-none pointer-events-none group-hover:text-primary/5 transition-all duration-300">
                                {item.prefix}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="w-10 h-10 rounded border border-border/60 bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors">
                                    <item.icon size={20} />
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-display font-bold text-xl uppercase tracking-wide">
                                        {item.prev}
                                        <span className="text-primary font-mono">{item.prefix}</span>
                                        {item.suffix}
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MVVSectionIndustrial;
