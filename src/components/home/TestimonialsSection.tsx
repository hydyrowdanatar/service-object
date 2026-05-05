'use client'
import { useState } from 'react'
import { testimonials } from '@/data/homeData'

export default function TestimonialsSection() {
    const [index, setIndex] = useState(0)
    const t = testimonials[index]

    return (
        <section className="testimonials section">
            <div className="container">
                <h2 className="section__title">What People Are Saying</h2>
                <div className="testimonial">
                    <blockquote className="testimonial__quote">
                        &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="testimonial__author">
                        <strong>{t.name}</strong>
                        <span>{t.title}</span>
                    </div>
                    <div className="testimonial__dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`dot${i === index ? ' dot--active' : ''}`}
                                onClick={() => setIndex(i)}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}