'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CursorTrail = () => {
    const trailRef = useRef<HTMLDivElement[]>([])
    const mousePos = useRef({ x: 0, y: 0 })
    const trailPos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        if (typeof window === 'undefined') return

        // Create trail elements
        const createTrailElement = () => {
            const element = document.createElement('div')
            element.className = 'fixed w-2 h-2 bg-blue-500/60 dark:bg-blue-400/70 rounded-full pointer-events-none z-30'
            element.style.transform = 'translate(-50%, -50%)'
            element.style.opacity = '0'
            document.body.appendChild(element)
            return element
        }

        // Initialize trail elements
        for (let i = 0; i < 20; i++) {
            const element = createTrailElement()
            trailRef.current.push(element)
        }

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }

        // Animation loop
        const animateTrail = () => {
            // Update trail position with easing
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.1
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.1

            // Update trail elements
            trailRef.current.forEach((element, index) => {
                const delay = index * 0.02
                const x = trailPos.current.x + (Math.random() - 0.5) * 10
                const y = trailPos.current.y + (Math.random() - 0.5) * 10
                const scale = 1 - (index / trailRef.current.length) * 0.8
                const opacity = 1 - (index / trailRef.current.length)

                gsap.to(element, {
                    x: x,
                    y: y,
                    scale: scale,
                    opacity: opacity,
                    duration: 0.1,
                    ease: 'power1.out'
                })
            })

            requestAnimationFrame(animateTrail)
        }

        // Start animation
        animateTrail()

        // Add event listener
        window.addEventListener('mousemove', handleMouseMove)

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            trailRef.current.forEach(element => element.remove())
        }
    }, [])

    return null
}

export default CursorTrail
