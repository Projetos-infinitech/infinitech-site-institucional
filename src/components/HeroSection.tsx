import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/hero-img-with-blur.png";
const HeroSection = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden  "
            // style={{ backgroundImage: `url(${HeroImage})` }}
        >
            {/* Subtle gradient background */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat overflow-hidden 
             before:absolute before:inset-0 before:z-0
             before:bg-[#2727B5]/50 
             dark:before:bg-[#060636]/50"
                style={{
                    backgroundImage: `url(${HeroImage}), linear-gradient(lightgray, lightgray)`,
                }}
            ></div>
            {/* <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat overflow-hidden"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                }}
            ></div> */}

            {/* Decorative shapes */}
            <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative container mx-auto px-4 text-center max-w-4xl pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block text-sm font-display font-semibold text-accent mb-6 tracking-widest uppercase color-[#C2FFDE]">
                        EMPRESA JÚNIOR DE TECNOLOGIA DO IFSP - SALTO
                    </span>

                    <h1 className="font-display text-center mb-6">
                        {/* 1º Span */}
                        <span className="block text-white text-[18px] md:text-[24px] lg:text-[28px] font-normal leading-[84%] tracking-[-1px] lg:tracking-[-1.74px] [text-shadow:3px_3px_1.8px_rgba(0,0,0,0.25)] mt-2 mb-3 lg:mt-3 lg:mb-5">
                            Especialistas em desenvolvimento de sites, sistemas e landing pages
                        </span>

                        {/* 2º Span - Gradiente e Uppercase */}
                        <span className="block text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)] text-[34px] md:text-[62px] lg:text-[96px] font-bold leading-[85%] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-7px] uppercase mb-2 lg:mb-4">
                            SITES, SISTEMAS & LANDING PAGES
                        </span>

                        {/* 3º Span - Uppercase */}
                        <span className="block text-white text-[18px] md:text-[28px] lg:text-[36px] font-bold leading-[115%] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.5px] uppercase">
                            A SUA EMPRESA JÚNIOR DE TECNOLOGIA
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
                        Somos a <strong className="text-white">Empresa Júnior</strong> do IFSP. Entregamos excelência em <strong className="text-white">desenvolvimento de sites</strong>, <strong className="text-white">desenvolvimento de sistemas sob medida</strong> e <strong className="text-white">desenvolvimento de landing pages</strong> de alta performance.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="hero" size="lg" asChild>
                            <a href="#contato">
                                Solicitar Orçamento
                                <ArrowRight className="ml-2" size={18} />
                            </a>
                        </Button>
                        <Button
                            variant="hero-outline"
                            size="lg"
                            className="bg-muted hover:bg-muted/80"
                            asChild
                        >
                            <a href="#processo">Como Funciona</a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
