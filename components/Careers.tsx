'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const jobOpenings = [
    {
        title: 'Senior Frontend Developer',
        type: 'Full Time',
        location: 'Remote',
        experience: '5+ years',
        skills: ['React.js', 'TypeScript', 'Next.js', 'TailwindCSS'],
        description: 'Looking for an experienced frontend developer to build scalable web applications'
    },
    {
        title: 'Backend Engineer',
        type: 'Full Time',
        location: 'Hybrid',
        experience: '3+ years',
        skills: ['Node.js', 'Python', 'AWS', 'MongoDB'],
        description: 'Join us in building robust backend systems and microservices'
    },
    {
        title: 'UI/UX Designer',
        type: 'Full Time',
        location: 'Remote',
        experience: '4+ years',
        skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
        description: 'Create exceptional user experiences for our digital products'
    },
    {
        title: 'DevOps Engineer',
        type: 'Full Time',
        location: 'Remote',
        experience: '3+ years',
        skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
        description: 'Help us build and maintain scalable cloud infrastructure'
    }
]

const perks = [
    {
        icon: '🌟',
        title: 'Innovation First',
        description: 'Work on cutting-edge technologies and solve challenging problems'
    },
    {
        icon: '🌍',
        title: 'Remote Culture',
        description: 'Work from anywhere with our distributed team across the globe'
    },
    {
        icon: '📚',
        title: 'Learning & Growth',
        description: 'Dedicated budget for courses, conferences, and certifications'
    },
    {
        icon: '🎯',
        title: 'Work-Life Balance',
        description: 'Flexible hours and unlimited PTO policy'
    },
    {
        icon: '💪',
        title: 'Health Benefits',
        description: 'Comprehensive health, dental, and vision coverage'
    },
    {
        icon: '🚀',
        title: 'Career Growth',
        description: 'Clear career progression and mentorship opportunities'
    }
]

const Careers = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const perksRef = useRef<HTMLDivElement>(null)
    const jobsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, '.perk-card', '.job-card', '.careers-text'], {
                opacity: 0,
                y: 50,
                scale: 0.95
            });

            // Animate title on load
            gsap.to(titleRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out'
            });

            // Animate perk cards with stagger
            ScrollTrigger.create({
                trigger: perksRef.current,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.perk-card', {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: {
                            amount: 0.6,
                            from: "start"
                        },
                        ease: 'power3.out',
                        duration: 0.8
                    });
                }
            });

            // Animate job cards with stagger
            ScrollTrigger.create({
                trigger: jobsRef.current,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to('.job-card', {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: {
                            amount: 0.4,
                            from: "start"
                        },
                        ease: 'power3.out',
                        duration: 0.6
                    });
                }
            });

            // Handle card hover effects
            const cards = gsap.utils.toArray('.perk-card, .job-card');
            cards.forEach((card: any) => {
                const hoverTl = gsap.timeline({ paused: true });
                
                hoverTl.to(card, {
                    scale: 1.02,
                    y: -5,
                    duration: 0.2,
                    ease: 'power2.out'
                });

                card.addEventListener('mouseenter', () => hoverTl.play());
                card.addEventListener('mouseleave', () => hoverTl.reverse());
                card._hoverTl = hoverTl;
            });

            // Cleanup function
            return () => {
                cards.forEach((card: any) => {
                    if (card._hoverTl) card._hoverTl.kill();
                });
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="careers" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Blue Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/30"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format&q=80")`
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-36 h-36 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>

            <div className="container-max relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
                        Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">Team</span>
                    </h2>
                    <p className="careers-text text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto">
                        Be part of a team that's building the future of technology. We're always looking for
                        talented individuals who are passionate about innovation and creating impact.
                    </p>
                </div>

                {/* Perks & Benefits */}
                <div ref={perksRef} className="mb-20">
                    <h3 className="text-3xl font-bold text-center text-[#24292f] dark:text-[#f0f6fc] mb-12">
                        Why Join Codriva?
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {perks.map((perk, index) => (
                            <div 
                                key={index}
                                className="perk-card p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg dark:shadow-slate-800/30"
                                style={{ opacity: 0 }}
                            >
                                <div className="text-4xl mb-4">{perk.icon}</div>
                                <h4 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                    {perk.title}
                                </h4>
                                <p className="text-[#656d76] dark:text-[#8b949e]">
                                    {perk.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Open Positions */}
                <div ref={jobsRef}>
                    <h3 className="text-3xl font-bold text-center text-[#24292f] dark:text-[#f0f6fc] mb-12">
                        Open Positions
                    </h3>
                    <div className="grid gap-6">
                        {jobOpenings.map((job, index) => (
                            <div 
                                key={index}
                                className="job-card p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg dark:shadow-slate-800/30 transition-all duration-300"
                                style={{ opacity: 0 }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-2">
                                            {job.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-3 text-sm text-[#656d76] dark:text-[#8b949e] mb-4">
                                            <span>{job.type}</span>
                                            <span>•</span>
                                            <span>{job.location}</span>
                                            <span>•</span>
                                            <span>{job.experience}</span>
                                        </div>
                                        <p className="text-[#656d76] dark:text-[#8b949e] mb-4">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.skills.map((skill, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="btn-primary whitespace-nowrap">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-4">
                        Don't see a role that fits?
                    </h3>
                    <p className="text-[#656d76] dark:text-[#8b949e] mb-8">
                        Send us your resume anyway! We're always looking for talented people to join our team.
                    </p>
                    <button className="btn-outline">
                        Send Open Application
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Careers;