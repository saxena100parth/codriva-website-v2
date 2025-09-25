'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ctx = gsap.context(() => {
                gsap.fromTo('.footer-content', {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })
            }, footerRef)

            return () => ctx.revert()
        }
    }, [])

    const footerLinks = {
        Company: [
            { name: 'About', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Contact', href: '#contact' }
        ],
        Services: [
            { name: 'Web Development', href: '#' },
            { name: 'Mobile Apps', href: '#' },
            { name: 'UI/UX Design', href: '#' },
            { name: 'Cloud Solutions', href: '#' }
        ],
        Resources: [
            { name: 'Blog', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'Support', href: '#' },
            { name: 'Privacy Policy', href: '#' }
        ],
        Connect: [
            { name: 'GitHub', href: 'https://github.com' },
            { name: 'LinkedIn', href: 'https://linkedin.com' },
            { name: 'Twitter', href: 'https://twitter.com' },
            { name: 'Email', href: 'mailto:hello@codriva.com' }
        ]
    }

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer ref={footerRef} className="relative text-white overflow-hidden">
            {/* Blue Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>
            <div className="container-max relative z-10">
                <div className="footer-content py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg font-display">C</span>
                                </div>
                                <span className="text-2xl font-bold font-display">Codriva</span>
                            </div>
                            <p className="text-[#8b949e] mb-6 leading-relaxed">
                                Your trusted technology partner. We deliver custom software solutions,
                                digital transformation services, and innovative technology consulting.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#8b949e] hover:text-white transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#8b949e] hover:text-white transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#8b949e] hover:text-white transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Footer Links */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="font-semibold text-white mb-4">{title}</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => {
                                                    if (link.href.startsWith('#')) {
                                                        e.preventDefault()
                                                        scrollToSection(link.href)
                                                    }
                                                }}
                                                className="text-[#8b949e] hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#30363d] py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-[#8b949e] text-sm mb-4 md:mb-0">
                            © 2024 Codriva. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-[#8b949e] hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-[#8b949e] hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-[#8b949e] hover:text-white transition-colors duration-200">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer