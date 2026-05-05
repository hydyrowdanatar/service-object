export default function AboutSolution() {
    const challenges = [
        'Inaccurate deliveries are leading to lost revenue',
        'Data needs to be standardized for compliance',
        'Need to eliminate fraud',
        'Sales and marketing leads are incomplete',
        'Want additional insights on customers and prospects',
        'Marketing automation and CRM platforms need to be optimized',
    ]

    return (
        <section className="about-solution section section--alt">
            <div className="container about-solution__inner">
                <div className="about-solution__block">
                    <h2 className="about-solution__title">Our Solution</h2>
                    <p className="about-solution__text">
                        A company&apos;s customer database is one of its most important and irreplaceable assets,
                        often representing years of effort and expense. Businesses can reduce costs, improve
                        marketing, minimize fraud, and more by validating customer data at every collection
                        point, whether online, at a call center, or in a brick-and-mortar store.
                    </p>
                    <p className="about-solution__text">
                        This is Service Objects&apos; specialty–helping businesses reap maximum rewards from
                        their hard-won customer contacts.
                    </p>
                </div>

                <div className="about-solution__block">
                    <h2 className="about-solution__title">Cleanse, Validate and Enhance Contact Data</h2>
                    <p className="about-solution__text">
                        Our tools validate and cross-verify a contact&apos;s business, name, location, phone,
                        email address and device against hundreds of authoritative data-sources.
                    </p>
                    <p className="about-solution__text about-solution__text--bold">
                        We help our customers with the following challenges:
                    </p>
                    <ul className="about-solution__list">
                        {challenges.map((item) => (
                            <li key={item} className="about-solution__item">
                                <span className="about-solution__bullet" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}