import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DadosEmail, enviarEmail } from "@/lib/email";

const challenges: string[] = [
    "Desenvolvimento de Site",
    "Desenvolvimento de Sistema",
    "Desenvolvimento de Landing Page",
    "Site desatualizado ou lento",
    "Outro",
];

const ContactSection = () => {
    const { toast } = useToast();
    const [form, setForm] = useState<DadosEmail>({
        name: "",
        email: "",
        company: "",
        challenge: "",
        final_challenge: "",
    });

    const [otherSelected, setOtherSelected] = useState("");
    const [honeypot, setHoneypot] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Proteção contra spam (Honeypot)
        if (honeypot) {
            toast({
                title: "Mensagem enviada!",
                description: "Entraremos em contato em até 24h.",
            });
            return;
        }

        const isOtherInvalid =
            form.challenge === "Outro" && !form.final_challenge.trim();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.challenge ||
            isOtherInvalid
        ) {
            toast({
                title: "Preencha todos os campos obrigatórios",
                variant: "destructive",
            });
            return;
        }

        try {
            await enviarEmail(form);
            toast({
                title: "Mensagem enviada com sucesso!",
                description: "Nossa equipe entrará em contato em até 24 horas úteis.",
            });
        } catch (e) {
            toast({
                title: "Erro ao enviar e-mail: " + e,
                variant: "destructive",
            });
            return;
        }

        setForm({
            name: "",
            email: "",
            company: "",
            challenge: "",
            final_challenge: "",
        });
    };

    return (
        <section id="contato" className="py-24 md:py-36 bg-black text-white relative overflow-hidden border-b border-zinc-900">
            {/* Fine tech grid background line */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Ambient Brand Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#0357FF]/15 via-[#58D2FF]/10 to-[#18EF64]/15 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                
                {/* Header (FIAP Dark Architectural with EJ Colors) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#C2FFDE] uppercase border border-[#18EF64]/30 px-3.5 py-1.5 rounded-full bg-[#18EF64]/10 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#18EF64] animate-pulse" />
                        DIAGNÓSTICO & PROPOSTA // 05
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                        Vamos conversar sobre seu{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)]">
                            projeto?
                        </span>
                    </h2>

                    <p className="text-zinc-300 max-w-xl mx-auto text-base sm:text-lg font-normal leading-relaxed">
                        Preencha o formulário abaixo e receba um diagnóstico técnico preliminar e direcionamento de orçamento em até 24h.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-950/90 border border-white/10 rounded-2xl p-6 sm:p-10 md:p-12 space-y-6 shadow-2xl relative backdrop-blur-md"
                >
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-mono tracking-wider uppercase text-zinc-300 mb-2 block font-medium">
                                Nome Completo *
                            </label>
                            <Input
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                placeholder="Seu nome"
                                maxLength={100}
                                className="bg-black border-white/15 text-white placeholder:text-zinc-600 focus:border-[#58D2FF] focus:ring-0 rounded-lg h-12"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-mono tracking-wider uppercase text-zinc-300 mb-2 block font-medium">
                                E-mail *
                            </label>
                            <Input
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                placeholder="seu@email.com"
                                maxLength={255}
                                className="bg-black border-white/15 text-white placeholder:text-zinc-600 focus:border-[#58D2FF] focus:ring-0 rounded-lg h-12"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-mono tracking-wider uppercase text-zinc-300 mb-2 block font-medium">
                            Empresa
                        </label>
                        <Input
                            value={form.company}
                            onChange={(e) =>
                                setForm({ ...form, company: e.target.value })
                            }
                            placeholder="Nome da empresa (opcional)"
                            maxLength={100}
                            className="bg-black border-white/15 text-white placeholder:text-zinc-600 focus:border-[#58D2FF] focus:ring-0 rounded-lg h-12"
                        />
                    </div>

                    <div>
                        <label className="text-xs font-mono tracking-wider uppercase text-zinc-300 mb-3 block font-medium">
                            Qual seu principal desafio hoje? *
                        </label>
                        <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {challenges.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() =>
                                        setForm({ ...form, challenge: c })
                                    }
                                    className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-display tracking-tight transition-all duration-200 border ${
                                        form.challenge === c
                                            ? "bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64] text-black font-bold border-transparent shadow-[0_0_18px_rgba(88,210,255,0.35)]"
                                            : "bg-black/60 border-white/15 text-zinc-300 hover:border-[#58D2FF]/50 hover:text-white"
                                    }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>

                        {/* Campo exibido condicionalmente quando selecionar "Outro" */}
                        {form.challenge === "Outro" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4"
                            >
                                <Input
                                    value={form.final_challenge}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            final_challenge: e.target.value,
                                        })
                                    }
                                    placeholder="Descreva brevemente a sua necessidade..."
                                    maxLength={200}
                                    className="bg-black border-white/15 text-white placeholder:text-zinc-600 focus:border-[#58D2FF] focus:ring-0 rounded-lg h-12"
                                />
                            </motion.div>
                        )}
                    </div>

                    {/* Campo Honeypot invisível para captura de bots de spam */}
                    <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className="pt-2">
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-gradient-to-r from-[#0357FF] via-[#58D2FF] to-[#18EF64] text-black hover:opacity-95 font-display font-bold text-base py-6 rounded-lg transition-all shadow-[0_0_30px_rgba(88,210,255,0.35)] flex items-center justify-center gap-2 group"
                        >
                            Enviar Mensagem
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    <p className="text-[11px] font-mono text-zinc-500 text-center uppercase tracking-wider">
                        Não enviamos spam. Suas informações são protegidas pelo IFSP e Infinitech Jr.
                    </p>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactSection;
