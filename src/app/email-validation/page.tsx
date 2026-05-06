import Link from 'next/link'
import Image from 'next/image'
import { clientLogos } from '@/data/homeData'
import { reliabilityStats } from '@/data/techSupportData'

const howItWorksItems = [
    {
        title: 'Validates and Corrects Input Email Addresses',
        body: 'Validates email addresses and corrects common spelling and formatting errors, delivering a cleaned and properly formatted address.',
    },
    {
        title: 'Returns Quantitative Quality Score',
        body: 'Provides estimates on the validity of an input email address, categorizing it as Good, Probably Good, Unknown, Probably Bad, or Bad.',
    },
    {
        title: 'Flags for Identifying Problematic Emails',
        body: 'Flags suspicious email addresses, including bogus, vulgar, disposable, role-based, misspelled, screamer, honeypot, spam trap, known complainer addresses, and more.',
    },
    {
        title: 'Evaluates the Deliverability of Email Addresses',
        body: 'Verifies deliverability, returning codes for refused connections, non-existent top-level domains, DNS/MX/SMS errors, and other issues.',
    },
]

const featureRows = [
    {
        title: 'Email Verification Enhances Deliverability and Minimizes Bounces',
        body: 'Our Email Validation service conducts over 50 checks and verifications, providing a clear pass/fail score. This ensures you can send emails with confidence, enhancing deliverability and potentially reducing your bounce rate by up to 90%.',
        image: '/images/home/results.png',
        reverse: false,
    },
    {
        title: 'Safeguard Your Sender Reputation',
        body: 'With warning flags for issues such as bogus, vulgar, disposable, role-based, misspelled, screamer, honeypot, spam trap, and known complainer addresses, you can easily identify and automatically eliminate problematic emails. We are the only email validation service offering up-to-date reputation data for email service providers.',
        image: '/images/solutions/managing-fraud.jpg',
        reverse: true,
    },
    {
        title: 'Effortless Integration with Web Forms',
        body: 'Ensure your web forms capture accurate and up-to-date email addresses, so your critical information and marketing communications reliably reach your customers and prospects.',
        image: '/images/solutions/fixing-bad-addresses.jpg',
        reverse: false,
    },
    {
        title: 'Secure and Compliant',
        body: 'We do not store, share, or sell your data—guaranteed. Unlike many email validation services that retain your email data for future use, we prioritize your privacy and the security of your customers\' information.',
        image: '/images/solutions/achieving-compliance.jpg',
        reverse: true,
    },
]

const beforeFields = [
    ['Input Email', 'robmanser@gmial.com'],
    ['Format Check', '✗  Failed'],
    ['Domain Check', '✗  Invalid'],
    ['Score', '1 / 5 — Bad'],
]

const afterResults = [
    'robmanser@gmail.com',
    'Score: Good (5 / 5)',
    'Format: Valid',
    'MX Records: Found',
    'Deliverable',
]

const resources = [
    {
        title: 'Developer Resources',
        body: 'Access developer guides, sample code and data for quick API integration.',
        href: '/developers',
        image: '/images/solutions/increasing-productivity.jpg',
    },
    {
        title: 'Free Trial Key',
        body: 'Test the service for free with 500 complimentary transactions.',
        href: '/trial',
        image: '/images/solutions/leveraging-business-intelligence.jpg',
    },
    {
        title: 'Talk to our Experts',
        body: 'See firsthand how our global Customer Data Validation services can improve your business.',
        href: '/talk-to-an-expert',
        image: '/images/solutions/managing-fraud.jpg',
    },
]

export default function EmailValidationPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="nv-hero">
                <div className="container nv-hero__inner">
                    <p className="nv-hero__eyebrow">DOTS Email Validation</p>
                    <h1 className="nv-hero__title">Bounce Less. Deliver More.</h1>
                    <p className="nv-hero__sub">
                        Enhance your email deliverability and improve open rates with rapid and secure
                        email verification.
                    </p>
                    <Link href="/demo-request" className="nv-hero__btn">Schedule a Demo</Link>
                </div>
            </section>

            {/* ── Trusted Partners ── */}
            <section className="section" style={{ paddingTop: '40px', paddingBottom: '56px' }}>
                <div className="container">
                    <div className="about-partners">
                        <p className="about-partners__label">Our Trusted Partners</p>
                    </div>
                    <div className="trusted__logos" style={{ justifyContent: 'center' }}>
                        {clientLogos.map(logo => (
                            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={50} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Intro: Most Advanced Service ── */}
            <section className="section nv-intro">
                <div className="container">
                    <h2 className="nv-intro__heading">The Most Advanced Email Validation Service Available</h2>
                    <div className="nv-intro__inner">
                        <div className="nv-intro__image-wrap">
                            <Image
                                src="/images/products/categories/email.jpg"
                                alt="Email validation service"
                                width={540}
                                height={420}
                                className="nv-intro__image"
                            />
                        </div>
                        <div className="nv-intro__features">
                            <div className="nv-intro__feature">
                                <h3 className="nv-intro__feature-title">
                                    Seamless Integration with Web Forms and Business Applications
                                </h3>
                                <p className="nv-intro__feature-body">
                                    Our Email Validation and Verification service effortlessly integrates with
                                    your web forms and business applications, ensuring a smooth and reliable
                                    experience.
                                </p>
                            </div>
                            <div className="nv-intro__feature">
                                <h3 className="nv-intro__feature-title">
                                    Comprehensive Integrity Checks and Risk Analysis
                                </h3>
                                <p className="nv-intro__feature-body">
                                    With over 50 integrity checks and filters, our service offers unparalleled
                                    insights into risk and deliverability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How Email Validation Works ── */}
            <section className="section nv-how">
                <div className="container">
                    <h2 className="nv-how__heading">How Email Validation Works</h2>
                    <div className="nv-how__inner">
                        {/* Left: feature list */}
                        <div className="nv-how__features">
                            {howItWorksItems.map(item => (
                                <div key={item.title} className="nv-how__item">
                                    <h3 className="nv-how__item-title">{item.title}</h3>
                                    <p className="nv-how__item-body">{item.body}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right: Before / After mockup */}
                        <div className="nv-ba">
                            {/* Before */}
                            <div className="nv-ba__card nv-ba__card--before">
                                <p className="nv-ba__label">BEFORE VALIDATION</p>
                                <div className="nv-ba__avatar">
                                    <svg viewBox="0 0 64 48" fill="none" width="64" height="48">
                                        <rect x="0" y="0" width="64" height="48" rx="6" fill="#c8d4e0" />
                                        <path d="M4 8l28 18L60 8" stroke="#7a90a8" strokeWidth="2.5" strokeLinecap="round" />
                                        <rect x="4" y="6" width="56" height="36" rx="4" fill="none" stroke="#7a90a8" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="nv-ba__fields">
                                    {beforeFields.map(([label, value]) => (
                                        <div key={label} className="nv-ba__field">
                                            <span className="nv-ba__field-label">{label}</span>
                                            <span className="nv-ba__field-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* After */}
                            <div className="nv-ba__card nv-ba__card--after">
                                <p className="nv-ba__label nv-ba__label--after">AFTER VALIDATION</p>
                                <div className="nv-ba__map-icon">
                                    <svg viewBox="0 0 72 72" fill="none" width="72" height="72">
                                        <circle cx="36" cy="36" r="36" fill="#1565c0" />
                                        <rect x="12" y="20" width="48" height="34" rx="5" fill="#e8f4fd" />
                                        <path d="M12 28l24 16 24-16" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round" />
                                        <circle cx="50" cy="22" r="10" fill="#2e7d32" />
                                        <path d="M45 22l3.5 3.5 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <ul className="nv-ba__results">
                                    {afterResults.map((item, i) => (
                                        <li key={i} className="nv-ba__result-item">
                                            <span className="nv-ba__result-dot" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="nv-ba__badge">GOOD<br />EMAIL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Reliability ── */}
            <section className="solutions-reliability section section--alt">
                <div className="container">
                    <div className="section-header--center">
                        <h2 className="section__title">Experience Unmatched Reliability</h2>
                    </div>
                    <div className="solutions-reliability__grid">
                        {reliabilityStats.map(stat => (
                            <article key={stat.label} className="solutions-reliability__item">
                                <p className="solutions-reliability__value">{stat.value}</p>
                                <p className="solutions-reliability__label">{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Features & Benefits ── */}
            <section className="section nv-features">
                <div className="container">
                    <h2 className="nv-features__heading">Features and Benefits of Email Validation</h2>
                    <div className="nv-features__rows">
                        {featureRows.map(row => (
                            <div
                                key={row.title}
                                className={`nv-feature-row${row.reverse ? ' nv-feature-row--reverse' : ''}`}
                            >
                                <div className="nv-feature-row__content">
                                    <h3 className="nv-feature-row__title">{row.title}</h3>
                                    <p className="nv-feature-row__body">{row.body}</p>
                                </div>
                                <div className="nv-feature-row__image-wrap">
                                    <Image
                                        src={row.image}
                                        alt={row.title}
                                        width={480}
                                        height={320}
                                        className="nv-feature-row__image"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="nv-cta">
                <div className="container nv-cta__inner">
                    <h2 className="nv-cta__heading">Ready to take the<br />next step?</h2>
                    <div className="nv-cta__right">
                        <p className="nv-cta__body">
                            For more information, or to see how quickly Service Objects can deliver
                            for your team, schedule a chat with an expert today.
                        </p>
                        <Link href="/talk-to-an-expert" className="nv-cta__btn">
                            Let&apos;s Chat →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Resources ── */}
            <section className="section nv-resources">
                <div className="container">
                    <h2 className="nv-resources__heading">Resources</h2>
                    <div className="nv-resources__grid">
                        {resources.map(r => (
                            <div key={r.title} className="nv-resource-card">
                                <div className="nv-resource-card__image-wrap">
                                    <Image
                                        src={r.image}
                                        alt={r.title}
                                        width={400}
                                        height={200}
                                        className="nv-resource-card__image"
                                    />
                                </div>
                                <div className="nv-resource-card__body">
                                    <h3 className="nv-resource-card__title">{r.title}</h3>
                                    <p className="nv-resource-card__text">{r.body}</p>
                                    <Link href={r.href} className="nv-resource-card__link">
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
