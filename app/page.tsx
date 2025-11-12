import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Careers from '@/components/Careers'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Careers />
            <Services />
            <Portfolio />
            <Contact />
        </>
    )
}