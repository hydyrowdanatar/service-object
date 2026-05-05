import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/data/footerLinks'
import { certifications, socialLinks } from '@/data/footerData'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__top-inner">
                    <div className="footer__brand">
                        <Image src="/images/logos/logo-white.png" alt="Service Objects" width={180} height={45} />
                        <p className="footer__counter">Contacts Validated<br />Since September 2001</p>
                    </div>

                    {footerLinks.map((col) => (
                        <div key={col.title} className="footer__col">
                            <h4 className="footer__col-title">{col.title}</h4>
                            <ul>
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="footer__contact">
                        <h4><Link href="/contact-us">CONTACT</Link></h4>
                        <address>
                            803 Chapala St<br />
                            Santa Barbara, CA 93101-3201<br />
                            <a href="tel:+18059631700">1-805-963-1700</a><br />
                            <a href="tel:+18006946269">1-800-694-6269</a><br />
                            <a href="mailto:support@serviceobjects.com">support@serviceobjects.com</a>
                        </address>
                        <div className="footer__social">
                            {socialLinks.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                                    {s.label}
                                </a>
                            ))}
                        </div>
                        <div className="footer__cta-links">
                            <Link href="/support/tech-support" className="btn btn--outline btn--sm">Get Support</Link>
                            <Link href="/demo-request" className="btn btn--primary btn--sm">Request Demo</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'footer__bottom'}>
                <div className="footer__certifications">
                    <div className="container footer__certs-inner">
                        {certifications.map((cert) => (
                            <Image key={cert.alt} src={cert.src} alt={cert.alt} width={55} height={35} />
                        ))}
                    </div>
                </div>

                <div className="">
                    <div className="container footer__bottom-inner">
                            <div className={'footer__bottom-inner-links'}>
                                <Link href="/sitemap">Site Map</Link>
                                <span>|</span>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                                <span>|</span>
                                <Link href="/support/master-service-agreement">Terms of Use</Link>
                            </div>
                        <span style={{ marginLeft: 'auto' }}>© 2026 Service Objects, Inc. All rights reserved.</span>
                    </div>
                </div>
            </div>

        </footer>
    )
}