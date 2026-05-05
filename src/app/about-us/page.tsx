// import type { Metadata } from 'next'
// import AboutHero from '@/components/about/AboutHero'
// import AboutIntro from '@/components/about/AboutIntro'
// import TrustedPartners from '@/components/about/TrustedPartners'
// import AboutProblem from '@/components/about/AboutProblem'
// import AboutSolution from '@/components/about/AboutSolution'
// import AboutReliability from '@/components/about/AboutReliability'
// import AboutServices from '@/components/about/AboutServices'
// import AboutCta from '@/components/about/AboutCta'
//
// export const metadata: Metadata = {
//     title: 'About Us - Service Objects',
//     description:
//         'Real-time data company, Service Objects, is a leader in data validation, helping businesses keep customer contact data accurate and updated. Learn more!',
// }
//
// export default function AboutUsPage() {
//     return (
//         <>
//             <AboutHero />
//             <AboutIntro />
//             <TrustedPartners />
//             <AboutProblem />
//             <AboutSolution />
//             <AboutReliability />
//             <AboutServices />
//             <AboutCta />
//         </>
//     )
// }


import Image from 'next/image'
import Link from 'next/link'
import {
    aboutIntro,
    aboutMission,
    aboutSolution,
    challenges,
    reliabilityStats,
    serviceOfferings,
    aboutLinks,
} from '@/data/aboutData'
import {clientLogos} from "@/data/homeData";

export default function AboutPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="about-hero">
                <div className="container about-hero__inner">
                    <h1 className="about-hero__title">About Us</h1>
                    <p className="about-hero__sub-bold">
                        Service Objects is the industry leader in real-time contact validation APIs.
                    </p>
                    <p className="about-hero__body">{aboutIntro}</p>
                    <p className="about-hero__body">{aboutMission}</p>
                    <p className="about-hero__body">
                        We are committed to reducing wasted paper, time and resources through data quality excellence.
                        Our
                        mission is to develop the industry&apos;s best contact validation tools to protect your
                        business.
                    </p>
                </div>
            </section>

            {/* ── About intro + trusted partners ── */}
            <section className="section">
                <div className="container">
                    {/* Trusted partners strip */}
                    <div className="about-partners">
                        <p className="about-partners__label">Our Trusted Partners</p>
                    </div>

                    <div className="trusted__logos">
                        {clientLogos.map((logo) => (
                            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={50}/>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Problem + Solution ── */}
            <section className="section">
                <div className="container">
                    {/* Full-width intro statement */}
                    <p className="about-problem__statement">
                        Businesses rely on customer data for marketing, shipping, lead generation, fraud
                        prevention, and other purposes. However, it is estimated that 15–25% of contact data
                        is inaccurate, incomplete, fraudulent, or out-of-date.
                    </p>

                    {/* Image left / content right */}
                    <div className="about-problem__inner">
                        <div className="about-problem__image-wrap">
                            <Image
                                src="/images/about/solution.png"
                                alt="Service Objects office building"
                                width={500}
                                height={600}
                                style={{borderRadius: '8px', objectFit: 'cover', width: '100%', height: 'auto'}}
                            />
                        </div>

                        <div className="about-problem__content">
                            <h2 className="about-section-title">Our Solution</h2>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.75,
                                marginBottom: '28px',
                                fontSize: '0.96rem'
                            }}>
                                {aboutSolution}
                            </p>

                            <h3 className="about-section-subtitle">Cleanse, Validate and Enhance Contact Data</h3>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.9rem',
                                marginBottom: '18px',
                                lineHeight: 1.7
                            }}>
                                Our tools validate and cross-verify a contact&apos;s business, name, location, phone,
                                email address and device against hundreds of authoritative data sources.
                                We help our customers with the following challenges:
                            </p>

                            <ul className="about-challenges__list">
                                {challenges.map((c) => (
                                    <li key={c} className="about-challenges__item">
                                        <span className="about-challenges__bullet">&bull;</span>
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Reliability stats ── */}
            <section className="solutions-reliability section section--alt">
                <div className="container">
                    <div className="section-header--center">
                        <h2 className="section__title">Experience Unmatched Reliability</h2>
                    </div>
                    <div className="solutions-reliability__grid">
                        {reliabilityStats.map((stat) => (
                            <article key={stat.label} className="solutions-reliability__item">
                                <p className="solutions-reliability__value">{stat.value}</p>
                                <p className="solutions-reliability__label">{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Service offerings ── */}
            <section className="section">
                <div className="container">
                    <div className="section-header--center" style={{marginBottom: '40px'}}>
                        <h2 style={{
                            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                            fontWeight: 700,
                            color: 'var(--color-brand-dark)'
                        }}>
                            Service Objects offers a number of global data quality solutions, including:
                        </h2>
                    </div>
                    <div className="services__grid">
                        {serviceOfferings.map((s) => (
                            <article key={s.title} className="service-card">
                                <h3 className="service-card__title">{s.title}</h3>
                                <p className="service-card__desc">{s.desc}</p>
                                <Link href={s.href} className="service-card__link">
                                    Learn More &rsaquo;
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cta-section">
                <div className="container cta-section__inner">
                    <h2 style={{width: '40%'}}>
                        Ready to take the<br/> next step?
                    </h2>
                    <div style={{width: '60%'}}>
                        <p>
                            For more information, or to see how quickly Service Objects can deliver for your team,
                            schedule a chat with an expert today.
                        </p>
                        <Link href="/contact-us" className="cta-section__btn">
                            Let&apos;s Chat
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}