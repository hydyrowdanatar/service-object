import Image from 'next/image'
import Link from 'next/link'
import {reliabilityStats, solutionItems, solutionsIntro} from '@/data/solutionsData'

export default function SolutionsPage() {
    return (
        <>
            <section className="solutions-hero">
                <div className="container solutions-hero__inner">
                    <p className="solutions-hero__eyebrow">Solutions</p>
                    <h1 className="solutions-hero__title">Business Solutions</h1>
                    <p className="solutions-hero__sub">{solutionsIntro}</p>
                </div>
            </section>

            <section className="section solutions-learn">
                <div className="container">
                    <div className="section-header--center">
                        <h2 className="solutions-learn__title">Learn More About Customer Data Validation</h2>
                    </div>

                    <div className="solutions-grid">
                        {solutionItems.map((solution) => (
                            <article key={solution.title} className="solution-tile">
                                <div className="solution-tile__image-wrap">
                                    <Image src={solution.image} alt={solution.title} width={380} height={180}/>
                                </div>
                                <div className="solution-tile__body">
                                    <h3 className="solution-tile__title">{solution.title}</h3>
                                    <p className="solution-tile__desc">{solution.description}</p>
                                    <Link href={solution.href} className="solution-tile__link">
                                        Learn More &rsaquo;
                                    </Link>
                                </div>
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
                                {/*<Image src={stat.icon} alt="" width={54} height={54} aria-hidden="true" />*/}
                                <p className="solutions-reliability__value">{stat.value}</p>
                                <p className="solutions-reliability__label">{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container cta-section__inner">
                    <h2 style={{width: "40%"}}>Ready to take the<br/> next step?</h2>
                    <div style={{width: "60%"}}>
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
