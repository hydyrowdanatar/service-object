import { ClientLogo } from '@/types'

export interface ProductCategory {
    id: string
    title: string
    description: string
    items: { label: string; href: string }[]
}

export const productStats = [
    { value: '24/7/365', label: 'Customer Support' },
    { value: '99.999%', label: 'Uptime Guarantee' },
    { value: 'Dedicated', label: 'Support Engineers' },
]

export const productCategories: ProductCategory[] = [
    {
        id: 'address',
        title: 'Address',
        description:
            'Enhance your global address data with validation solutions that ensure you have the most accurate, standardized and up-to-date addresses.',
        items: [
            { label: 'Address Validation - US', href: '/address-validation-us/' },
            { label: 'Address Validation - Canada', href: '/address-validation-canada/' },
            { label: 'Address Validation - International', href: '/address-validation-international/' },
            { label: 'Global Address Complete', href: '/global-address-complete/' },
            { label: 'Change of Address', href: '/change-of-address/' },
            { label: 'Address Insight', href: '/address-insight/' },
        ],
    },
    {
        id: 'lead',
        title: 'Lead',
        description:
            'Using a comprehensive quality score, quickly determine which of your global leads are genuine and accurate, saving your sales and marketing team time and money.',
        items: [
            { label: 'Lead Validation - US', href: '/lead-validation-us/' },
            { label: 'Lead Validation - International', href: '/lead-validation-international/' },
        ],
    },
    {
        id: 'name',
        title: 'Name',
        description:
            'Performs a 40-step check to help your business weed out bogus and inaccurate names and prevents embarrassing personalization mistakes being sent to customers and prospects.',
        items: [{ label: 'Name Validation', href: '/name-validation/' }],
    },
    {
        id: 'phone',
        title: 'Phone Insight',
        description:
            'Our suite of global phone services enable your business to comply with privacy and telephone regulations, backfill missing phone numbers, names and addresses and provide advanced phone intelligence.',
        items: [
            { label: 'GeoPhone Plus', href: '/reverse-phone-lookup/' },
            { label: 'Phone Append', href: '/phone-append/' },
            { label: 'Phone Exchange', href: '/phone-exchange/' },
            { label: 'Phone Validation - International', href: '/phone-validation-international/' },
        ],
    },
    {
        id: 'email',
        title: 'Email',
        description:
            'The most comprehensive multi-step verification process in the industry ensures your email addresses are genuine, accurate and deliverable.',
        items: [{ label: 'Email Validation', href: '/email-validation/' }],
    },
    {
        id: 'geocoding',
        title: 'Address Geocode',
        description:
            'Translate address information into precise geographic coordinates with up to 99.8% accuracy. For US and Canadian locations, reverse geolocation is also available.',
        items: [
            { label: 'Address Geocode - US', href: '/address-geocode-us/' },
            { label: 'Address Geocode - Canada', href: '/address-geocode-canada/' },
            { label: 'Address Geocode - International', href: '/address-geocode-international/' },
        ],
    },
    {
        id: 'ecommerce',
        title: 'Ecommerce',
        description:
            'Tax solutions and fraud detection tools to support your online business and protect against fraud.',
        items: [
            { label: 'FastTax', href: '/fasttax/' },
            { label: 'IP Address Validation', href: '/ip-address-validation/' },
        ],
    },
]

export const productPartners: ClientLogo[] = [
    { src: '/images/clients/amazon.webp', alt: 'Amazon' },
    { src: '/images/clients/microsoft.webp', alt: 'Microsoft' },
    { src: '/images/clients/mastercard.png', alt: 'Mastercard' },
    { src: '/images/clients/amex.png', alt: 'AMEX' },
    { src: '/images/clients/sony.png', alt: 'Sony' },
    { src: '/images/clients/verizon.png', alt: 'Verizon' },
    { src: '/images/clients/visa.png', alt: 'Visa' },
    { src: '/images/clients/xerox.png', alt: 'Xerox' },
]
