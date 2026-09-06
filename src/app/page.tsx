import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { TypeOfcases } from "@/components/sections/typeOfcases"
import { EnvironmentInfo } from "@/components/ui/environment-info"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
            <TypeOfcases />
            <About />
            <Contact />
            <FloatingWhatsApp />
            <EnvironmentInfo />
        </main>
    )
} 