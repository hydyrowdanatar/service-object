import Link from 'next/link'
import Image from 'next/image'
import { clientLogos } from '@/data/homeData'
import { reliabilityStats } from '@/data/techSupportData'

const howItems = [
    {
        title: 'IP Address Provides Location & Risk Factors',
        body: 'Country code and city/region/geocoding data facilitate comparison with contact address data for possible fraud prevention.',
    },
    {
        title: 'Returns Host Data for IP Addresses',
        body: 'Data returned includes ISP assigning the IP address, network owner to which the IP is assigned and host name.',
    },
    {
        title: 'Detects and Identifies Proxy Servers',
        body: 'Identifies use of proxy servers, including private, public and satellite servers as well as anonymous proxy servers hiding user IP address.',
    },
    {
        title: 'Flags Malicious and High-Risk IP Addresses',
        body: 'Identifies potential or near-certain malicious IP addresses for real-time detection of fraudulent activity.',
    },
]

const featureRows = [
    {
        title: 'Fraud Alert: When IP Address Location Doesn\'t Match',
        body: 'Most ecommerce fraud originates from high-risk countries where scammers operate with impunity and enforcement is lax. IP Address Validation flags mismatches between an IP\'s location and a customer\'s address worldwide and provides a certainty score for every result. Our global database of over 4 billion records is updated daily to ensure the most accurate results are delivered.',
        image: '/images/solutions/managing-fraud.jpg',
        reverse: false,
    },
    {
        title: 'Supports Compliance Efforts',
        body: 'IP Address Validation enables your organization to detect the country of origin that website visitors are coming from. This information assists in meeting the compliance requirements for privacy and data protection laws, like GDPR, CAN-SPAM and PIPEDA. By detecting the country a visitor is coming from, your business can more accurately present the correct privacy policy associated with their country.',
        image: '/images/solutions/achieving-compliance.jpg',
        reverse: true,
    },
]

const relatedProducts = [
    {
        title: 'Phone Append',
        body: 'Append phone numbers to your contact records and validate existing numbers for accuracy.',
        href: '/phone-validation',
        image: '/images/products/categories/phone.jpg',
    },
    {
        title: 'Lead Validation — International',
        body: 'Validate and score international leads with a comprehensive global data quality solution.',
        href: '/lead-validation',
        image: '/images/products/categories/lead.jpg',
    },
    {
        title: 'Geophone Plus',
        body: 'Combine geolocation and phone intelligence for deeper insight into your customer data.',
        href: '/products',
        image: '/images/solutions/understanding-customer-data-validation.jpg',
    },
]

export default function DeviceValidationPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="dv-hero">
                <div className="container">
                    <div className="dv-hero__content">
                        <p className="dv-hero__eyebrow">DOTS IP Address Validation</p>
                        <h1 className="dv-hero__title">
                            IP Address Validation Provides<br />Key Indicators of Fraud
                        </h1>
                        <p className="dv-hero__sub">
                            IP Address Validation has a range of uses, from fraud mitigation to determining
                            locations to inform targeted marketing campaigns. Our global IP address verification
                            service determines visitor location, device type and proxies.
                        </p>
                        <div className="dv-hero__btns">
                            <Link href="/demo-request" className="dv-hero__btn dv-hero__btn--dark">
                                Schedule a Demo
                            </Link>
                            <Link href="/trial" className="dv-hero__btn dv-hero__btn--blue">
                                Get a Free Trial Key
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Intro heading ── */}
            <section className="section dv-intro">
                <div className="container">
                    <h2 className="dv-intro__heading">
                        Identify IP Address location and device<br />type anywhere in the world
                    </h2>
                    <p className="dv-intro__body">
                        Accessing over 4 billion IP addresses, this service calculates the location and
                        device type of your visitors. By cross-referencing IP address location against
                        additional data points, like billing and shipping addresses, you can flag
                        high-risk and fraudulent transactions.
                    </p>
                </div>
            </section>

            {/* ── Reliability stats ── */}
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
                    <h2 className="nv-features__heading">Features and Benefits of IP Address Validation</h2>
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

            {/* ── How It Works ── */}
            <section className="section dv-how">
                <div className="container">
                    <h2 className="dv-how__heading">How IP Address Validation Works</h2>
                    <div className="dv-how__grid">
                        {howItems.map(item => (
                            <div key={item.title} className="dv-how__card">
                                <h3 className="dv-how__card-title">{item.title}</h3>
                                <p className="dv-how__card-body">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Developer CTA ── */}
            <section className="dv-dev">
                <div className="container dv-dev__inner">
                    <h2 className="dv-dev__heading">For Developers by Developers</h2>
                    <p className="dv-dev__body">
                        For a deeper dive into all of our APIs, visit our developer guides. If you&apos;re
                        ready to put it to the test, sign up for a free API trial key and get
                        500 free transactions.
                    </p>
                    <div className="dv-dev__btns">
                        <Link href="/trial" className="dv-dev__btn dv-dev__btn--solid">
                            Request a Trial Key
                        </Link>
                        <Link href="/developers" className="dv-dev__btn dv-dev__btn--outline">
                            Developer Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Related Products ── */}
            <section className="section nv-resources">
                <div className="container">
                    <h2 className="nv-resources__heading">Related Products</h2>
                    <div className="nv-resources__grid">
                        {relatedProducts.map(p => (
                            <div key={p.title} className="nv-resource-card">
                                <div className="nv-resource-card__image-wrap">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={400}
                                        height={200}
                                        className="nv-resource-card__image"
                                    />
                                </div>
                                <div className="nv-resource-card__body">
                                    <h3 className="nv-resource-card__title">{p.title}</h3>
                                    <p className="nv-resource-card__text">{p.body}</p>
                                    <Link href={p.href} className="nv-resource-card__link">
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Trusted Partners ── */}
            <section className="section" style={{ paddingTop: 0, paddingBottom: '56px' }}>
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
        </>
    )
}
