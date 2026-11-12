import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MapPin, Mail } from "lucide-react";
import LogoWhite from "@/assets/nova_logo_branca.svg";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#050507] text-white">
            <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Col 1 - Institutional Info (5 cols) */}
                    <div className="md:col-span-5 space-y-6">
                        <a href="#" className="inline-block">
                            <img 
                                src={LogoWhite} 
                                alt="Infinitech Jr Logo" 
                                className="h-10 w-auto object-contain"
                            />
                        </a>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
                            A Infinitech Jr é a Empresa Júnior de Tecnologia do Instituto Federal de São Paulo (IFSP - Salto), especialista em desenvolvimento de sistemas sob medida, sites corporativos e landing pages de alta conversão.
                        </p>
                        <p className="text-xs text-zinc-400 font-mono flex items-center gap-2 pt-1">
                            <Mail size={14} className="text-zinc-400" />
                            <a href="mailto:comercial@infinitech.dev.br" className="hover:text-white transition-colors">
                                comercial@infinitech.dev.br
                            </a>
                        </p>
                        
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://www.linkedin.com/company/infinitech-jr/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/infinitech_jr/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a
                                href="https://github.com/Projetos-infinitech/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                            >
                                <FaGithub size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2 - Quick Links (3 cols) */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300">
                            Navegação
                        </h4>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                                <a href="#inicio" className="hover:text-white transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#diferencial" className="hover:text-white transition-colors">
                                    Diferenciais
                                </a>
                            </li>
                            <li>
                                <a href="#sobre" className="hover:text-white transition-colors">
                                    Sobre a Infinitech
                                </a>
                            </li>
                            <li>
                                <a href="#cultura" className="hover:text-white transition-colors">
                                    Cultura & Valores
                                </a>
                            </li>
                            <li>
                                <a href="#servicos" className="hover:text-white transition-colors">
                                    Soluções & Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#contato" className="hover:text-white transition-colors">
                                    Contato & Orçamento
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3 - Campus & Credentials (4 cols) */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300">
                            Sede Acadêmica
                        </h4>
                        <div className="text-sm text-zinc-400 space-y-2 leading-relaxed">
                            <p className="text-white font-medium">
                                Instituto Federal de São Paulo (IFSP)
                            </p>
                            <p className="flex items-start gap-2">
                                <MapPin size={16} className="text-zinc-500 mt-1 shrink-0" />
                                <span>
                                    Câmpus Salto • Av. dos Três Poderes, nº 375<br />
                                    Residencial Central Parque — Salto, SP
                                </span>
                            </p>
                        </div>

                        <div className="pt-3 flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-400">
                                Brasil Júnior
                            </span>
                            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-400">
                                Núcleo Campinas
                            </span>
                            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-400">
                                FEJESP
                            </span>
                            <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-400">
                                Ciência da Computação
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
                    <p>
                        © {new Date().getFullYear()} Infinitech Jr. Todos os direitos reservados.
                    </p>
                    <p className="flex items-center gap-1">
                        Construído com excelência e tecnologia de ponta
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
