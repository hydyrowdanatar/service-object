import Image from 'next/image'
import Link from 'next/link'

const storyCards = [
    {
        company: 'USPLATE',
        title: 'Accurate Addresses Are Mission-Critical for Insurance Companies',
        img: '/images/customer/customerStory1.jpg',
        href: '#',
    },
    {
        company: 'ALYCE',
        title: 'Address Validation Enables Engagement Between Companies and Their Clients',
        img: '/images/solutions/increasing-productivity.jpg',
        href: '#',
    },
    {
        company: 'TENCATE GEOSYNTHETICS',
        title: 'Leveraging the Power of DOTS FastTax API in a Legacy ERP System',
        img: '/images/customer/customerStory2.jpg',
        href: '#',
    },
    {
        company: 'AMERICAN MEADOWS',
        title: 'Improving Marketing ROI with DOTS Phone Append',
        img: '/images/solutions/managing-fraud.jpg',
        href: '#',
    },
    {
        company: 'NAVIENT',
        title: 'Navient Uses DOTS Lead Validation to Improve Lead Quality',
        img: '/images/solutions/leveraging-business-intelligence.jpg',
        href: '#',
    },
    {
        company: 'SIEVERT LARSEN & ASSOCIATES',
        title: 'Real Estate Efficiency Through Address Validation',
        img: '/images/solutions/fixing-bad-addresses.jpg',
        href: '#',
    },
]

const testimonials = [
    {
        company: 'ASH BROKERAGE',
        iconBg: '#2d6a2d',
        iconLetter: 'A',
        color: '#2d6a2d',
        paragraphs: [
            `"I love working with Service Objects. The knowledgeable team provided top-notch customer service and guidance to get our Marketo instance running smoothly with DOTS Email Validation, and they were readily available for us when we expanded our use of the service to our wider database.`,
            `We use Email Validation to validate our customers' email addresses in real-time as they fill out forms so we can ensure deliverability and filter out mistakes and honeypots. Email Validation is something we will continue to run within Marketo well in to the future because of Service Objects' excellent customer service and easy connectivity."`,
        ],
        author: 'Troy Vian',
        role: 'Digital Media Specialist, Ash Brokerage',
    },
    {
        company: 'DATAVEILLANCE',
        iconBg: '#003d7a',
        iconLetter: 'D',
        color: '#003d7a',
        paragraphs: [
            `"I have been teaching law enforcement professionals for several years and one tool I always recommend to my students is Service Objects' DOTS Geophone Plus, a telephone verification and reverse phone lookup API solution. There are many occasions during the investigative process when we only have phone numbers and need to quickly find additional information such as phone carrier or an address associated with a number. DOTS GeoPhone Plus is hands down the best product on the market and has the best accuracy rate of any of the solutions I have tried. I can't recommend it highly enough."`,
        ],
        author: 'Michael Gordon',
        role: 'CEO, DataVeillance',
    },
]

export default function CustomerSuccessStoriesPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="cs-hero">
                <div className="container cs-hero__inner">
                    <h1 className="cs-hero__title">Customer Success Stories</h1>
                    <p className="cs-hero__sub">
                        Over 2,800 customers rely on us every day to be the solution for their data quality challenges.
                        Meet some of our customers and read what they have to say about us.
                    </p>
                </div>
            </section>

            {/* ── Story Cards ── */}
            <section className="cs-cards">
                <div className="container">
                    <div className="cs-cards__grid">
                        {storyCards.map((card) => (
                            <Link href={card.href} key={card.company} className="cs-card">
                                <div className="cs-card__body">
                                    <p className="cs-card__company">{card.company}</p>
                                    <h3 className="cs-card__title">{card.title}</h3>
                                </div>
                                <div className="cs-card__img">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured Testimonial — Ethan Allen ── */}
            <section className="cs-featured">
                <div className="cs-featured__quote">
                    <p className="cs-featured__company">
                        ETHAN<br />ALLEN
                    </p>
                    <p className="cs-featured__text">
                        &ldquo;Accurate shipping addresses are critical to our business, and Service Objects&rsquo;
                        Address Validation services play a key role in verifying correct contact data throughout
                        North America for Ethan Allen. Plus everyone at Service Objects is easy to work with,
                        with great technical support and a smooth implementation process.&rdquo;
                    </p>
                    <p className="cs-featured__author">Deborah McManus</p>
                    <p className="cs-featured__role">Digital Project Manager, Ethan Allen</p>
                </div>
                <div className="cs-featured__img">
                    <Image
                        src="/images/customer/customerStory1.jpg"
                        alt="Ethan Allen showroom"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </section>

            {/* ── Text Testimonials ── */}
            <section className="cs-testimonials">
                <div className="container">
                    <div className="cs-testimonials__grid">
                        {testimonials.map((t) => (
                            <div key={t.author}>
                                <div className="cs-testimonial__logo-row">
                                    <span
                                        className="cs-testimonial__icon"
                                        style={{ background: t.iconBg }}
                                    >
                                        {t.iconLetter}
                                    </span>
                                    <span
                                        className="cs-testimonial__company"
                                        style={{ color: t.color }}
                                    >
                                        {t.company}
                                    </span>
                                </div>
                                {t.paragraphs.map((para, i) => (
                                    <p key={i} className="cs-testimonial__text">{para}</p>
                                ))}
                                <p className="cs-testimonial__author">{t.author}</p>
                                <p className="cs-testimonial__role">{t.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cta-section">
                <div className="container cta-section__inner">
                    <h2 style={{ width: '40%' }}>
                        Ready to take the<br /> next step?
                    </h2>
                    <div style={{ width: '60%' }}>
                        <p>
                            For more information, or to see how quickly Service Objects can deliver for your team,
                            schedule a chat with an expert today.
                        </p>
                        <Link href="/contact-us" className="cta-section__btn">
                            Let&rsquo;s Chat
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
