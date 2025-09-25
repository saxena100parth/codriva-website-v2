'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')
    const [mounted, setMounted] = useState(false)

    // Initialize theme on mount
    useEffect(() => {
        setMounted(true)

        if (typeof window !== 'undefined') {
            try {
                const savedTheme = localStorage.getItem('theme') as Theme
                if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
                    setTheme(savedTheme)
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    setTheme('dark')
                }
            } catch (error) {
                console.warn('Error accessing localStorage:', error)
                setTheme('light')
            }
        }
    }, [])

    // Apply theme to document
    useEffect(() => {
        if (mounted && typeof window !== 'undefined') {
            try {
                localStorage.setItem('theme', theme)
            } catch (error) {
                console.warn('Error saving theme to localStorage:', error)
            }

            if (theme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        console.log('Theme toggle called, current theme:', theme)
        setTheme(prev => {
            const newTheme = prev === 'light' ? 'dark' : 'light'
            console.log('Switching from', prev, 'to', newTheme)
            return newTheme
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}