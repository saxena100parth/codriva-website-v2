'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const features = [
    {
        icon: '🚀',
        title: 'Innovation',
        description: 'Cutting-edge solutions that push the boundaries of what\'s possible'
    },
    {
        icon: '🔒',
        title: 'Security',
        description: 'Enterprise-grade security built into every solution'
    },
    {
        icon: '⚡',
        title: 'Performance',
        description: 'Lightning-fast applications optimized for scale'
    },
    {
        icon: '🎯',
        title: 'Precision',
        description: 'Pixel-perfect designs and flawless execution'
    }
]

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.feature-card');
            
            // Function to animate feature cards in with stagger
            const showFeatureCards = () => {
                gsap.fromTo(cards, 
                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.95,
                        rotationX: 5
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotationX: 0,
                        duration: 0.8,
                        stagger: {
                            amount: 0.4,
                            from: "start"
                        },
                        ease: "power3.out"
                    }
                );
            };

            // Immediately show cards when component mounts
            showFeatureCards();

            // ScrollTrigger for maintaining feature cards visibility
            const featuresTrigger = ScrollTrigger.create({
                trigger: ".card",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                onEnter: showFeatureCards,
                onLeave: () => {
                    gsap.to(cards, {
                        opacity: 0,
                        y: -30,
                        scale: 0.95,
                        stagger: {
                            amount: 0.2,
                            from: "end"
                        },
                        duration: 0.5
                    });
                }
            });

            // Setup other animations with ScrollTrigger
            const triggers = [
                ScrollTrigger.create({
                    trigger: titleRef.current,
                    start: 'top 85%',
                    onEnter: () => {
                        gsap.to(titleRef.current, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            ease: 'power2.out'
                        });
                    },
                    onLeave: () => {
                        gsap.to(titleRef.current, {
                            opacity: 0,
                            y: -50,
                            scale: 0.8,
                            duration: 0.4,
                            clearProps: "all"
                        });
                    }
                }),
                ScrollTrigger.create({
                    trigger: contentRef.current,
                    start: 'top 80%',
                    onEnter: () => {
                        gsap.to(contentRef.current, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            ease: 'power2.out'
                        });
                    },
                    onLeave: () => {
                        gsap.to(contentRef.current, {
                            opacity: 0,
                            y: -50,
                            scale: 0.8,
                            duration: 0.4,
                            clearProps: "all"
                        });
                    }
                })
            ];

            // Handle feature card hover effects
            cards.forEach((card: any) => {
                const hoverTl = gsap.timeline({ paused: true });
                
                hoverTl
                    .to(card, {
                        scale: 1.05,
                        y: -5,
                        duration: 0.2,
                        ease: 'power2.out'
                    });

                card.addEventListener('mouseenter', () => hoverTl.play());
                card.addEventListener('mouseleave', () => hoverTl.reverse());
                
                // Store timeline for cleanup
                card._hoverTl = hoverTl;
            });

            // Cleanup function
            return () => {
                // Kill all ScrollTriggers
                [featuresTrigger, ...triggers].forEach(trigger => {
                    if (trigger) trigger.kill();
                });

                // Kill all hover animations and remove listeners
                cards.forEach((card: any) => {
                    if (card._hoverTl) {
                        card._hoverTl.kill();
                    }
                });

                // Reset all animations immediately
                gsap.set([
                    titleRef.current,
                    contentRef.current,
                    '.feature-card',
                    '.about-text'
                ], {
                    clearProps: "all"
                });

                // Kill any remaining tweens
                gsap.killTweensOf([
                    titleRef.current,
                    contentRef.current,
                    '.feature-card',
                    '.about-text'
                ]);
            };
        }, sectionRef);

        // Return cleanup function
        return () => {
            ctx.revert();
        };
    }, [])

    return (
        <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Blue Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/30"></div>

            {/* Background Image */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format&q=80")`
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="container-max relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">Codriva</span>
                    </h2>
                    <p className="about-text text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto">
                        We're a trusted technology partner specializing in custom software development,
                        digital transformation, and innovative solutions that drive business growth.
                    </p>
                </div>

                {/* Main Content */}
                <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <h3 className="text-3xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6">
                            Crafting digital excellence
                        </h3>
                        <p className="about-text text-lg text-[#656d76] dark:text-[#8b949e] mb-6 leading-relaxed">
                            At Codriva, we believe in the power of technology to transform businesses.
                            Our name combines "Code" with "Riva" (flow), representing our commitment
                            to creating seamless, flowing digital solutions.
                        </p>
                        <p className="about-text text-lg text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
                            We work with startups and enterprises alike, delivering custom software
                            solutions that drive growth, efficiency, and innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary"
                            >
                                Our Services
                            </button>
                            <button
                                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-outline"
                            >
                                View Portfolio
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="card p-8">
                            <div className="grid grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div 
                                        key={index} 
                                        className="feature-card text-center p-6 hover-card rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg dark:shadow-slate-800/30"
                                        style={{ opacity: 0 }} // Set initial opacity
                                    >
                                        <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
                                        <h4 className="font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-[#656d76] dark:text-[#8b949e]">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div ref={featuresRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#0969da] dark:text-[#58a6ff] mb-2">100+</div>
                        <div className="text-[#656d76] dark:text-[#8b949e]">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#0969da] dark:text-[#58a6ff] mb-2">50+</div>
                        <div className="text-[#656d76] dark:text-[#8b949e]">Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#0969da] dark:text-[#58a6ff] mb-2">5+</div>
                        <div className="text-[#656d76] dark:text-[#8b949e]">Years</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#0969da] dark:text-[#58a6ff] mb-2">24/7</div>
                        <div className="text-[#656d76] dark:text-[#8b949e]">Support</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About