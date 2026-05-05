'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const rotatingWords = [
    'Build Trust',
    'Achieve Compliance',
    'Fight Fraud',
    'Ensure Deliverability',
]

export default function HeroSection() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % rotatingWords.length)
        }, 2500)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__content">
                    <h1 className="hero__headline">
                        <span className="hero__rotating">{rotatingWords[index]}</span>
                        <br />
                        with All-In-One Customer Data Validation
                    </h1>
                    <p className="hero__sub">
                        Our real-time services are the engine that leading businesses use to validate,
                        correct and enhance global contact information.
                    </p>
                    <Link href="/products" className="btn btn--primary btn--lg">
                        Get Started
                    </Link>
                </div>
                <div className="hero__image">
                    <Image
                        src="/images/home/hero-address.png"
                        alt="Address Validation"
                        width={500}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}