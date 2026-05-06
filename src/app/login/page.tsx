'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
    const [form, setForm] = useState({ username: '', password: '', remember: false })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
    }

    return (
        <div className="login-page">
            <div className="login-page__inner">

                {/* ── Left: brand panel ── */}
                <div className="login-brand">
                    <div className="login-brand__content">
                        <p className="login-brand__eyebrow">Customer Portal</p>
                        <h1 className="login-brand__title">
                            Welcome to<br />Service Objects
                        </h1>
                        <p className="login-brand__sub">
                            Sign in to access your API keys, usage reports, and dedicated technical support.
                        </p>

                        <ul className="login-brand__list">
                            {[
                                'Access 22+ Data Validation APIs',
                                '500 Free Test Transactions',
                                'Real-Time Usage Reports',
                                '24/7/365 Dedicated Support',
                                'Financially-Backed 99.999% Uptime SLA',
                            ].map(item => (
                                <li key={item} className="login-brand__list-item">
                                    <span className="login-brand__check">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="login-brand__certs">
                            {['SOC 2', 'CASS', 'GDPR', 'CCPA/CPRA', 'SSL'].map(cert => (
                                <span key={cert} className="login-brand__cert">{cert}</span>
                            ))}
                        </div>

                        <p className="login-brand__since">Trusted since 2001 · 20+ years of data expertise</p>
                    </div>
                </div>

                {/* ── Right: form panel ── */}
                <div className="login-form-panel">

                    {/* Login card */}
                    <div className="login-card">
                        <h2 className="login-card__title">Sign In</h2>
                        <p className="login-card__sub">Enter your credentials to continue.</p>

                        <form className="login-form" onSubmit={handleSubmit} noValidate>
                            <div className="login-field">
                                <label className="login-label" htmlFor="lf-username">
                                    Username or Email
                                </label>
                                <input
                                    id="lf-username"
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    required
                                    autoComplete="username"
                                    className="login-input"
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div className="login-field">
                                <label className="login-label" htmlFor="lf-password">
                                    Password
                                </label>
                                <input
                                    id="lf-password"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    autoComplete="current-password"
                                    className="login-input"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="login-row">
                                <label className="login-remember">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={form.remember}
                                        onChange={handleChange}
                                        className="login-checkbox"
                                    />
                                    <span>Remember me</span>
                                </label>
                                <Link href="/account-recovery" className="login-forgot">
                                    Forgot password?
                                </Link>
                            </div>

                            <button type="submit" className="btn btn--primary login-btn">
                                Sign In
                            </button>
                        </form>

                        <div className="login-divider">
                            <span>New to Service Objects?</span>
                        </div>

                        <Link href="/trial" className="btn btn--outline login-trial-btn">
                            Create a Free Trial Account
                        </Link>

                        <p className="login-card__help">
                            Need help?{' '}
                            <Link href="/support/tech-support" className="login-inline-link">
                                Contact Support
                            </Link>
                        </p>
                    </div>

                    {/* Current customers quick-links */}
                    <div className="login-quick">
                        <p className="login-quick__title">Current Customers</p>
                        <div className="login-quick__grid">
                            <Link href="/account" className="login-quick__link">
                                <span className="login-quick__icon">👤</span>
                                <span>Update Account Info</span>
                            </Link>
                            <Link href="/reports" className="login-quick__link">
                                <span className="login-quick__icon">📊</span>
                                <span>Check Usage Report</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
