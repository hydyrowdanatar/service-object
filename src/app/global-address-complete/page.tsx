import Image from 'next/image'
import Link from 'next/link'
import { clientLogos } from '@/data/homeData'

const suggestorFeatures = [
    {
        heading: 'Unlocking Precise Global Address Solutions',
        body: 'Global Address Complete offers comprehensive address lookup coverage for countries worldwide, providing precision down to the apartment and suite level in most developed countries. Our authoritative data is continuously updated and synchronized with each country\'s postal authorities, guaranteeing the suggestion of the most current and accurate addresses.',
    },
    {
        heading: 'Enhancing Checkout with Accurate Address Suggestions',
        body: 'Our real-time service quickly suggests precise addresses from the initial keystroke, reducing keystrokes on digital forms by up to 80% while mitigating data entry errors by over 20%. This translates to a smoother user experience at checkout, fewer cart abandons, delivery precision, and improved customer satisfaction with our address finder.',
    },
    {
        heading: 'Real-Time Address Validation for Precision Delivery',
        body: 'Global Address Complete not only suggests addresses but also validates them at the point of entry, enabling your business to identify and rectify inaccurate address data before finalizing checkout.',
    },
]

const howSteps = [
    {
        title: 'Autocomplete Offers Potential Address Data Suggestions',
        body: 'Input keystrokes are used to predictively propose complete addresses, which users can select via a dropdown menu. Global Address Complete charges only when an address is selected, unlike services that charge per keystroke.',
    },
    {
        title: 'Validation and Delivery Indicators Provided',
        body: 'The service returns comprehensive component address details, resolution data, and Delivery Point Validation (DPV) checks for addresses ensuring accuracy and completeness.',
    },
    {
        title: 'Address-Related Location Data Retrieval',
        body: 'Returns locality and administrative area data for addresses, along with the country code and latitude/longitude coordinates.',
    },
    {
        title: 'Offering Language and Country Options for Global Addresses',
        body: 'Offers alternative language options, and optional IP-based location and country filters to refine results.',
    },
]

const reliabilityStats = [
    { value: '99.999%', label: 'Uptime Guarantee' },
    { value: '24/7/365', label: 'Customer Support' },
    { value: 'Dedicated', label: 'Support Engineers' },
]

const featurePairs = [
    {
        title: 'Global Address Coverage for 250+ Countries',
        bodies: [
            'Global Address Complete offers comprehensive address lookup coverage for countries worldwide, providing precise details down to the apartment and suite level in most developed nations.',
            'Our authoritative data undergoes continuous updates and synchronization with each country\'s postal authorities, ensuring the provision of the most current address suggestions.',
        ],
        img: '/images/global-address/countries.png',
        imgAlt: 'Global address coverage flags',
        imgRight: true,
    },
    {
        title: 'Enhance Checkout Experience with Our Address Finder',
        bodies: [
            'Our lightning-fast service suggests accurate addresses from the first keystroke, reducing the amount of typing required by up to 80% and cutting down data entry errors by more than 20%. This creates a more streamlined user experience at checkout, enhances delivery accuracy, and boosts customer satisfaction.',
        ],
        img: '/images/solutions/leveraging-business-intelligence.jpg',
        imgAlt: 'Enhance checkout experience',
        imgRight: false,
    },
    {
        title: 'Simultaneous Suggestion and Validation: Unique Address Auto-Completion Service',
        bodies: [
            'Other autocomplete tools often suggest addresses that may not exist or accept deliveries. Global Address Complete not only suggests addresses but also validates them at the point of entry, enabling your business to identify and rectify inaccurate address data before finalizing checkout.',
        ],
        img: '/images/global-address/autoComplete.png',
        imgAlt: 'Address autocomplete validation',
        imgRight: true,
    },
]

