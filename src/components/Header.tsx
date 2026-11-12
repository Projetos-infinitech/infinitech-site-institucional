import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoWhite from "@/assets/nova_logo_branca.svg";

const navLinks = [
    { label: "Diferenciais", href: "#diferencial" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Cultura", href: "#cultura" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
];

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
                scrolled
                    ? "bg-black/85 backdrop-blur-xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.5)] py-2 px-5 sm:px-6"
                    : "bg-black/70 backdrop-blur-lg border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] py-2.5 px-6"
            }`}>
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <a
                        href="#inicio"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        <img 
                            src={LogoWhite} 
                            alt="Infinitech Jr" 
                            className="h-8 sm:h-9 w-auto object-contain" 
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button with EJ Gradient */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button 
                            asChild 
                            size="sm"
                            className="bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64] text-black hover:opacity-95 font-display font-bold text-xs tracking-wide uppercase px-4 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(88,210,255,0.3)]"
                        >
                            <a href="#contato" className="flex items-center gap-1.5">
                                Fale Conosco
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </Button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Abrir menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto fixed top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl z-50 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-white py-2 border-b border-white/10"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-2">
                                <Button 
                                    asChild 
                                    className="w-full bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64] text-black hover:opacity-95 font-display font-bold text-sm py-5 rounded-xl shadow-[0_0_20px_rgba(88,210,255,0.3)]"
                                >
                                    <a href="#contato" onClick={() => setMobileOpen(false)}>
                                        Fale Conosco
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
