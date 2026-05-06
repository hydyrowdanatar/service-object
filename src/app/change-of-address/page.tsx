import Image from 'next/image'
import Link from 'next/link'
import { clientLogos } from '@/data/homeData'

const stayFeatures = [
    {
        heading: 'Streamline Address Management with NCOA Live',
        body: 'Your customers and prospects are constantly moving, posing a significant challenge in delivering essential communications and packages. NCOA Live tackles this issue by detecting address changes in real-time, providing you with the updated address, while verifying and formatting addresses to USPS standards.',
    },
    {
        heading: 'Boost Deliverability by Keeping Addresses Updated',
        body: 'Increase mail deliverability by up to 400% through maintaining accurate and current contact addresses in your customer management platform.',
    },
    {
        heading: 'Streamline Mailing Operations',
        body: 'By standardizing and formatting addresses according to USPS guidelines, NCOA Live simplifies your mailing processes. This ensures compliance with postal regulations, reduces manual effort, and potentially qualifies you for postal discounts, resulting in cost savings for your business.',
    },
]

const howSteps = [
    {
        title: 'Address Input: Validated & Corrected',
        body: 'Validate and correct addresses before checking for changes to ensure high match rates.',
    },
    {
        title: 'Returns Change of Address Status & New Address',
        body: 'Addresses are returned with change status codes and a new address is provided in case of a change.',
    },
    {
        title: 'Provides ZIP+4, Carrier Route & Barcode Data',
        body: 'Provides essential USPS data points to meet USPS Move-Update standards and maximize postage discounts.',
    },
    {
        title: 'Efficient Data Processing with Parallel API Integration',
        body: 'Set up parallel processing to swiftly handle millions of records through our API.',
    },
]

const reliabilityStats = [
    { value: '99.999%', label: 'Uptime Guarantee' },
    { value: '24/7/365', label: 'Customer Support' },
    { value: 'Dedicated', label: 'Support Engineers' },
]

const featurePairs = [
    {
        title: 'Nearly a Million Weekly Address Changes',
        bodies: [
            'Address Detective adeptly reconstructs addresses, even with partial inputs, ensuring accuracy, standardization, and deliverability. Elevate your business efficiency, sidestepping expensive shipping, mailing, and customer support hurdles.',
        ],
        img: '/images/change-address/nearlyMillon.jpg',
        imgAlt: 'Nearly a million weekly address changes',
        imgRight: true,
    },
    {
        title: 'Maximize Postal Discounts with NCOA Live',
        bodies: [
            'NCOA Live validates and corrects each address to USPS standards with our certified Address Validation engine, boosting change of address match rates and ensuring eligibility for USPS postal discounts. Our service also meets USPS Move-Update requirements, qualifying your mailings for Standard and First-Class Mail discounts.',
        ],
        img: '/images/change-address/maximizePostal.png',
        imgAlt: 'Maximize postal discounts',
        imgRight: false,
    },
    {
        title: 'Continually Updated for the Freshest Data',
        bodies: [
            'Every week, the USPS updates its database with nearly a million changes of addresses. NCOA Live is among the few real-time services that continuously sync with these updates. Our service guarantees that the residential and business addresses in your customer management system remain as current and precise as possible.',
        ],
        img: '/images/solutions/fixing-bad-addresses.jpg',
        imgAlt: 'Continually updated address data',
        imgRight: true,
    },
]

