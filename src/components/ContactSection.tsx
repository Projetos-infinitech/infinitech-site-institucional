import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DadosEmail, enviarEmail } from "@/lib/email";
const challenges: string[] = [
    "Site lento ou desatualizado",
    "Poucas vendas online",
    "Começando do zero",
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
    useEffect(() => {
        // Código executado quando 'otherSelected' mudar de valor
        console.log("O estado mudou para:", otherSelected);

        if (otherSelected) {
            // Executa a lógica de mudança do seu elemento
        }
    }, [otherSelected]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Proteção contra spam (Honeypot): bots preenchem campos ocultos automaticamente
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

        const finalChallenge =
            form.challenge === "Outro" ? form.final_challenge : form.challenge;

        try {
            await enviarEmail(form);

            toast({
                title: "Mensagem enviada!",
                description: "Entraremos em contato em até 24h.",
            });
        } catch (e) {
            toast({
                title: "Erro ao enviar Email: " + e,
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
        <section id="contato" className="section-padding">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
                        Contato
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
                        Vamos <span className="text-gradient">conversar?</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Receba um diagnóstico do seu negócio em até 24h.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-glass rounded-xl p-8 space-y-5"
                >
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-muted-foreground mb-1.5 block">
                                Nome *
                            </label>
                            <Input
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                placeholder="Seu nome"
                                maxLength={100}
                                className="bg-background/50 border-border"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-muted-foreground mb-1.5 block">
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
                                className="bg-background/50 border-border"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">
                            Empresa
                        </label>
                        <Input
                            value={form.company}
                            onChange={(e) =>
                                setForm({ ...form, company: e.target.value })
                            }
                            placeholder="Nome da empresa (opcional)"
                            maxLength={100}
                            className="bg-background/50 border-border"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                            Qual seu principal desafio hoje? *
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {challenges.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() =>
                                        setForm({ ...form, challenge: c })
                                    }
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                                        form.challenge === c
                                            ? "bg-primary/15 border-primary text-foreground"
                                            : "bg-background/30 border-border text-muted-foreground hover:border-primary/40"
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
                                className="mt-3"
                            >
                                <Input
                                    value={form.final_challenge}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            final_challenge: e.target.value,
                                        })
                                    }
                                    placeholder="Descreva brevemente o seu desafio..."
                                    maxLength={200}
                                    className="bg-background/50 border-border"
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

                    <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                    >
                        Enviar Mensagem
                        <Send className="ml-2" size={18} />
                    </Button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactSection;
