import { FooterColumn } from '@/types'

export const footerLinks: FooterColumn[] = [
    {
        title: 'PRODUCTS',
        links: [
            { label: 'Address Validation', href: '/products#address' },
            { label: 'Address Complete', href: '/global-address-complete/' },
            { label: 'Change of Address', href: '/change-of-address/' },
            { label: 'Address Insight', href: '/address-insight/' },
            { label: 'Lead Validation', href: '/products/#lead' },
            { label: 'Name Validation', href: '/name-validation/' },
            { label: 'Phone Insight', href: '/products#phone' },
            { label: 'Address Geocode', href: '/products/#geocoding' },
            { label: 'Email Validation', href: '/email-validation/' },
            { label: 'FastTax', href: '/fasttax/' },
            { label: 'IP Validation', href: '/ip-address-validation/' },
        ],
    },
    {
        title: 'COMPANY',
        links: [
            { label: 'About', href: '/about-us/our-story/' },
            { label: 'Careers', href: '/careers/' },
            { label: 'Grants', href: '/about-us/in-kind-grants/' },
            { label: 'News', href: '/news-and-press/' },
            { label: 'Partners', href: '/about-us/partners/' },
            { label: 'Press', href: '/news-and-press/' },
            { label: 'Network Status', href: '/status/' },
            { label: 'Release Notes', href: '/release-notes/' },
        ],
    },
    {
        title: 'RESOURCES',
        links: [
            { label: 'White Papers', href: '/articles-whitepapers/' },
            { label: 'Webinars', href: '/webinars/' },
            { label: 'Customers', href: '/customer-success-stories/' },
            { label: 'Video Tutorials', href: '/videos-tutorials/' },
        ],
    },
]