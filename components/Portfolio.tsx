'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and analytics dashboard.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'web',
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        description: 'A secure mobile banking application with biometric authentication, real-time transactions, and financial insights.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80',
        tags: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
        category: 'mobile',
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        id: 3,
        title: 'AI-Powered Analytics',
        description: 'Machine learning platform that analyzes business data to provide actionable insights and predictions.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80',
        tags: ['Python', 'TensorFlow', 'Docker', 'Kubernetes'],
        category: 'ai',
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        id: 4,
        title: 'SaaS Dashboard',
        description: 'A comprehensive dashboard for managing SaaS operations with real-time monitoring and user management.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format&q=80',
        tags: ['Vue.js', 'Express', 'Redis', 'Docker'],
        category: 'web',
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        id: 5,
        title: 'IoT Monitoring System',
        description: 'Real-time monitoring system for IoT devices with data visualization and alert management.',
        image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop&auto=format&q=80',
        tags: ['React', 'Python', 'MQTT', 'InfluxDB'],
        category: 'iot',
        github: 'https://github.com',
        live: 'https://example.com'
    },
    {
        id: 6,
        title: 'Blockchain Voting',
        description: 'Secure voting platform built on blockchain technology ensuring transparency and immutability.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&auto=format&q=80',
        tags: ['Solidity', 'Web3', 'React', 'Ethereum'],
        category: 'blockchain',
        github: 'https://github.com',
        live: 'https://example.com'
    }
]

const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'iot', name: 'IoT' },
    { id: 'blockchain', name: 'Blockchain' }
]

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeCategory))
        }
    }, [activeCategory])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ctx = gsap.context(() => {
                // Enhanced title animation with dramatic effect
                gsap.fromTo(titleRef.current, {
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                    rotationX: 45
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 1.2,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Enhanced project cards with 3D effect and stagger
                gsap.fromTo('.project-card', {
                    opacity: 0,
                    y: 60,
                    scale: 0.8,
                    rotationY: 20
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: {
                        amount: 0.6,
                        from: "start"
                    },
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Add hover animations to project cards
                gsap.utils.toArray('.project-card').forEach((card: any) => {
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.03,
                            y: -10,
                            rotationY: 5,
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    })

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            scale: 1,
                            y: 0,
                            rotationY: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    })
                })

                // Text reveal animation
                gsap.utils.toArray('.portfolio-text').forEach((text: any) => {
                    gsap.fromTo(text, {
                        opacity: 0,
                        y: 30,
                        scale: 0.9
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: text,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    })
                })

            }, sectionRef)

            return () => ctx.revert()
        }
    }, [filteredProjects])

    return (
        <section id="portfolio" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Blue Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/30"></div>

            {/* Background Image */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format&q=80")`
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-16 right-16 w-20 h-20 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-16 left-16 w-28 h-28 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="container-max relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">Portfolio</span>
                    </h2>
                    <p className="portfolio-text text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto mb-8">
                        Explore our recent projects and see how we've helped businesses
                        transform their digital presence.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeCategory === category.id
                                    ? 'bg-[#0969da] text-white dark:bg-[#58a6ff] dark:text-[#0d1117]'
                                    : 'text-[#656d76] dark:text-[#8b949e] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card card hover-card overflow-hidden">
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-md hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-md hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-[#656d76] dark:text-[#8b949e] mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge badge-primary text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="card p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-4">
                            Have a project in mind?
                        </h3>
                        <p className="text-[#656d76] dark:text-[#8b949e] mb-6">
                            Let's work together to create something amazing.
                            We're always excited to take on new challenges.
                        </p>
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary"
                        >
                            Start Your Project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio