'use client'

import React, { useState, useEffect } from 'react'
import SimpleThemeToggle from './SimpleThemeToggle'

const navItems = [
    { name: 'Careers', href: '#careers' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'industries', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
]

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    return (
        <nav className={`fixed w-full z-50 transition-all duration-200 ${isScrolled
            ? 'bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-md border-b border-[#d0d7de] dark:border-[#30363d]'
            : 'bg-transparent'
            }`}>
            <div className="container-max">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}
                            className="flex items-center space-x-3 group"
                        >
                            <img 
                                src="/images/codriva-logo.svg" 
                                alt="Codriva Logo" 
                                className="w-40 h-40 object-contain group-hover:scale-105 transition-all duration-300"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                                className="nav-link rounded-md hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-3">
                        <SimpleThemeToggle />
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="btn-primary"
                        >
                            Contact Us
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 rounded-md text-[#24292f] dark:text-[#f0f6fc] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-[#d0d7de] dark:border-[#30363d] bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                                    className="block px-3 py-2 text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] rounded-md"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation