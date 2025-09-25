'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const infoRef = useRef<HTMLDivElement>(null)

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

                // Enhanced form animation with 3D effect
                gsap.fromTo(formRef.current, {
                    opacity: 0,
                    x: -80,
                    scale: 0.9,
                    rotationY: 15
                }, {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Enhanced info section animation with 3D effect
                gsap.fromTo(infoRef.current, {
                    opacity: 0,
                    x: 80,
                    scale: 0.9,
                    rotationY: -15
                }, {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })

                // Text reveal animation
                gsap.utils.toArray('.contact-text').forEach((text: any) => {
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

                // Form input focus animations
                gsap.utils.toArray('.form-input').forEach((input: any) => {
                    input.addEventListener('focus', () => {
                        gsap.to(input, {
                            scale: 1.02,
                            duration: 0.2,
                            ease: 'power2.out'
                        })
                    })

                    input.addEventListener('blur', () => {
                        gsap.to(input, {
                            scale: 1,
                            duration: 0.2,
                            ease: 'power2.out'
                        })
                    })
                })

            }, sectionRef)

            return () => ctx.revert()
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
            setSubmitStatus('success')
            setFormData({ name: '', email: '', company: '', message: '' })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'hello@codriva.com',
            href: 'mailto:hello@codriva.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'San Francisco, CA',
            href: '#'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: 'linkedin.com/company/codriva',
            href: 'https://linkedin.com/company/codriva'
        }
    ]

    return (
        <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Blue Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/40"></div>

            {/* Background Image */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&auto=format&q=80")`
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="container-max relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">Touch</span>
                    </h2>
                    <p className="contact-text text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto">
                        Ready to start your next project? We'd love to hear from you.
                        Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div ref={formRef}>
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
                                Send us a message
                            </h3>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                                    <div className="flex">
                                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            Thank you! Your message has been sent successfully.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                                    <div className="flex">
                                        <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-red-800 dark:text-red-200 text-sm">
                                            Sorry, there was an error sending your message. Please try again.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="form-input"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="form-input"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="Your company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="form-input resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div ref={infoRef}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
                                    Contact Information
                                </h3>
                                <p className="text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
                                    We're here to help and answer any question you might have.
                                    We look forward to hearing from you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center p-4 rounded-lg hover:bg-white dark:hover:bg-[#161b22] transition-colors duration-200 group"
                                    >
                                        <div className="text-2xl mr-4">{info.icon}</div>
                                        <div>
                                            <div className="font-medium text-[#24292f] dark:text-[#f0f6fc] group-hover:text-[#0969da] dark:group-hover:text-[#58a6ff] transition-colors duration-200">
                                                {info.title}
                                            </div>
                                            <div className="text-[#656d76] dark:text-[#8b949e] text-sm">
                                                {info.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="card p-6">
                                <h4 className="font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-3">
                                    Business Hours
                                </h4>
                                <div className="space-y-2 text-sm text-[#656d76] dark:text-[#8b949e]">
                                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                                    <div>Saturday: 10:00 AM - 4:00 PM</div>
                                    <div>Sunday: Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact