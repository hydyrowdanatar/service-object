import Link from 'next/link'
import Image from 'next/image'
import { clientLogos } from '@/data/homeData'
import { reliabilityStats } from '@/data/techSupportData'

const howItWorksItems = [
    {
        title: 'Breaking Down Names into Component Values',
        body: 'Returns validated name components in a precise order—prefix, first name, middle name, last name, and suffix—ensuring thorough accuracy.',
    },
    {
        title: 'Provides Quantitative Quality Score',
        body: 'Delivers a name quality score from 0 to 5, giving you a clear measure of the name\'s reliability.',
    },
    {
        title: 'Provides Identifying Name Data',
        body: 'Provides key data for effective correspondence, including national origin, gender, and flags for distinguishing between business and personal names.',
    },
    {
        title: 'Flags Potentially Fraudulent and Bogus Names',
        body: 'Results include scores from 0 to 5 for potentially vulgar, celebrity, bogus, and garbage names, making it easy to identify suspicious entries.',
    },
]

const featureRows = [
    {
        title: '40-Step Process for Checking, Correcting, and Scoring Names',
        body: 'Our real-time name validation service corrects and tests names against a proprietary database of millions to generate an overall quality score. Use this score to block or reject bogus submissions in your sales and marketing automation platforms.',
        image: '/images/home/results.png',
        reverse: false,
    },
    {
        title: 'Ensure Accuracy with Your Customer\'s Names',
        body: 'First impressions matter, and getting your customer\'s name right is a great start. Name Validation identifies whether a name belongs to a business or individual and includes gender information to help your sales, call center, and customer service teams communicate more effectively. Our service corrects first and last names, identifies possible variations, and supports global personalization with accented characters for international names.',
        image: '/images/solutions/understanding-customer-data-validation.jpg',
        reverse: true,
    },
    {
        title: 'Keep Your CRM Clean',
        body: 'Bogus contacts in your CRM and business platforms can be costly. Name Validation prevents fraudulent leads by flagging vulgar, celebrity, and garbage names. It also breaks down complex names into individual elements for consistent name entry.',
        image: '/images/solutions/leveraging-business-intelligence.jpg',
        reverse: false,
    },
    {
        title: 'Standardizes Data Across Internal Systems',
        body: 'Name Validation standardizes names to ensure uniformity across all internal systems. It also flags duplicate records using similar name matching to eliminate redundant data.',
        image: '/images/solutions/achieving-compliance.jpg',
        reverse: true,
    },
]

const beforeFields = [
    ['Name', 'Rob Manser'],
    ['Address', '11 St Ann Drive'],
    ['City', 'Santa Barbara'],
    ['State', 'Calif'],
    ['ZIP', '93101'],
]

const afterResults = [
    'COA Match Found',
    '3/11/2022',
    'Robert Manser',
    '805 W Micheltorena St. Santa Barbara, CA 93101',
    'Residential',
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
        image: '/images/solutions/fixing-bad-addresses.jpg',
    },
    {
        title: 'Talk to our Experts',
        body: 'See firsthand how our global Customer Data Validation services can improve your business.',
        href: '/talk-to-an-expert',
        image: '/images/solutions/managing-fraud.jpg',
    },
]

export default function NameValidationPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="nv-hero">
                <div className="container nv-hero__inner">
                    <p className="nv-hero__eyebrow">DOTS Name Validation</p>
                    <h1 className="nv-hero__title">Boosting Efficiency with<br />Enhanced Caller ID</h1>
                    <p className="nv-hero__sub">
                        Accurate names are key to effective customer communication. Our Name Validation
                        service runs a 40-step check to detect and remove inaccurate or fake names,
                        ensuring your communications are correctly and professionally personalized,
                        avoiding embarrassing mistakes with customers and prospects.
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

            {/* ── What's in a Name? ── */}
            <section className="section nv-intro">
                <div className="container">
                    <h2 className="nv-intro__heading">What&apos;s in a Name?</h2>
                    <div className="nv-intro__inner">
                        <div className="nv-intro__image-wrap">
                            <Image
                                src="/images/products/categories/name.jpg"
                                alt="Name validation illustration"
                                width={540}
                                height={420}
                                className="nv-intro__image"
                            />
                        </div>
                        <div className="nv-intro__features">
                            <div className="nv-intro__feature">
                                <h3 className="nv-intro__feature-title">
                                    Enhancing Personalization and Preventing Fraud
                                </h3>
                                <p className="nv-intro__feature-body">
                                    Accurate names are crucial for effective personalization and preventing
                                    fraudulent form submissions, key to maintaining your brand&apos;s credibility.
                                </p>
                            </div>
                            <div className="nv-intro__feature">
                                <h3 className="nv-intro__feature-title">
                                    Our Global Name Database Enhances Data Integrity
                                </h3>
                                <p className="nv-intro__feature-body">
                                    Name Validation leverages a global database of over 1.4 million first names
                                    and 2.75 million last names to verify and correct errors, ensuring accurate
                                    data entry and preventing unwanted entries in your database.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How Name Validation Works ── */}
            <section className="section nv-how">
                <div className="container">
                    <h2 className="nv-how__heading">How Name Validation Works</h2>
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
                                    <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                                        <circle cx="32" cy="32" r="32" fill="#c8d4e0" />
                                        <circle cx="32" cy="24" r="11" fill="#7a90a8" />
                                        <path d="M10 58c0-12.1 9.9-22 22-22s22 9.9 22 22" fill="#7a90a8" />
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
                                        <rect x="14" y="28" width="44" height="28" rx="3" fill="#e8f4fd" />
                                        <path d="M14 34l22-12 22 12" fill="none" stroke="#fff" strokeWidth="1.5" />
                                        <circle cx="30" cy="38" r="4" fill="#e53935" />
                                        <circle cx="46" cy="42" r="4" fill="#1e88e5" />
                                        <path d="M30 38l8 6" stroke="#f4a623" strokeWidth="2" strokeLinecap="round" />
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
                                <div className="nv-ba__badge">COA<br />FOUND</div>
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
                    <h2 className="nv-features__heading">Features and Benefits of Name Validation</h2>
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
