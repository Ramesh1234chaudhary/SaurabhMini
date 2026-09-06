import { About } from "@/components/sections/about"
import { Blog } from "@/components/sections/blog"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Judgment } from "@/components/sections/judgment"
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
            <Blog />
            <Judgment />
            <Contact />
            <FloatingWhatsApp />
            <EnvironmentInfo />
        </main>
    )
} 