const essentialItems = [
    {
        title: 'Maintaining Customer Data Accuracy',
        body: 'Accurate data is essential for any Customer Data Validation strategy. NCOA Live verifies customer addresses using current USPS change of address data, updating addresses for customers who have moved to maintain database accuracy.',
    },
    {
        title: 'Reducing Costs and Increasing Efficiency',
        body: 'Undeliverable mail and shipments resulting from outdated addresses increase operational costs. NCOA Live reduces these costs by ensuring address accuracy, minimizing mail returns and failed deliveries. This efficiency not only saves money but also streamlines operational processes.',
    },
    {
        title: 'Enhancing Data Reliability',
        body: 'Reliable data is vital for informed business decisions and effective customer communication. Updating address information regularly with NCOA Live ensures data reliability, crucial for operations like marketing, logistics, and customer service.',
    },
    {
        title: 'Ensuring Compliance',
        body: 'Keeping customer data up-to-date is a common requirement for regulatory compliance across many industries. NCOA Live aids businesses in remaining compliant with these regulations, thereby averting potential legal and financial penalties.',
    },
    {
        title: 'Improving Customer Engagement and Experience',
        body: 'Accurate and current addresses enhance customer engagement. When businesses possess correct addresses, they ensure prompt and precise delivery of products, services, and communications. This efficiency is pivotal for fostering trust and satisfaction among customers, thereby enhancing overall customer experience and loyalty.',
    },
    {
        title: 'Facilitating Data Integration and Management',
        body: 'In the realm of data management, NCOA Live ensures the perpetual accuracy of the address component within customer data. This precision is vital during the integration of diverse data sources or when utilizing customer data across multiple departments within an organization.',
    },
    {
        title: 'Supporting Marketing and Sales Efforts',
        body: 'In marketing and sales, accurate address data enables effective targeting of the right audience. NCOA Live supports these endeavors by guaranteeing that promotional materials, catalogs, and other communications reach their intended recipients.',
    },
    {
        title: 'Customer Data Validation Strategy',
        body: 'NCOA Live plays a crucial role in a Customer Data Validation Strategy, ensuring the accuracy and reliability of address data. It goes beyond merely updating addresses; it influences customer engagement, operational efficiency, compliance, and overall data management strategy. Thus, it is an indispensable tool for businesses prioritizing data quality and customer satisfaction.',
    },
]

const resources = [
    {
        title: 'Developer Resources',
        body: 'Access developer guides, sample code and data for quick API integration.',
        img: '/images/solutions/understanding-customer-data-validation.jpg',
        href: '/developers',
    },
    {
        title: 'Free Trial Key',
        body: 'Test the service for free with 500 complimentary transactions.',
        img: '/images/solutions/increasing-productivity.jpg',
        href: '/demo-request',
    },
    {
        title: 'Talk to our Experts',
        body: 'See firsthand how our global Customer Data Validation services can improve your business.',
        img: '/images/solutions/managing-fraud.jpg',
        href: '/talk-to-an-expert',
    },
]

