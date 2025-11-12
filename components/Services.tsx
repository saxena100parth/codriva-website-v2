'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description: 'Crafting tailored digital solutions that align precisely with your business goals, workflows, and challenges.',
    detailedDescription: 'Unlike generic, off-the-shelf software designed for the masses, custom applications are purpose-built to address specific needs, unlock operational efficiency, and deliver a seamless user experience. We develop robust, scalable, and secure custom software that integrates effortlessly with your existing systems.',
    features: ['Tailored Solutions', 'System Integration', 'Scalable Architecture', 'End-to-End Development']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Creating intuitive, responsive, and aesthetically engaging interfaces that enhance usability.',
    detailedDescription: 'We create interfaces that simplify complex interactions — enabling users to report issues, request assistance, and track progress with ease. Our design approach balances visual appeal with functional clarity, using purposeful layouts and interactive elements that guide users effortlessly through your software.',
    features: ['User-Centered Design', 'Responsive Interfaces', 'Accessibility Focus', 'Interactive Prototyping']
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Building intuitive, feature-rich mobile apps that help businesses connect with users on the go.',
    detailedDescription: 'We specialize in building high-performing applications across Android, iOS, or both through cross-platform solutions. Our process covers the full lifecycle — from user-centric design and scalable architecture to rigorous testing and deployment on major app stores.',
    features: ['Native & Cross-Platform', 'App Store Deployment', 'Performance Optimization', 'User-Centric Design']
  },
  {
    icon: '⚙️',
    title: 'Product Engineering',
    description: 'Comprehensive process of designing, developing, testing, and launching high-quality products.',
    detailedDescription: 'Applying engineering principles throughout the product lifecycle — from understanding user needs and defining technical specifications to prototyping, rigorous quality testing, and market release. We deliver cost-effective products that fulfill both user expectations and business objectives.',
    features: ['Full Lifecycle Development', 'Quality Testing', 'Technical Specifications', 'Market Deployment']
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Streamlining development, deployment, and management of applications in cloud environments.',
    detailedDescription: 'Combining cloud computing with DevOps practices to automate infrastructure setup, continuous integration and delivery (CI/CD), monitoring, and scaling using platforms like AWS, Azure, and Google Cloud. Accelerate software delivery and enhance reliability.',
    features: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Automated Deployment', 'Performance Monitoring']
  },
  {
    icon: '🔗',
    title: 'API & System Integration',
    description: 'Connecting diverse software systems to enable seamless communication and data sharing.',
    detailedDescription: 'Integrating disparate systems—such as payment gateways, customer databases, or third-party services—to function together as a unified platform. By automating workflows and enabling real-time data exchange, we reduce manual effort and enhance operational efficiency.',
    features: ['System Connectivity', 'Real-time Data Exchange', 'Workflow Automation', 'Third-party Integration']
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description: 'Transforming raw data into clear, actionable information for informed decision-making.',
    detailedDescription: 'Gathering, organizing, and analyzing raw data to uncover valuable insights, patterns, and trends. We help businesses enhance performance, forecast outcomes, understand customer behavior, and solve challenges efficiently through descriptive, diagnostic, predictive, and prescriptive analytics.',
    features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Performance Insights']
  },
  {
    icon: '🧠',
    title: 'AI & Machine Learning',
    description: 'Enabling machines to simulate human intelligence and learn from data over time.',
    detailedDescription: 'Leveraging artificial intelligence and machine learning to automate processes, enhance user experiences, and enable smarter, data-driven decisions. From language comprehension to autonomous decision-making, we help revolutionize industries through intelligent automation.',
    features: ['Machine Learning Models', 'Process Automation', 'Predictive Analysis', 'Intelligent Systems']
  },
  {
    icon: '📈',
    title: 'Big Data Solutions',
    description: 'Processing and analyzing vast amounts of data to extract valuable business insights.',
    detailedDescription: 'Enabling businesses to handle structured and unstructured data for smarter decision-making, real-time analytics, and enhanced operational efficiency. From customer behavior analysis to predictive maintenance, we empower organizations to stay competitive in today\'s data-driven landscape.',
    features: ['Data Processing', 'Real-time Analytics', 'Predictive Modeling', 'Business Intelligence']
  },
  {
    icon: '💼',
    title: 'IT Consulting',
    description: 'Aligning technology strategies with core business objectives for growth and innovation.',
    detailedDescription: 'Providing expert guidance for effective technology use—from selecting the right software and infrastructure to enhancing cybersecurity and optimizing operations. Whether planning digital transformation or seeking ongoing tech support, we deliver customized solutions that drive competitive advantage.',
    features: ['Technology Strategy', 'Digital Transformation', 'Infrastructure Planning', 'Cybersecurity']
  },
  {
    icon: '✅',
    title: 'QA & Testing',
    description: 'Ensuring software applications are reliable, secure, and perform optimally before release.',
    detailedDescription: 'Using a blend of manual and automated testing techniques to detect bugs, performance bottlenecks, and usability issues. Our robust QA process enhances product quality while reducing time-to-market and long-term costs, delivering a seamless, error-free user experience.',
    features: ['Manual & Automated Testing', 'Performance Optimization', 'Security Testing', 'Quality Assurance']
  },
  {
    icon: '🔧',
    title: 'Support & Maintenance',
    description: 'Ensuring your software remains reliable and efficient long after deployment.',
    detailedDescription: 'Providing regular updates, bug fixes, performance monitoring, and responsive technical support to promptly resolve any issues. Through proactive maintenance and continuous care, we help minimize downtime, strengthen security, and keep your systems operating at peak performance.',
    features: ['Technical Support', 'Performance Monitoring', 'Regular Updates', 'Proactive Maintenance']
  }
]

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

        // Enhanced service cards with 3D effect and stagger
        gsap.fromTo('.service-card', {
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
            amount: 0.8,
            from: "start"
          },
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })

        // Add hover animations to service cards
        gsap.utils.toArray('.service-card').forEach((card: any) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.02,
              y: -5,
              rotationY: 2,
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
        gsap.utils.toArray('.services-text').forEach((text: any) => {
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
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/40"></div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=80")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
      
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600">Services</span>
          </h2>
          <p className="services-text text-xl text-[#656d76] dark:text-[#8b949e] max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card card hover-card p-6 h-full flex flex-col">
              <div className="text-3xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[#24292f] dark:text-[#f0f6fc] mb-3 text-center leading-tight">
                {service.title}
              </h3>
              <p className="text-[#656d76] dark:text-[#8b949e] mb-4 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-[#656d76] dark:text-[#8b949e]">
                      <svg className="w-3 h-3 text-[#0969da] dark:text-[#58a6ff] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-outline w-full text-sm py-2">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-4">
              Ready to transform your business?
            </h3>
            <p className="text-[#656d76] dark:text-[#8b949e] mb-6">
              Let&apos;s discuss how our comprehensive technology services can help you achieve your goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get Started
              </button>
              <button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services