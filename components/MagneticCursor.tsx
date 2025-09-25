'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const MagneticCursor = () => {
    const magneticElementsRef = useRef<HTMLElement[]>([])

    useEffect(() => {
        if (typeof window === 'undefined') return

        // Get all magnetic elements
        const magneticElements = document.querySelectorAll('a, button, .card, .service-card, .project-card, .feature-card')
        magneticElementsRef.current = Array.from(magneticElements) as HTMLElement[]

        const handleMouseEnter = (element: HTMLElement) => {
            gsap.to(element, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            })

            // Add magnetic effect
            const handleMouseMove = (e: MouseEvent) => {
                const rect = element.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2

                const deltaX = (e.clientX - centerX) * 0.1
                const deltaY = (e.clientY - centerY) * 0.1

                gsap.to(element, {
                    x: deltaX,
                    y: deltaY,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }

            const handleMouseLeave = () => {
                gsap.to(element, {
                    scale: 1,
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                })
                element.removeEventListener('mousemove', handleMouseMove)
                element.removeEventListener('mouseleave', handleMouseLeave)
            }

            element.addEventListener('mousemove', handleMouseMove)
            element.addEventListener('mouseleave', handleMouseLeave)
        }

        // Add magnetic effects to all elements
        magneticElementsRef.current.forEach(element => {
            element.addEventListener('mouseenter', () => handleMouseEnter(element))
        })

        // Cleanup
        return () => {
            magneticElementsRef.current.forEach(element => {
                element.removeEventListener('mouseenter', () => handleMouseEnter(element))
            })
        }
    }, [])

    return null
}

export default MagneticCursor
