'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { navLinks } from '@/data/navLinks'
import MegaMenu from './MegaMenu'

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="container navbar__inner">
                <Link href="/" className="navbar__logo">
                    <Image src="/images/logos/logo.gif" alt="Service Objects" width={200} height={50} />
                </Link>
                <nav className="navbar__links" onMouseLeave={() => setActiveMenu(null)}>
                    {navLinks.map((item) => (
                        <div
                            key={item.label}
                            className="navbar__item"
                            onMouseEnter={() => setActiveMenu(item.label)}
                        >
                            <Link href={item.href}>{item.label}</Link>
                            {item.children && item.children.length > 0 && activeMenu === item.label && (
                                <MegaMenu items={item.children} />
                            )}
                        </div>
                    ))}
                </nav>
                <div className="navbar__actions">
                    <Link href="/contact-us" className="btn btn--outline btn--sm">Contact Us</Link>
                    <Link href="/login" className="btn btn--ghost btn--sm">Login</Link>
                </div>
                <button
                    className="navbar__hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    )
}