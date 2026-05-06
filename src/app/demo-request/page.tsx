'use client'

import Image from 'next/image'
import { useState } from 'react'
import { clientLogos } from '@/data/homeData'

const benefits = [
    'Respond to Actionable Scoring on Global Leads',
    'Ensure Delivery Accuracy',
    'Determine and Eliminate Fraud at the Point of Entry',
    'Enhance the Performance of Sales and Marketing Platforms',
    'Gain Insight on Customers and Prospects',
    'Standardize Data for Compliance',
]

const roles = [
    'Developer / Engineer',
    'IT Manager / Director',
    'Business Analyst',
    'Product Manager',
    'Sales / Marketing',
    'C-Level / Executive',
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

const demoStats = [
    { icon: <IconSupport />, value: '24/7/365', label: 'Customer Support', color: '#ec008c' },
    { icon: <IconUptime />, value: '99.999%', label: 'Uptime Guarantee', color: '#5cc3e8' },
    { icon: <IconEngineer />, value: 'Dedicated', label: 'Support Engineers', color: '#0055a5' },
]

export default function DemoRequestPage() {
    const [form, setForm] = useState({
        firstName: '', lastName: '', company: '',
        email: '', phone: '', role: '', comments: '',
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
                        <h1 className="demo-copy__title">
                            See How Clean and Accurate Contact Data Impacts Your Business
                        </h1>
                        <p className="demo-copy__body">
                            With over 24 years&apos; experience, our comprehensive suite of global
                            data quality solutions enables your business to:
                        </p>
                        <ul className="demo-copy__list">
                            {benefits.map(b => (
                                <li key={b} className="demo-copy__item">
                                    <span className="demo-copy__bullet">•</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="demo-copy__body">
                            Sign up for a free demo to see firsthand how our global data quality
                            services can improve the performance of your business and enable you
                            to make better decisions about your customers.
                        </p>
                        <div className="demo-copy__cta">
                            <p>Prefer to talk to an expert?</p>
                            <p>Call us at <a href="tel:18006946269">800-694-6269</a></p>
                        </div>
                    </div>

                    {/* Right form card */}
                    <div className="demo-card">
                        {submitted ? (
                            <div className="demo-success">
                                <div className="demo-success__icon">✓</div>
                                <h3>Thank you!</h3>
                                <p>We&apos;ll be in touch shortly to schedule your demo.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="demo-card__title">Request Demo</h2>
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
                {demoStats.map(s => (
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
