import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoWhite from "@/assets/nova_logo_branca.svg";

interface PreloaderProps {
    onComplete?: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Fast yet dramatic progress increment (around 1.5s total)
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const remaining = 100 - prev;
                const increment = Math.max(1, Math.floor(Math.random() * (remaining > 20 ? 8 : 4) + 1));
                const next = prev + increment;
                return next >= 100 ? 100 : next;
            });
        }, 32);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const timeout = setTimeout(() => {
                setIsVisible(false);
                if (onComplete) onComplete();
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [progress, onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 0.85,
                            ease: [0.76, 0, 0.24, 1],
                        },
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black select-none overflow-hidden"
                >
                    {/* Background Subtle Tech Grid */}
                    <div 
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        }}
                    />

                    {/* Top Status Bar */}
                    <div className="absolute top-8 left-8 right-8 flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#18EF64] animate-pulse shadow-[0_0_8px_#18EF64]" />
                            <span className="text-zinc-400">IFSP SALTO // NÚCLEO CAMPINAS</span>
                        </span>
                        <span className="hidden sm:inline-block text-zinc-500">INFINITECH JR ARCHITECTURE</span>
                    </div>

                    {/* Central Ring & Logo container */}
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
                            
                            {/* Rotating SVG Ring with EJ Brand Gradient */}
                            <svg 
                                className="absolute inset-0 w-full h-full animate-[spin_3.5s_linear_infinite]"
                                viewBox="0 0 200 200"
                            >
                                <defs>
                                    <linearGradient id="ejRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0357FF" stopOpacity="0.95" />
                                        <stop offset="50%" stopColor="#58D2FF" stopOpacity="0.9" />
                                        <stop offset="100%" stopColor="#18EF64" stopOpacity="0.8" />
                                    </linearGradient>
                                </defs>
                                {/* Static outer track */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="90"
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.08)"
                                    strokeWidth="1.5"
                                />
                                {/* Dynamic rotating arc with EJ gradient */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="90"
                                    fill="none"
                                    stroke="url(#ejRingGrad)"
                                    strokeWidth="2.5"
                                    strokeDasharray="180 380"
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Counter-rotating secondary hairline accent */}
                            <svg 
                                className="absolute inset-0 w-full h-full animate-[spin_7s_linear_infinite_reverse] opacity-50"
                                viewBox="0 0 200 200"
                            >
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="none"
                                    stroke="#58D2FF"
                                    strokeWidth="1"
                                    strokeDasharray="50 120"
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Centered White Logo */}
                            <motion.div 
                                className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center p-2"
                                animate={{
                                    scale: [0.97, 1.02, 0.97],
                                    opacity: [0.9, 1, 0.9],
                                }}
                                transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img
                                    src={LogoWhite}
                                    alt="Infinitech Jr Logo"
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(88,210,255,0.35)]"
                                />
                            </motion.div>
                        </div>

                        {/* Progress percentage & status */}
                        <div className="mt-8 text-center space-y-2">
                            <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-1">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#58D2FF]">
                                    {progress}
                                </span>
                                <span className="text-[#18EF64] text-xl font-normal">%</span>
                            </div>

                            <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
                                {progress < 100 ? "Carregando experiência..." : "Sistema inicializado"}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase border-t border-zinc-900 pt-4">
                        <span>EMPRESA JÚNIOR DE TI // IFSP SALTO</span>
                        <span className="hidden sm:inline">SITES • SISTEMAS • LANDING PAGES</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
