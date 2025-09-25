'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const BackgroundCursorEffects = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const particlesRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (typeof window === 'undefined') return

        const container = containerRef.current
        if (!container) return

        // Create floating particles
        const createParticle = () => {
            const particle = document.createElement('div')
            particle.className = 'absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-300/40 rounded-full pointer-events-none'
            particle.style.left = Math.random() * 100 + '%'
            particle.style.top = Math.random() * 100 + '%'
            container.appendChild(particle)
            particlesRef.current.push(particle)

            // Animate particle
            gsap.to(particle, {
                y: -100,
                x: (Math.random() - 0.5) * 100,
                opacity: 0,
                duration: Math.random() * 3 + 2,
                ease: 'power1.out',
                onComplete: () => {
                    particle.remove()
                    const index = particlesRef.current.indexOf(particle)
                    if (index > -1) {
                        particlesRef.current.splice(index, 1)
                    }
                }
            })
        }

        // Create particles periodically
        const particleInterval = setInterval(createParticle, 200)

        // Mouse move effects
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window

            // Create ripple effect
            const ripple = document.createElement('div')
            ripple.className = 'absolute w-4 h-4 bg-blue-500/20 dark:bg-blue-400/30 rounded-full pointer-events-none'
            ripple.style.left = clientX + 'px'
            ripple.style.top = clientY + 'px'
            ripple.style.transform = 'translate(-50%, -50%)'
            container.appendChild(ripple)

            gsap.to(ripple, {
                scale: 20,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            })

            // Parallax effect for particles
            particlesRef.current.forEach((particle, index) => {
                const speed = (index % 3 + 1) * 0.5
                const x = (clientX - innerWidth / 2) * speed * 0.01
                const y = (clientY - innerHeight / 2) * speed * 0.01

                gsap.to(particle, {
                    x: x,
                    y: y,
                    duration: 2,
                    ease: 'power1.out'
                })
            })
        }

        // Add mouse move listener
        window.addEventListener('mousemove', handleMouseMove)

        // Cleanup
        return () => {
            clearInterval(particleInterval)
            window.removeEventListener('mousemove', handleMouseMove)
            particlesRef.current.forEach(particle => particle.remove())
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
            }}
        />
    )
}

export default BackgroundCursorEffects
