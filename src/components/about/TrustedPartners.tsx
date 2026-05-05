import Image from 'next/image'

const partners = [
    { src: '/images/clients/amazon.webp', alt: 'Amazon' },
    { src: '/images/clients/microsoft.webp', alt: 'Microsoft' },
    { src: '/images/clients/mastercard.png', alt: 'Mastercard' },
    { src: '/images/clients/amex.png', alt: 'AMEX' },
    { src: '/images/clients/sony.png', alt: 'Sony' },
    { src: '/images/clients/verizon.png', alt: 'Verizon' },
    { src: '/images/clients/visa.png', alt: 'Visa' },
    { src: '/images/clients/xerox.png', alt: 'Xerox' },
]

export default function TrustedPartners() {
    return (
        <section className="about-partners section--alt">
            <div className="container about-partners__inner">
                <p className="about-partners__label">Our Trusted Partners</p>
                <div className="about-partners__logos">
                    {partners.map((p) => (
                        <Image key={p.alt} src={p.src} alt={p.alt} width={120} height={48} />
                    ))}
                </div>
            </div>
        </section>
    )
}