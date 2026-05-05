import Image from 'next/image'
import { clientLogos, trustStats } from '@/data/homeData'

export default function TrustedBySection() {
    return (
        <section className="trusted section">
            <div className="container">
                <h2 className="section__title">Trusted by Over 3,000 Global Enterprises</h2>
                <p className="section__sub">
                    Global enterprises trust us for genuine, accurate, and up-to-date customer contact data validation.
                </p>
                <div className="trusted__stats">
                    {trustStats.map((stat) => (
                        <div key={stat} className="trusted__stat">
                            <span className="trusted__check">✓</span>
                            {stat}
                        </div>
                    ))}
                </div>
                <div className="trusted__logos">
                    {clientLogos.map((logo) => (
                        <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={50} />
                    ))}
                </div>
            </div>
        </section>
    )
}