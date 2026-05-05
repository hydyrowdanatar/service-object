import Image from 'next/image'
import Link from 'next/link'
import { developerResources, developersIntro } from '@/data/developersData'
import { reliabilityStats } from '@/data/solutionsData'

export default function DevelopersPage() {
    return (
        <>
            <section className="developers-hero">
                <div className="container developers-hero__inner">
                    <p className="developers-hero__eyebrow">Developers</p>
                    <h1 className="developers-hero__title">Developers</h1>
                    <p className="developers-hero__sub">{developersIntro}</p>
                </div>
            </section>

            <section className="section developers-resources">
                <div className="container">
                    <div className="section-header--center">
                        <h2 className="developers-resources__title">Developer Resources for Contact Validation APIs</h2>
                    </div>

                    <div className="developers-grid">
                        {developerResources.map((resource) => (
                            <article key={resource.title} className="developer-tile">
                                <Image src={resource.icon} alt={resource.title} width={64} height={64} />
                                <h3 className="developer-tile__title">{resource.title}</h3>
                                <p className="developer-tile__desc">{resource.description}</p>
                                <Link href={resource.href} className="developer-tile__link">
                                    Learn more
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

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

            <section className="cta-section">
                <div className="container cta-section__inner">
                    <h2 style={{ width: '40%' }}>Ready to take the<br /> next step?</h2>
                    <div style={{ width: '60%' }}>
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
