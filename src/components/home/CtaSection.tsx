import Link from 'next/link'

export default function CtaSection() {
    return (
        <section className="cta-section">
            <div className="container cta-section__inner">
                <h2>Ready to take the next step?</h2>
                <p>
                    For more information, or to see how quickly Service Objects can deliver for your business,
                    schedule a time with us today.
                </p>
                <Link href="/talk-to-an-expert" className="btn btn--white btn--lg">
                    Talk to an Expert
                </Link>
            </div>
        </section>
    )
}