'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { clientLogos } from '@/data/homeData'
import { reliabilityStats } from '@/data/techSupportData'

const roles = [
    'Developer / Engineer',
    'IT Manager / Director',
    'Business Analyst',
    'Product Manager',
    'Sales / Marketing',
    'C-Level / Executive',
    'Other',
]

export default function ContactUsPage() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
        company: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        if (name === 'message' && value.length > 500) return
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            {/* ── Hero + Form ── */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero__head">
                        <h1 className="contact-hero__title">Contact Us</h1>
                        <p className="contact-hero__sub">
                            We&apos;re here to help! If you would like more information about Service Objects or our
                            products, please complete the form below. We will contact you within{' '}
                            <strong>90 business minutes</strong>.
                        </p>
                    </div>

                    <div className="contact-hero__inner">
                        {/* ── Form card ── */}
                        <div className="contact-form-card">
                            {submitted ? (
                                <div className="contact-success">
                                    <div className="contact-success__icon">✓</div>
                                    <h3>Thank you for reaching out!</h3>
                                    <p>A member of our team will contact you within 90 business minutes.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    {/* First / Last name */}
                                    <div className="contact-half-row">
                                        <div className="contact-field-group">
                                            <label className="contact-label" htmlFor="cf-fname">
                                                First Name <span className="contact-required">*</span>
                                            </label>
                                            <input
                                                id="cf-fname"
                                                type="text"
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                required
                                                className="contact-input"
                                            />
                                        </div>
                                        <div className="contact-field-group">
                                            <label className="contact-label" htmlFor="cf-lname">
                                                Last Name <span className="contact-required">*</span>
                                            </label>
                                            <input
                                                id="cf-lname"
                                                type="text"
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                required
                                                className="contact-input"
                                            />
                                        </div>
                                    </div>

                                    {/* Email / Phone */}
                                    <div className="contact-half-row">
                                        <div className="contact-field-group">
                                            <label className="contact-label" htmlFor="cf-email">
                                                Your Email <span className="contact-required">*</span>
                                            </label>
                                            <input
                                                id="cf-email"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                className="contact-input"
                                            />
                                        </div>
                                        <div className="contact-field-group">
                                            <label className="contact-label" htmlFor="cf-phone">
                                                Phone <span className="contact-required">*</span>
                                            </label>
                                            <input
                                                id="cf-phone"
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                className="contact-input"
                                            />
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div className="contact-field-group">
                                        <label className="contact-label" htmlFor="cf-role">
                                            What is your Role? <span className="contact-required">*</span>
                                        </label>
                                        <select
                                            id="cf-role"
                                            name="role"
                                            value={form.role}
                                            onChange={handleChange}
                                            required
                                            className="contact-input contact-select"
                                        >
                                            <option value="">Select One</option>
                                            {roles.map(r => (
                                                <option key={r} value={r}>{r}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Company */}
                                    <div className="contact-field-group">
                                        <label className="contact-label" htmlFor="cf-company">
                                            Company <span className="contact-required">*</span>
                                        </label>
                                        <input
                                            id="cf-company"
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            required
                                            className="contact-input"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="contact-field-group">
                                        <label className="contact-label" htmlFor="cf-message">
                                            How can we help? <span className="contact-required">*</span>
                                        </label>
                                        <textarea
                                            id="cf-message"
                                            name="message"
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            className="contact-input contact-textarea"
                                        />
                                        <span className="contact-char-count">
                                            {form.message.length} of 500 max characters
                                        </span>
                                    </div>

                                    <button type="submit" className="contact-submit">
                                        SUBMIT
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* ── Sidebar ── */}
                        <aside className="contact-sidebar">
                            <div className="contact-sidebar-card">
                                <h3 className="contact-sidebar-card__title">Technical Support</h3>
                                <p className="contact-sidebar-card__body">
                                    For technical support, issues, please contact us on our technical support page.
                                </p>
                                <Link href="/support/tech-support" className="contact-sidebar-card__btn">
                                    Support
                                </Link>
                            </div>
                            <div className="contact-sidebar-card">
                                <h3 className="contact-sidebar-card__title">Update Account Info</h3>
                                <p className="contact-sidebar-card__body">
                                    Customers can update their information on Update Account Information page.
                                </p>
                                <Link href="/account" className="contact-sidebar-card__btn">
                                    Update My Info
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ── Contact Information ── */}
            <section className="section contact-info">
                <div className="container">
                    <h2 className="contact-info__title">Contact Information</h2>
                    <div className="contact-info__inner">
                        <div className="contact-map">
                            <iframe
                                title="Service Objects Office Location"
                                src="https://maps.google.com/maps?q=803+Chapala+St%2C+Santa+Barbara%2C+CA+93101-3201%2C+USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="260"
                                style={{ border: 0, borderRadius: '10px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="contact-details">
                            <div className="contact-details__group">
                                <p className="contact-details__heading">Office Location</p>
                                <p>803 Chapala St</p>
                                <p>Santa Barbara, CA 93101-3201</p>
                            </div>
                            <div className="contact-details__group">
                                <p className="contact-details__heading">Phone</p>
                                <p>Int&apos;l:{' '}
                                    <a href="tel:18059631700" className="contact-details__link">1-805-963-1700</a>
                                </p>
                                <p>US:{' '}
                                    <a href="tel:18006946269" className="contact-details__link">1-800-694-6269</a>
                                </p>
                                <p>UK:{' '}
                                    <a href="tel:+441244646315" className="contact-details__link">+44 1244 646315</a>
                                </p>
                            </div>
                            <div className="contact-details__group">
                                <p className="contact-details__heading">Business Hours</p>
                                <p>Monday &ndash; Friday</p>
                                <p>8:00am to 12:00pm, 1:00pm to 5:00pm PT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Trusted Partners ── */}
            <section className="section" style={{ paddingTop: 0, paddingBottom: '56px' }}>
                <div className="container">
                    <div className="about-partners">
                        <p className="about-partners__label">Our Trusted Partners</p>
                    </div>
                    <div className="trusted__logos" style={{ justifyContent: 'center' }}>
                        {clientLogos.map(logo => (
                            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={50} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Reliability stats ── */}
            <section className="solutions-reliability section section--alt">
                <div className="container">
                    <div className="section-header--center">
                        <h2 className="section__title">Experience Unmatched Reliability</h2>
                    </div>
                    <div className="solutions-reliability__grid">
                        {reliabilityStats.map(stat => (
                            <article key={stat.label} className="solutions-reliability__item">
                                <p className="solutions-reliability__value">{stat.value}</p>
                                <p className="solutions-reliability__label">{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
