'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null)
    const cursorFollowerRef = useRef<HTMLDivElement>(null)
    const cursorDotRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const cursor = cursorRef.current
        const cursorFollower = cursorFollowerRef.current
        const cursorDot = cursorDotRef.current

        if (!cursor || !cursorFollower || !cursorDot) return

        // Set initial positions
        gsap.set([cursor, cursorFollower, cursorDot], {
            xPercent: -50,
            yPercent: -50
        })

        // Mouse move animation
        const handleMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            })

            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            })

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: 'power2.out'
            })
        }

        // Mouse click animation
        const handleMouseDown = () => {
            setIsClicking(true)
            gsap.to(cursor, {
                scale: 0.8,
                duration: 0.1,
                ease: 'power2.out'
            })
            gsap.to(cursorFollower, {
                scale: 0.8,
                duration: 0.1,
                ease: 'power2.out'
            })
        }

        const handleMouseUp = () => {
            setIsClicking(false)
            gsap.to(cursor, {
                scale: 1,
                duration: 0.1,
                ease: 'power2.out'
            })
            gsap.to(cursorFollower, {
                scale: 1,
                duration: 0.1,
                ease: 'power2.out'
            })
        }

        // Hover effects for interactive elements
        const handleMouseEnter = () => {
            setIsHovering(true)
            gsap.to(cursor, {
                scale: 1.5,
                duration: 0.3,
                ease: 'power2.out'
            })
            gsap.to(cursorFollower, {
                scale: 0.5,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const handleMouseLeave = () => {
            setIsHovering(false)
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
            gsap.to(cursorFollower, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter)
            element.addEventListener('mouseleave', handleMouseLeave)
        })

        // Hide cursor on mouse leave
        const handleMouseLeaveWindow = () => {
            gsap.to([cursor, cursorFollower, cursorDot], {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const handleMouseEnterWindow = () => {
            gsap.to([cursor, cursorFollower, cursorDot], {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        document.addEventListener('mouseleave', handleMouseLeaveWindow)
        document.addEventListener('mouseenter', handleMouseEnterWindow)

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mouseleave', handleMouseLeaveWindow)
            document.removeEventListener('mouseenter', handleMouseEnterWindow)

            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter)
                element.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            {/* Main cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference"
                style={{
                    background: 'white',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.3s ease'
                }}
            />

            {/* Cursor follower */}
            <div
                ref={cursorFollowerRef}
                className={`fixed top-0 left-0 w-12 h-12 pointer-events-none z-40 transition-all duration-300 ${isHovering ? 'bg-blue-500/20' : 'bg-blue-500/10'
                    } ${isClicking ? 'bg-blue-500/30' : ''}`}
                style={{
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    transition: 'opacity 0.3s ease'
                }}
            />

            {/* Cursor dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50"
                style={{
                    background: 'rgba(59, 130, 246, 0.8)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.3s ease'
                }}
            />
        </>
    )
}

export default CustomCursor
