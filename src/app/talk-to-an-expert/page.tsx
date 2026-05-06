'use client'

import Image from 'next/image'
import { useState } from 'react'
import { clientLogos } from '@/data/homeData'

const roles = [
    'CTO / IT Director',
    'Engineer / Developer',
    'Marketing / Sales',
    'Product / Project Manager',
    'Student',
    'Other',
]

const interests = [
    'Identity Data Management',
    'Global Address Verification',
    'Location Intelligence',
    'Lead Validation and Scoring',
    'Email Verification',
    'Phone Intelligence',
    'Ecommerce Tools',
    'Business Logic',
    'Other',
]

function IconSupport() {
    return (
        <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
            <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2.5" />
            <path d="M10 34c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="8" y="31" width="7" height="10" rx="3.5" fill="currentColor" />
            <rect x="33" y="31" width="7" height="10" rx="3.5" fill="currentColor" />
            <path d="M40 36c0 4.4-3.6 8-8 8h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    )
}

function IconUptime() {
    return (
        <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
            <rect x="6" y="10" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
            <path d="M16 38h16M24 34v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="24" cy="22" r="5" stroke="currentColor" strokeWidth="2" />
            <path d="M24 16v2M24 26v2M18 22h2M28 22h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

function IconEngineer() {
    return (
        <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
            <circle cx="24" cy="13" r="7" stroke="currentColor" strokeWidth="2.5" />
            <path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 30l4 4-4 4M36 34H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const stats = [
    { icon: <IconSupport />, value: '24/7/365', label: 'Customer Support', color: '#ec008c' },
    { icon: <IconUptime />, value: '99.999%', label: 'Uptime Guarantee', color: '#5cc3e8' },
    { icon: <IconEngineer />, value: 'Dedicated', label: 'Support Engineers', color: '#0055a5' },
]

export default function TalkToAnExpertPage() {
    const [form, setForm] = useState({
        firstName: '', lastName: '', company: '',
        email: '', phone: '', role: '', interest: '', comments: '',
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            {/* ── Hero ── */}
            <section className="demo-hero">
                <div className="container demo-hero__inner">

                    {/* Left copy */}
                    <div className="demo-copy">
                        <h1 className="demo-copy__title">Talk to An Expert</h1>
                        <p className="demo-copy__body">
                            From strategic planning to technical support, our experts are here to help
                            bring the benefits of data quality to your business.
                        </p>
                        <p className="demo-copy__body">
                            Send us a short note and we will be in touch quickly to discuss your
                            business&apos; needs.
                        </p>

                        {/* Contact details */}
                        <div className="expert-contact">
                            <div className="expert-contact__row">
                                <svg className="expert-contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
                                </svg>
                                <div className="expert-contact__lines">
                                    <a href="tel:18006946269" className="expert-contact__link">1-800-694-6269</a>
                                    <a href="tel:18059631700" className="expert-contact__link">1-805-963-1700</a>
                                </div>
                            </div>

                            <div className="expert-contact__row">
                                <svg className="expert-contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <a href="mailto:support@serviceobjects.com" className="expert-contact__link">
                                    support@serviceobjects.com
                                </a>
                            </div>

                            <div className="expert-contact__row">
                                <svg className="expert-contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <address className="expert-contact__address">
                                    803 Chapala St<br />
                                    Santa Barbara, CA 93101-3201
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Right form card */}
                    <div className="demo-card">
                        {submitted ? (
                            <div className="demo-success">
                                <div className="demo-success__icon">✓</div>
                                <h3>Thank you!</h3>
                                <p>An expert will be in touch with you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="demo-card__title">Talk to an Expert</h2>
                                <form className="demo-form" onSubmit={handleSubmit} noValidate>
                                    <div className="demo-half-row">
                                        <div className="demo-field">
                                            <label className="demo-label">FIRST NAME</label>
                                            <input type="text" name="firstName" placeholder="First"
                                                value={form.firstName} onChange={handleChange}
                                                className="demo-input" />
                                        </div>
                                        <div className="demo-field">
                                            <label className="demo-label">LAST NAME</label>
                                            <input type="text" name="lastName" placeholder="Last"
                                                value={form.lastName} onChange={handleChange}
                                                className="demo-input" />
                                        </div>
                                    </div>

                                    <div className="demo-field">
                                        <label className="demo-label">COMPANY NAME <span className="demo-req">*</span></label>
                                        <input type="text" name="company" value={form.company}
                                            onChange={handleChange} required className="demo-input" />
                                    </div>

                                    <div className="demo-field">
                                        <label className="demo-label">BUSINESS EMAIL <span className="demo-req">*</span></label>
                                        <input type="email" name="email" value={form.email}
                                            onChange={handleChange} required className="demo-input" />
                                    </div>

                                    <div className="demo-field">
                                        <label className="demo-label">BEST PHONE NUMBER TO REACH YOU <span className="demo-req">*</span></label>
                                        <input type="tel" name="phone" value={form.phone}
                                            onChange={handleChange} required className="demo-input" />
                                    </div>

                                    <div className="demo-field">
                                        <label className="demo-label">WHAT IS YOUR ROLE? <span className="demo-req">*</span></label>
                                        <select name="role" value={form.role} onChange={handleChange}
                                            required className="demo-input demo-select">
                                            <option value="">Select one</option>
                                            {roles.map(r => <option key={r} value={r}>{r}</option>)}
                                        </select>
                                    </div>

                                    <div className="demo-field">
                                        <label className="demo-label">AREA OF INTEREST <span className="demo-req">*</span></label>
                                        <select name="interest" value={form.interest} onChange={handleChange}
                                            required className="demo-input demo-select">
                                            <option value="">Select one</option>
                                            {interests.map(i => <option key={i} value={i}>{i}</option>)}
                                        </select>
                                    </div>

                                    <div className="demo-field">
                                        <label className="demo-label">COMMENTS</label>
                                        <textarea name="comments" rows={4} value={form.comments}
                                            onChange={handleChange} className="demo-input demo-textarea" />
                                    </div>

                                    <button type="submit" className="demo-submit">SUBMIT</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Stats bar ── */}
            <div className="demo-stats">
                {stats.map(s => (
                    <div key={s.label} className="demo-stats__item">
                        <span className="demo-stats__icon" style={{ color: s.color }}>{s.icon}</span>
                        <p className="demo-stats__value" style={{ color: s.color }}>{s.value}</p>
                        <p className="demo-stats__label">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* ── Trusted Partners ── */}
            <section className="section" style={{ paddingTop: '40px', paddingBottom: '56px' }}>
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
        </>
    )
}
