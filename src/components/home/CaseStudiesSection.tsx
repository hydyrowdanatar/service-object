import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/data/homeData'

export default function CaseStudiesSection() {
    return (
        <section className="case-studies section section--alt">
            <div className="container case-studies__inner">
                <div className="case-studies__left">
                    <h2 className="section__title">Real Results: See the Impact of Accurate Customer Data</h2>
                    <p className="section__sub">Explore how we&apos;ve driven significant results for our clients.</p>
                    {caseStudies.map((cs) => (
                        <div key={cs.title} className="case-study-card">
                            <h3 className="case-study-card__title">{cs.title}</h3>
                            <p>{cs.description}</p>
                            <Link href={cs.href} className="case-study-card__link">Read the Case Study →</Link>
                        </div>
                    ))}
                </div>
                <div className="case-studies__image">
                    <Image src="/images/home/results.png" alt="Results" width={400} height={460} />
                </div>
            </div>
        </section>
    )
}