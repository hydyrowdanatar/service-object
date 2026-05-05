import Image from 'next/image'
import { challenges } from '@/data/homeData'

export default function BusinessChallengesSection() {
    return (
        <section className="challenges section section--alt">
            <div className="container challenges__inner">
                <div className="challenges__content">
                    <h2 className="section__title">
                        Solve Business Challenges with Customer Data Validation
                    </h2>
                    <p className="section__sub">
                        At Service Objects, we understand the challenges of ensuring quality contact data,
                        and how these challenges can significantly affect your business.
                    </p>
                    <div className="challenges__list">
                        {challenges.map((c) => (
                            <div key={c.title} className="challenge-card">
                                <h3 className="challenge-card__title">{c.title}</h3>
                                <p className="challenge-card__desc">{c.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="challenges__image">
                    <Image src="/images/home/challenges.png" alt="Business Challenges" width={480} height={400} />
                </div>
            </div>
        </section>
    )
}