'use client'
import { useState } from 'react'

export default function CookieBanner() {
    const [dismissed, setDismissed] = useState(false)
    if (dismissed) return null

    return (
        <div className="cookie-banner">
            <div className="cookie-banner__inner">
                <h3>Cookies Policy</h3>
                <p>
                    We use cookies to enhance your browsing experience. Cookies, tracking pixels, and similar
                    tech are small data files stored on your device. By using our site, you agree to our cookie use.
                </p>
                <button className="btn btn--primary btn--sm" onClick={() => setDismissed(true)}>
                    Thanks, I understand.
                </button>
            </div>
        </div>
    )
}