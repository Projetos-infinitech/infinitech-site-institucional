import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueSectionEditorial from "@/components/ValueSection_Editorial";
import AboutSection from "@/components/AboutSection";
import MVVSectionIndustrial from "@/components/MVVSection_Industrial";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="min-h-screen bg-black font-body selection:bg-white selection:text-black">
            {/* Dynamic FIAP-inspired 0% to 100% Preloader */}
            <Preloader onComplete={() => setLoaded(true)} />

            {/* Floating Glass Pill Header */}
            <Header />

            {/* [DARK #000000] Hero & Metrics Bar */}
            <HeroSection ready={loaded} />

            {/* [LIGHT #FFFFFF] Values & Differential Editorial Section */}
            <ValueSectionEditorial />

            {/* [LIGHT #F8F9FA] About & Institutional History */}
            <AboutSection />

            {/* [DARK #000000] Mission, Vision & Industrial Values */}
            <MVVSectionIndustrial />

            {/* [LIGHT #FFFFFF] Services & Solutions */}
            <ServicesSection />

            {/* [DARK #000000] Contact & Diagnostic Form */}
            <ContactSection />

            {/* [DARK #050507] Corporate Minimalist Footer */}
            <Footer />

            {/* WhatsApp Floating Contact Button */}
            <WhatsAppButton />
        </div>
    );
};

export default Index;
