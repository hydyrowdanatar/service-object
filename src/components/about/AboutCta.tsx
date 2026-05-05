import Link from 'next/link'

export default function AboutCta() {
    return (
        <section className="about-cta">
            <div className="container about-cta__inner">
                <h2 className="about-cta__title">Do you have more questions?</h2>
                <p className="about-cta__text">
                    To learn about our flexible solutions and try our products for free:
                    <br />
                    Please call us at{' '}
                    <a href="tel:+18006946269" className="about-cta__phone">
                        1-800-694-6269
                    </a>{' '}
                    or{' '}
                    <Link href="/register" className="about-cta__register">
                        create an account
                    </Link>{' '}
                    for immediate access to all 22 data validation APIs.
                </p>
                <div className="about-cta__actions">
                    <Link href="/register" className="btn btn--white btn--lg">
                        Create Free Account
                    </Link>
                    <Link href="/talk-to-an-expert" className="btn btn--outline-white btn--lg">
                        Talk to an Expert
                    </Link>
                </div>
            </div>
        </section>
    )
}