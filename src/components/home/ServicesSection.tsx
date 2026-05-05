import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/homeData'

export default function ServicesSection() {
    return (
        <section className="services section">
            <div className="container">
                <h2 className="section__title">Turn Customer Data Into a Competitive Advantage</h2>
                <p className="section__sub">
                    Meet each business challenge with tailored Customer Data Validation services to ensure
                    customer data accuracy and reliability.
                </p>
                <div className="services__grid">
                    {services.map((service) => (
                        <div key={service.title} className="service-card">
                            <Image src={service.icon} alt={service.title} width={60} height={60} />
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__desc">{service.description}</p>
                            <Link href={service.href} className="service-card__link">Learn more →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}