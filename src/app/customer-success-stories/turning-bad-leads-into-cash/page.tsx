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

export default function TurningBadLeadsPage() {
    return (
        <>
            {/* ── Hero: gradient bg, tag + title + intro paragraphs ── */}
            <section className="csd-hero">
                <div className="container">
                    <div className="csd-hero__inner">
                        <p className="csd-hero__tag">No More Paying For Bad Leads</p>
                        <h1 className="csd-hero__title">Turning Bad Leads into Cash</h1>

                        <p className="csd-challenge__body">
                            There are several costs associated with having bad marketing leads in your contact
                            database. Often, we break these down in terms of direct costs, such as undelivered
                            direct mail or the labor-intensive cost of pursuing unproductive leads, as well as
                            indirect costs such as brand damage and reduced customer satisfaction.
                        </p>
                        <p className="csd-challenge__body">
                            There is one other cost that needs to be considered as well: the cost of the lead
                            (CPL) itself. Many firms have marketing strategies that revolve around contacting
                            prospects from purchased lead lists, and these purchased lists represent a major
                            cost in sales and marketing budgets. In this case study, we look at how using our
                            services helped one of our clients identify bad leads, leverage lead quality to
                            negotiate better rates with their list provider and save a substantial amount of
                            money upstream, while avoiding the downstream costs of bad leads.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Centered pull-quote ── */}
            <section className="csd-pull-quote">
                <div className="container">
                    <p className="csd-pull-quote__mark">&ldquo;</p>
                    <p className="csd-pull-quote__text">
                        Service Objects&rsquo; Lead Validation - International identified over 12% of leads
                        were bad in a single list purchase. Using these results allowed us to demonstrate the
                        poor quality of a portion of our leads and negotiate a $16,000 refund with our list
                        provider.
                    </p>
                </div>
            </section>

            {/* ── Article body ── */}
            <section className="csd-article">
                <div className="container">
                    <div className="csd-article__inner">

                        {/* Section 1 */}
                        <div className="csd-body-section">
                            <h2 className="csd-body-section__heading">
                                Filtering out bad leads &ndash; by the numbers
                            </h2>

                            <p className="csd-body-section__para">
                                This particular client, who remains anonymous, markets and sells their
                                industry-leading telecom services through account-based marketing, which includes
                                purchasing high-quality leads from third-party list providers. The response and
                                close rates they were seeing from these lists were under-performing and they
                                suspected that the quality of the purchased leads was the issue. With these
                                suspicions, they approached us with a sample database of 5,000 leads that they
                                had obtained at a cost of $25 per lead.
                            </p>

                            <p className="csd-body-section__para">
                                Using Service Objects&rsquo;{' '}
                                <Link href="/products" className="csd-body-link">
                                    DOTS Lead Validation - International
                                </Link>
                                {' '}service to verify the leads for legitimacy and contactability, the service
                                returned a 13% failure rate, or approximately 650 bad leads. At $25 per lead,
                                this yielded an immediate savings of over $16,000, allowing them to submit a
                                claim with the lead vendor to replace these bad leads.
                            </p>

                            <p className="csd-body-section__para">
                                By processing the entire database before using these leads for marketing, the
                                company also saved themselves the per-lead costs associated with storing these
                                bad leads in their marketing automation platform, as well as the financial,
                                human resources and reputational costs of marketing to these leads.
                            </p>

                            <p className="csd-body-section__para">
                                Based on these results, our client was confident in setting up an automated
                                workflow that relied on Lead Validation - International to flag and remove poor
                                quality leads. Below is a simple representation of the workflow they deployed.
                            </p>

                            {/* Workflow diagram */}
                            <div className="csd-workflow-img">
                                <Image
                                    src="/images/customer/leadWorkFlow.svg"
                                    alt="Lead validation workflow diagram"
                                    width={680}
                                    height={560}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <p className="csd-figure-caption">Figure 1. Lead workflow process</p>

                            <p className="csd-body-section__para">
                                It is worth pointing out that this process saved a considerable amount of money
                                before even getting to the point of assessing the viability of these leads as
                                sales prospects. Leads that passed the validation process entered this firm&rsquo;s
                                marketing funnel, where prospects who did not respond to at least three contact
                                attempts were discarded on the client side. By filtering out leads with bad
                                contact information or potential fraud, the ROI of these good leads was optimized.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="csd-body-section">
                            <h2 className="csd-body-section__heading">
                                Going beyond validation - implementation support
                            </h2>

                            <p className="csd-body-section__para">
                                Another key aspect of this case study was the importance of good implementation
                                support. Our product experts quickly identified and helped fix some early issues
                                where the entire lead payload was not being validated, and only some contact
                                information was being checked. Fixing these issues not only increased the number
                                of failed leads detected, but also prevented some important consequences: part of
                                the Lead Validation - International service is to check for email address
                                deliverability, saving the client from emailing to bad addresses and risking
                                possible blacklisting.
                            </p>

                            <p className="csd-body-section__para">
                                Lead Validation - International represents a convenient, bundled process to ensure
                                that leads are viable. It cross-validates each contact data point and device
                                against hundreds of authoritative data sources, providing quantitative Certainty
                                and Quality scores as well as correcting and appending accurate data where needed.
                                It provides a one-stop solution for lead data from either the US or over 250
                                countries worldwide, together with Service Objects&rsquo; 24/7/365 customer support
                                and guaranteed 99.999% uptime.
                            </p>

                            <p className="csd-body-section__para">
                                To learn more about how you can save real money and improve the ROI of your lead
                                generation efforts,{' '}
                                <Link href="/contact-us" className="csd-body-link">contact us</Link>
                                {' '}for a free product demonstration and a complimentary trial license &ndash; our
                                friendly and knowledgeable data quality experts are always happy to help.
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
