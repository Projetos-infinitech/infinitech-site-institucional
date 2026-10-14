import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Col 1 */}
                    <div>
                        <a
                            href="#"
                            className="font-display text-xl font-bold tracking-tight"
                        >
                            <span className="text-gradient">Infinitech</span>
                            <span className="text-foreground">Jr</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
                            A Infinitech Jr é a Empresa Júnior de TI do IFSP
                            especialista em desenvolvimento de sites,
                            desenvolvimento de sistemas e desenvolvimento de
                            landing page.
                            <br />
                            comercial@infinitech.dev.br
                        </p>
                        <div className="flex gap-3 mt-4">
                            <a
                                href="https://www.linkedin.com/company/infinitech-jr/"
                                target="_blank"
                                aria-label="LinkedIn"
                                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/infinitech_jr/"
                                target="_blank"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a
                                href="https://github.com/Projetos-infinitech/"
                                target="_blank"
                                aria-label="GitHub"
                                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <FaGithub size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">
                            Links Rápidos
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#servicos"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#processo"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Processo
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cultura"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Cultura
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sobre"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contato"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Política de Privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">
                            Localização
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Instituto Federal de Educação, Ciência e Tecnologia
                            de São Paulo
                            <br />
                            IFSP Campus Salto
                            <br />
                            Avenida dos Três Poderes, n° 375
                            <br />
                            Residencial Central Parque
                            <br />
                            Salto, SP
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                                Empresa Júnior
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                                Desenvolvimento de Sites
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                                Desenvolvimento de Sistemas
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                                Desenvolvimento de Landing Page
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                                Brasil Júnior
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                                Núcleo Campinas
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} InfinitechJr. Todos os direitos
                    reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
