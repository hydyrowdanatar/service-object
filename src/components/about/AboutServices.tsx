import Link from 'next/link'

const services = [
    {
        title: 'Lead Validation',
        description:
            'Multi-point lead solutions cross-validate critical contact elements to ensure your global leads are accurate while providing rich customer insights.',
        href: '/products/#lead',
    },
    {
        title: 'Address Validation',
        description:
            'Address validation solutions correct, standardize and enhance your global address data to ensure they are genuine, accurate and up-to-date.',
        href: '/products/#address',
    },
    {
        title: 'Address Geocoding',
        description:
            'Address geocoding solutions use cascading logic to translate global addresses into precise geographic coordinates with up to 99.8% accuracy.',
        href: '/products/#geocoding',
    },
    {
        title: 'Phone Validation',
        description:
            'Phone validation solutions that perform reverse look-ups, append missing phone numbers and provide global phone exchange data.',
        href: '/products/#phone',
    },
    {
        title: 'Email Validation',
        description:
            'Email validation solution performs multi-step verification process to ensure global email addresses are genuine, accurate and deliverable.',
        href: '/email-validation/',
    },
    {
        title: 'Ecommerce Validation',
        description:
            'Ecommerce and tax rate solutions to support your online business and protect against fraud and improve customer satisfaction.',
        href: '/fasttax/',
    },
]

export default function AboutServices() {
    return (
        <section className="about-services section">
            <div className="container">
                <h2 className="about-services__title">
                    Service Objects offers a number of global data quality solutions, including:
                </h2>
                <div className="about-services__grid">
                    {services.map((s) => (
                        <Link key={s.title} href={s.href} className="about-service-card">
                            <h3 className="about-service-card__title">{s.title}</h3>
                            <p className="about-service-card__desc">{s.description}</p>
                            <span className="about-service-card__link">Learn more →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}