export default function ChangeOfAddressPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="gac-hero">
                <div className="container">
                    <p className="gac-hero__tag">DOTS NCOA Live</p>
                    <h1 className="gac-hero__title">For Addresses on the Move</h1>
                    <p className="gac-hero__desc">
                        In the U.S., 30 to 40 million residential and business moves happen each year. This
                        increases the likelihood of losing track of customers, clients, or prospects. NCOA
                        Live, our real-time change of address service, keeps your customer and prospect
                        records accurate and up-to-date.
                    </p>
                    <Link href="/demo-request" className="gac-hero__btn">
                        Schedule a Demo
                    </Link>
                </div>
            </section>

            {/* ── Trusted Partners ── */}
            <section className="gac-partners">
                <div className="container">
                    <p className="gac-partners__label">Our Trusted Partners</p>
                    <div className="gac-partners__logos">
                        {clientLogos.map((logo) => (
                            <Image
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                width={110}
                                height={44}
                                style={{ objectFit: 'contain' }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stay in Touch with NCOA Live ── */}
            <section className="gac-suggestor">
                <div className="container">
                    <h2 className="gac-suggestor__heading">Stay in touch with NCOA Live</h2>
                    <div className="gac-suggestor__grid">
                        <div className="gac-suggestor__img">
                            <Image
                                src="/images/change-address/stayInTouch.png"
                                alt="Family moving with NCOA Live address tracking"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            {stayFeatures.map((f) => (
                                <div key={f.heading} className="gac-feat-item">
                                    <h3 className="gac-feat-item__heading">{f.heading}</h3>
                                    <p className="gac-feat-item__body">{f.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How NCOA Live Works ── */}
            <section className="gac-how">
                <div className="container">
                    <h2 className="gac-how__heading">How NCOA Live Works</h2>
                    <div className="gac-how__grid">
                        {/* Steps + PAF */}
                        <div>
                            {howSteps.map((step) => (
                                <div key={step.title} className="gac-how-step">
                                    <h4 className="gac-how-step__title">{step.title}</h4>
                                    <p className="gac-how-step__body">{step.body}</p>
                                </div>
                            ))}
                            <div className="coa-paf">
                                <Link href="#" className="coa-paf__link">
                                    Download the Processing Acknowledgement Form (PAF)
                                </Link>
                                <p className="coa-paf__note">
                                    Note: The USPS requires a completed PAF with ZIP+4 and{' '}
                                    <Link href="#" style={{ color: 'var(--color-brand)' }}>NAICS</Link>
                                    {' '}before accessing any change of address data.
                                </p>
                            </div>
                        </div>

                        {/* Before / After NCOA image */}
                        <div className="coa-ncoa-img">
                            <Image
                                src="/images/change-address/ncoa.png"
                                alt="NCOA Live before and after address validation"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
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

            {/* ── Features & Benefits ── */}
            <section className="gac-features">
                <div className="container">
                    <h2 className="gac-features__heading">Features and Benefits of NCOA Live</h2>

                    {featurePairs.map((pair) => (
                        <div
                            key={pair.title}
                            className="gac-pair"
                            style={pair.imgRight ? {} : { direction: 'rtl' }}
                        >
                            <div style={{ direction: 'ltr' }}>
                                <h3 className="gac-pair__text-title">{pair.title}</h3>
                                {pair.bodies.map((b, i) => (
                                    <p key={i} className="gac-pair__text-body">{b}</p>
                                ))}
                            </div>
                            <div className="gac-pair__img" style={{ direction: 'ltr' }}>
                                <Image
                                    src={pair.img}
                                    alt={pair.imgAlt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Essential: Customer Data Validation ── */}
            <section className="coa-essential">
                <div className="container">
                    <h2 className="coa-essential__heading">
                        Essential: Customer Data Validation with Change of Address
                    </h2>
                    <p className="coa-essential__intro">
                        NCOA Live, Service Objects&rsquo; National Change of Address service, is essential
                        for your Customer Data Validation strategy. It ensures accurate, consistent, and
                        usable customer data, vital for smooth business operations and strong customer
                        relations. Here&rsquo;s how NCOA Live helps:
                    </p>
                    <div className="coa-essential__grid">
                        {essentialItems.map((item) => (
                            <div key={item.title}>
                                <h4 className="coa-essential-item__title">{item.title}</h4>
                                <p className="coa-essential-item__body">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="gac-cta">
                <div className="container">
                    <div className="gac-cta__inner">
                        <h2 className="gac-cta__title">
                            Ready to take the<br />next step?
                        </h2>
                        <div className="gac-cta__right">
                            <p className="gac-cta__body">
                                For more information, or to see how quickly Service Objects can deliver for
                                your team, schedule a chat with an expert today.
                            </p>
                            <Link href="/contact-us" className="gac-cta__btn">
                                Let&rsquo;s Chat &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Resources ── */}
            <section className="gac-resources">
                <div className="container">
                    <h2 className="gac-resources__heading">Resources</h2>
                    <div className="gac-resources__grid">
                        {resources.map((r) => (
                            <div key={r.title} className="gac-resource-card">
                                <div className="gac-resource-card__img">
                                    <Image
                                        src={r.img}
                                        alt={r.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 className="gac-resource-card__title">{r.title}</h3>
                                <p className="gac-resource-card__body">{r.body}</p>
                                <Link href={r.href} className="gac-resource-card__link">
                                    Learn More &rsaquo;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
