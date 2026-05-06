'use client'

import Link from 'next/link'
import {useState} from 'react'
import {supportLinks, reliabilityStats} from '@/data/techSupportData'
import {clientLogos} from "@/data/homeData";
import Image from "next/image";

export default function TechSupportPage() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        keyType: '',
        issue: '',
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e) {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            {/* ── Hero ── */}
            <section className="solutions-hero">
                <div className="container solutions-hero__inner">
                    <p className="solutions-hero__eyebrow">Support</p>
                    <h1 className="solutions-hero__title">Customer Support</h1>
                    <p className="solutions-hero__sub">
                        We pride ourselves on customer service and tech support for effective resolutions
                        to your questions, issues and inquiries.
                    </p>
                </div>
            </section>

            {/* ── Main content: info + form ── */}
            <section className="section">
                <div className="container">
                    <div className="techsupport__inner">

                        {/* ── Left: hours + sidebar links ── */}
                        <aside className="techsupport__aside">
                            <div className="techsupport__hours-card">
                                <h2 className="techsupport__aside-title">Business Hours</h2>
                                <p className="techsupport__hours-days">Monday – Friday</p>
                                <p className="techsupport__hours-time">8:00am – 12:00pm</p>
                                <p className="techsupport__hours-time">1:00pm – 5:00pm PT</p>
                                <p className="techsupport__hours-note">
                                    A Customer Success Specialist will typically contact you within{' '}
                                    <strong>15 minutes</strong> unless you have an urgent issue that needs
                                    immediate attention.
                                </p>

                                <div className="techsupport__divider"/>

                                <h3 className="techsupport__after-title">After Hours Support</h3>
                                <p className="techsupport__after-call">
                                    Call{' '}
                                    <a href="tel:18059631700" className="techsupport__phone-link">
                                        1-805-963-1700
                                    </a>
                                </p>
                                <p className="techsupport__hours-note">
                                    Please follow the prompts for after hours support. One of our Quick
                                    Response Team members will contact you within <strong>20 minutes</strong>.
                                </p>
                            </div>

                            {/* Support nav links */}
                            <nav className="techsupport__nav">
                                <p className="techsupport__nav-title">Support Resources</p>
                                <ul className="techsupport__nav-list">
                                    {supportLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="techsupport__nav-link">
                                                <span className="techsupport__nav-label">{link.label}</span>
                                                <span className="techsupport__nav-desc">{link.desc}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>

                        {/* ── Right: form ── */}
                        <div className="techsupport__form-wrap">
                            <h2 className="techsupport__form-title">Tech Support</h2>
                            <p className="techsupport__form-sub">
                                Fill out the form below and a support specialist will reach out to you shortly.
                                Fields marked with <span style={{color: '#c0392b'}}>*</span> are required.
                            </p>

                            {submitted ? (
                                <div className="techsupport__success">
                                    <div className="techsupport__success-icon">✓</div>
                                    <h3>Thank you! Your request has been submitted.</h3>
                                    <p>A Customer Success Specialist will contact you shortly.</p>
                                </div>
                            ) : (
                                <form className="techsupport__form" onSubmit={handleSubmit} noValidate>
                                    {/* Name row */}
                                    <div className="techsupport__field-group">
                                        <label className="techsupport__label">
                                            Name <span className="techsupport__required">*</span>
                                        </label>
                                        <div className="techsupport__name-row">
                                            <div className="techsupport__field">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={form.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="techsupport__input"
                                                />
                                            </div>
                                            <div className="techsupport__field">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={form.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="techsupport__input"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="techsupport__field-group">
                                        <label className="techsupport__label" htmlFor="ts-email">
                                            Email <span className="techsupport__required">*</span>
                                        </label>
                                        <input
                                            id="ts-email"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="techsupport__input"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="techsupport__field-group">
                                        <label className="techsupport__label" htmlFor="ts-phone">
                                            Phone <span className="techsupport__required">*</span>
                                        </label>
                                        <input
                                            id="ts-phone"
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                            className="techsupport__input"
                                        />
                                    </div>

                                    {/* Key Type */}
                                    <div className="techsupport__field-group">
                                        <label className="techsupport__label" htmlFor="ts-keytype">
                                            Key Type <span className="techsupport__required">*</span>
                                        </label>
                                        <select
                                            id="ts-keytype"
                                            name="keyType"
                                            value={form.keyType}
                                            onChange={handleChange}
                                            required
                                            className="techsupport__input techsupport__select"
                                        >
                                            <option value="">Select Key Type</option>
                                            <option value="trial">Trial Key</option>
                                            <option value="production">Production Key</option>
                                        </select>
                                    </div>

                                    {/* Issue */}
                                    <div className="techsupport__field-group">
                                        <label className="techsupport__label" htmlFor="ts-issue">
                                            Describe Your Issue <span className="techsupport__required">*</span>
                                        </label>
                                        <textarea
                                            id="ts-issue"
                                            name="issue"
                                            rows={6}
                                            value={form.issue}
                                            onChange={handleChange}
                                            required
                                            className="techsupport__input techsupport__textarea"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn--primary btn--lg techsupport__submit">
                                        Submit Request
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Passion section ── */}
            <section className="section"
                     style={{background: 'var(--color-bg-alt)', paddingTop: '64px', paddingBottom: '64px'}}>
                <div className="container techsupport__passion">
                    <div className="techsupport__passion-text">
                        <h2 className="techsupport__passion-title">Customer Service is our Passion</h2>
                        <p>
                            At Service Objects, providing exceptional customer service and support is part of our
                            culture. Our support team is 100% available 24/7/365 and ready to help you whenever
                            you experience a technical issue with any of our services. We are so proud of our
                            support, we offer the industry&apos;s only financially-backed{' '}
                            <Link href="/support/service-level-agreement" className="techsupport__passion-link">
                                Service Level Agreement
                            </Link>
                            .
                        </p>
                    </div>
                    <div className="techsupport__passion-badges">
                        <div className="techsupport__badge">
                            <span className="techsupport__badge-icon">🕐</span>
                            <span>24/7/365 Availability</span>
                        </div>
                        <div className="techsupport__badge">
                            <span className="techsupport__badge-icon">⚡</span>
                            <span>15-Min Response Time</span>
                        </div>
                        <div className="techsupport__badge">
                            <span className="techsupport__badge-icon">🛡</span>
                            <span>Financially-Backed SLA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Partners strip ── */}
            <section className="section" style={{paddingTop: '48px', paddingBottom: '48px'}}>
                <div className="container">
                    {/* Trusted partners strip */}
                    <div className="about-partners">
                        <p className="about-partners__label">Our Trusted Partners</p>
                    </div>

                    <div className="trusted__logos">
                        {clientLogos.map((logo) => (
                            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={50}/>
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
                        {reliabilityStats.map((stat) => (
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