"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
// import { useTheme } from "@/contexts/ThemeContext" // Removido temporariamente
import { ThemeToggle } from "@/components/ui/theme"
import { LAWYER_CONFIG } from "@/config"

const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Legal View", href: "#services" },
    { label: "Type Of Cases", href: "#typeofCases" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Judgment", href: "#judgment" },
    { label: "Contact Us", href: "#contact" }
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")
    // const { theme } = useTheme() // Removido temporariamente até implementação do tema

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/98 backdrop-blur-xl border-b border-border-secondary shadow-2xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center space-x-2 sm:space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 overflow-hidden rounded-lg shadow-xl">
                            <Image
                                src="/logo-header.png"
                                alt={`${LAWYER_CONFIG.lawyer.name} - Logo`}
                                width={64}
                                height={64}
                                className="h-full w-full object-contain"
                                priority
                            />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary">{LAWYER_CONFIG.lawyer.name}</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
                        {navigationItems.map((item) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveNav(item.href)}
                                className={`border-b-[3px] px-1 pb-1 text-sm lg:text-base text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium ${activeNav === item.href ? "border-secondary-500 text-text-primary" : "border-transparent"}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <ThemeToggle />
                        <motion.button
                            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-border-secondary bg-background-primary/98 backdrop-blur-xl"
                        >
                            <div className="py-3 space-y-1">
                                {navigationItems.map((item) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        className={`block border-b-[3px] px-4 py-2 text-base font-medium text-text-secondary hover:text-text-primary transition-colors ${activeNav === item.href ? "border-secondary-500 text-text-primary" : "border-transparent"}`}
                                        whileHover={{ x: 10 }}
                                        onClick={() => {
                                            setActiveNav(item.href)
                                            setIsMenuOpen(false)
                                        }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
} 