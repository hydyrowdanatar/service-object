import Image from 'next/image'

export default function AboutProblem() {
    return (
        <section className="about-problem section">
            <div className="container about-problem__inner">
                <div className="about-problem__text">
                    <h2 className="about-problem__heading">
                        Businesses rely on customer data for marketing, shipping, lead generation, fraud
                        prevention, and other purposes. However, it is estimated that{' '}
                        <span className="about-problem__highlight">15–25% of contact data</span> is inaccurate,
                        incomplete, fraudulent, or out-of-date.
                    </h2>
                </div>
                <div className="about-problem__image">
                    <Image
                        src="/images/about/office.png"
                        alt="Service Objects Office"
                        width={560}
                        height={380}
                        style={{ borderRadius: 12, objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    )
}