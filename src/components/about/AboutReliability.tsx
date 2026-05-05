const stats = [
    { number: '99.999%', label: 'Uptime Guarantee' },
    { number: '24/7/365', label: 'Customer Support' },
    { number: 'Dedicated', label: 'Support Engineers' },
]

export default function AboutReliability() {
    return (
        <section className="about-reliability">
            <div className="container about-reliability__inner">
                <h2 className="about-reliability__title">Experience Unmatched Reliability</h2>
                <div className="about-reliability__stats">
                    {stats.map((s) => (
                        <div key={s.label} className="reliability-stat">
                            <span className="reliability-stat__number">{s.number}</span>
                            <span className="reliability-stat__label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}