const whyItems = [
    {
        title: 'Customized Address Suggestions',
        body: 'The Address Suggestor tool is highly customizable, adjusting to your specific needs. Whether you\'re integrating it into your ecommerce platform to minimize cart abandonment or gather essential customer account information, Global Address Complete can be easily tailored to fit your requirements.',
    },
    {
        title: 'Dedicated Customer Support',
        body: 'Service Objects offers personalized, 24/7 customer support. Our team of experienced professionals is dedicated to swiftly addressing your unique needs, ensuring seamless service and your utmost satisfaction.',
    },
    {
        title: 'Real-Time Accuracy with Address Type-Ahead',
        body: 'Our Address Type-Ahead technology offers real-time suggestions, ensuring you and your customers avoid errors and maintain the precision and reliability of your contact data.',
    },
    {
        title: 'Customized Solutions for Your Business',
        body: 'We specialize in delivering solutions meticulously crafted to align with the distinct requirements of your business, ensuring optimal performance and customer satisfaction.',
    },
    {
        title: 'Seamlessly Integrating Solutions',
        body: 'Implementing our Address Suggestor is effortless and straightforward. Our tool is crafted to integrate with your existing systems, ensuring maximum efficiency. With a focus on simplicity and ease of use, our solution streamlines the implementation process.',
    },
    {
        title: 'Tailored Solutions Fueled by Global Data',
        body: 'Our services leverage extensive, trusted global data sources, providing you with unparalleled accuracy and up-to-date information to enrich and bolster your business operations.',
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

export default function GlobalAddressCompletePage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="gac-hero">
                <div className="container">
                    <p className="gac-hero__tag">DOTS Global Address Complete</p>
                    <h1 className="gac-hero__title">
                        Address Suggestions from the First Keystroke
                    </h1>
                    <p className="gac-hero__desc">
                        Global Address Complete enables visitors to quickly select an accurate address as they
                        begin typing, reducing keystrokes, preventing misspellings, and ensuring accuracy.
                        This results in a faster ecommerce checkout, improved shipping precision, and reduces
                        cart abandonment by as much as 30%.
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

            {/* ── Address Suggestor with Validation Built In ── */}
            <section className="gac-suggestor">
                <div className="container">
                    <h2 className="gac-suggestor__heading">
                        Global Address Suggestor with Address Validation Built In
                    </h2>
                    <div className="gac-suggestor__grid">
                        <div className="gac-suggestor__img">
                            <Image
                                src="/images/global-address/suggestor.png"
                                alt="Address autocomplete in action"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            {suggestorFeatures.map((f) => (
                                <div key={f.heading} className="gac-feat-item">
                                    <h3 className="gac-feat-item__heading">{f.heading}</h3>
                                    <p className="gac-feat-item__body">{f.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="gac-how">
                <div className="container">
                    <h2 className="gac-how__heading">How Global Address Complete Works</h2>
                    <div className="gac-how__grid">
                        {/* Steps */}
                        <div>
                            {howSteps.map((step) => (
                                <div key={step.title} className="gac-how-step">
                                    <h4 className="gac-how-step__title">{step.title}</h4>
                                    <p className="gac-how-step__body">{step.body}</p>
                                </div>
                            ))}
                        </div>

                        {/* Form card mockup */}
                        <div className="gac-form-card">
                            <div>
                                <label className="gac-form-label">Street Address</label>
                                <div className="gac-form-input">1360 W Canon Perdido Ste D</div>
                            </div>
                            <div>
                                <label className="gac-form-label">Street Address Line 2</label>
                                <div className="gac-form-input">&nbsp;</div>
                            </div>
                            <div>
                                <label className="gac-form-label">City / State</label>
                                <div className="gac-form-input">Santa Barbara, CA</div>
                            </div>
                            <div>
                                <label className="gac-form-label">ZIP Code</label>
                                <div className="gac-form-input">93101&ndash;8207</div>
                            </div>
                            <div className="gac-form-submit">SUBMIT</div>
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
                    <h2 className="gac-features__heading">
                        Features and Benefits of Global Address Complete
                    </h2>

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

            {/* ── Datasheet download ── */}
            <div className="gac-datasheet">
                <div className="container">
                    <p className="gac-datasheet__text">
                        Download our{' '}
                        <Link href="#" className="gac-datasheet__link">
                            Global Address Complete
                        </Link>
                        {' '}one-page datasheet{' '}
                        <span className="gac-datasheet__icon">📄</span>
                    </p>
                </div>
            </div>

            {/* ── Why Choose Service Objects ── */}
            <section className="gac-why">
                <div className="container">
                    <h2 className="gac-why__heading">
                        Why Choose Service Objects for International Address Suggestions?
                    </h2>
                    <p className="gac-why__intro">
                        In our fast-paced digital landscape, where precision and speed are paramount, Service
                        Objects shines as the top choice for your Address Suggestor requirements. Global
                        Address Complete is built to optimize address data entry processes, guaranteeing
                        unparalleled efficiency and accuracy at every stage.
                    </p>
                    <div className="gac-why__grid">
                        {whyItems.map((item) => (
                            <div key={item.title}>
                                <h4 className="gac-why-item__title">{item.title}</h4>
                                <p className="gac-why-item__body">{item.body}</p>
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
