import Image from 'next/image'
import Link from 'next/link'

const reliabilityStats = [
    { value: '99.999%', label: 'Uptime Guarantee' },
    { value: '24/7/365', label: 'Customer Support' },
    { value: 'Dedicated', label: 'Support Engineers' },
]

const relatedStories = [
    {
        company: 'USPLATE',
        title: 'Accurate Addresses Are Mission-Critical for Insurance Companies',
        img: '/images/customer/customerStory1.jpg',
        href: '/customer-success-stories',
    },
    {
        company: 'ALYCE',
        title: 'Address Validation Enables Engagement Between Companies and Their Clients',
        img: '/images/solutions/increasing-productivity.jpg',
        href: '/customer-success-stories',
    },
    {
        company: 'TENCATE GEOSYNTHETICS',
        title: 'Leveraging the Power of DOTS FastTax API in a Legacy ERP System',
        img: '/images/customer/customerStory2.jpg',
        href: '/customer-success-stories',
    },
]

export default function ThomasvillePage() {
    return (
        <>
            {/* ── Hero: gradient bg, centered tag + title + Challenge section ── */}
            <section className="csd-hero">
                <div className="container">
                    <div className="csd-hero__inner">
                        <p className="csd-hero__tag">City of Thomasville, GA</p>
                        <h1 className="csd-hero__title">
                            Address Validation data ensures accounts are set up correctly
                        </h1>

                        <h2 className="csd-challenge__heading">The Challenge</h2>
                        <p className="csd-challenge__body">
                            Today, the City of Thomasville offers residents a variety of essential services and is so
                            committed to their connection to the community that their motto, The Power of Community.
                            The Power of Service, is incorporated into every customer interaction.
                        </p>
                        <p className="csd-challenge__body">
                            Part of this commitment is to provide a high level of service in the most efficient ways
                            possible. To achieve this, the City turned to Service Objects&rsquo; data quality solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Centered pull-quote ── */}
            <section className="csd-pull-quote">
                <div className="container">
                    <p className="csd-pull-quote__mark">&ldquo;</p>
                    <p className="csd-pull-quote__text">
                        Service Objects Address Validation solutions run so seamlessly behind the scenes that
                        we don&rsquo;t even think or worry about them.
                    </p>
                    <p className="csd-pull-quote__author">Melissa Donaldson</p>
                    <p className="csd-pull-quote__role">Applications Product Manager, City of Thomasville</p>
                </div>
            </section>

            {/* ── Full-width city photo ── */}
            <div className="container">
                <div className="csd-city-img">
                    <Image
                        src="/images/solutions/understanding-customer-data-validation.jpg"
                        alt="City of Thomasville, Georgia"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* ── Article body: Solution + Result ── */}
            <section className="csd-article">
                <div className="container">
                    <div className="csd-article__inner">

                        {/* The Solution */}
                        <div className="csd-body-section">
                            <h2 className="csd-body-section__heading">The Solution</h2>
                            <p className="csd-body-section__para">
                                Thomasville has their own utility billing software they have been using for many years.
                                They use Service Objects&rsquo;{' '}
                                <Link href="/products" className="csd-body-link">DOTS Address Validation</Link>
                                {' '}to ensure that customer addresses are correct when new accounts are set up. Not
                                only is the accuracy of the data verified, it also ensures that data entered is
                                consistently formatted in the same manner. Thomasville also uses the get city/state
                                functionality when customers enter in their zip code to make the process of setting up
                                a new account as easy as possible.
                            </p>
                            <p className="csd-body-section__para">
                                In addition to Address Validation, Thomasville uses the features in DOTS Address
                                Validation Plus. Using the Census data enables the City to comply with state and
                                federal regulations such as reporting commercial customers who are operating in
                                certain zones.
                            </p>
                            <p className="csd-body-section__para">
                                Between the two validation solutions, Thomasville validates thousands of transactions
                                every month.
                            </p>
                            <p className="csd-body-section__para">
                                &ldquo;Service Objects Address Validation solutions run so seamlessly behind the scenes
                                that we don&rsquo;t even think or worry about them,&rdquo; said Melissa Donaldson,
                                Applications Product Manager, City of Thomasville. &ldquo;I can&rsquo;t remember when
                                we had to call the support center for help!&rdquo;
                            </p>
                        </div>

                        {/* The Result */}
                        <div className="csd-body-section">
                            <h2 className="csd-body-section__heading">The Result</h2>
                            <p className="csd-body-section__para">
                                Since implementing DOTS Address Validation, Thomasville gets 50% less returned mail,
                                saving them &ndash; and taxpayers &ndash; a significant amount of money and time.
                                Customers are also spared a good deal of frustration over bills being mailed to the
                                wrong location, and the chance of having a service interruption due to lack of payment
                                has also been reduced.
                            </p>
                            <p className="csd-body-section__para">
                                &ldquo;The City of Thomasville has been so happy with the pricing, security and
                                reliability of Service Objects&rsquo; Address Validation solutions that we are
                                currently evaluating expanding our use into other products to help us verify other
                                customer data points and further enhance the customer experience,&rdquo; said Melissa.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Related stories ── */}
            <section className="csd-related">
                <div className="container">
                    <p className="csd-related__label">More Customer Stories</p>
                    <div className="csd-related__grid">
                        {relatedStories.map((story) => (
                            <Link href={story.href} key={story.company} className="csd-related__card">
                                <div className="csd-related__card-body">
                                    <p className="csd-related__card-company">{story.company}</p>
                                    <h3 className="csd-related__card-title">{story.title}</h3>
                                </div>
                                <div className="csd-related__card-img">
                                    <Image
                                        src={story.img}
                                        alt={story.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <span className="csd-related__card-readmore">Read More</span>
                            </Link>
                        ))}
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
        </>
    )
}
