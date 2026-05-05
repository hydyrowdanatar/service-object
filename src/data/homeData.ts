import { ClientLogo, Service, Testimonial, CaseStudy } from '@/types'

export const trustStats: string[] = [
    "99.999% uptime for relentless service availability.",
    "24/7/365 support ensuring we're here when you need us.",
    "Bank-grade security for peace of mind.",
    "Powered by authoritative global data sources.",
    "Trusted by 3,000+ enterprise customers globally.",
    "Covering 250+ countries and regions worldwide.",
    "SOC 2 Certified, ensuring stringent data security.",
    "7+ years best-in-class NPS score for customer service.",
]

export const clientLogos: ClientLogo[] = [
    { src: '/images/clients/amazon.webp', alt: 'Amazon' },
    { src: '/images/clients/microsoft.webp', alt: 'Microsoft' },
    { src: '/images/clients/mastercard.png', alt: 'Mastercard' },
    { src: '/images/clients/amex.png', alt: 'AMEX' },
    { src: '/images/clients/sony.png', alt: 'Sony' },
    { src: '/images/clients/verizon.png', alt: 'Verizon' },
    { src: '/images/clients/visa.png', alt: 'Visa' },
    { src: '/images/clients/xerox.png', alt: 'Xerox' },
]

export const challenges = [
    {
        title: 'Fight Fraud and Fake Accounts',
        description: 'Fraudulent and fake customer accounts cost businesses billions each year, tarnishing brand reputations and causing operational hurdles.',
    },
    {
        title: 'Fix Bad Delivery Addresses',
        description: 'Undeliverable mail due to incorrect addresses costs over $20B annually, leading to adverse customer feedback and increased risk of fraud and compliance issues.',
    },
    {
        title: 'Achieve Compliance',
        description: 'Global businesses face over $4.1B in data privacy penalties annually, highlighting the importance of accurate customer data management.',
    },
    {
        title: 'Increase Productivity',
        description: 'Poor quality customer data wreak havoc on your business, causing misguided decision-making, damaged customer relationships and inefficient operations.',
    },
    {
        title: 'Leverage Business Intelligence',
        description: 'Harnessing accurate customer data is crucial for unveiling actionable insights and ensuring efficient, sustainable growth.',
    },
]

export const services: Service[] = [
    {
        title: 'Address Validation',
        description: 'Ensure deliverability with real-time address validation across 250+ countries, saving on shipping costs and reducing fraud.',
        href: '/products/#address',
        icon: '/images/icons/address-validation.png',
    },
    {
        title: 'Name Validation',
        description: 'Capture accurate names at the point of entry, ensuring personalized and effective engagement with your customers.',
        href: '/name-validation/',
        icon: '/images/icons/name-validation.png',
    },
    {
        title: 'Email Validation',
        description: 'Maximize email deliverability and combat fraud with over 50 integrity checks, enhancing your email marketing efforts.',
        href: '/email-validation/',
        icon: '/images/icons/email-validation.png',
    },
    {
        title: 'Phone Validation',
        description: 'Stay connected and compliant with real-time phone validation and intelligence, supporting adherence to complex data and privacy regulations.',
        href: '/products/#phone',
        icon: '/images/icons/phone-validation.png',
    },
    {
        title: 'Device Validation',
        description: 'Enhance targeting and fraud protection through device and IP address validation, supporting a range of marketing and security uses.',
        href: '/ip-address-validation/',
        icon: '/images/icons/device-icon.png',
    },
    {
        title: 'Full Spectrum Validation',
        description: 'Cross-validate and correct every element of your customer data, focusing on real leads and customers to increase ROI on your engagement efforts.',
        href: '/products/#lead',
        icon: '/images/icons/cdv-icon.png',
    },
]

export const caseStudies: CaseStudy[] = [
    {
        title: 'Reduced returned mail by 50%, saving time and money',
        description: 'Discover how Address Validation increased ROI and improved the user experience.',
        href: '/customer-success-stories/thomasville/',
    },
    {
        title: 'Eliminated 13% of fake customer contact records',
        description: 'Learn how a leading software company weeded out fake or bogus leads.',
        href: '/customer-success-stories/turning-bad-leads-into-cash/',
    },
]

export const testimonials: Testimonial[] = [
    {
        quote: "Service Objects plays an integral role in the services we deliver to customers. We couldn't claim to have standardized and validated data without partnering with a Customer Data Validation provider like Service Objects.",
        name: 'VP Product Marketing',
        title: 'Marketing Demand Generation Platform',
    },
    {
        quote: "Implementing an Address Validation solution wasn't a decision we took lightly, especially because it had to go through our point-of-sale system. Through years of reliable service, it has been a fantastic decision. Everything just works. Service Objects delivers.",
        name: 'Ed Clary',
        title: 'CIO and Senior VP of Distribution, Havertys',
    },
    {
        quote: "I like working with Service Objects as a partner who makes sure that everything is cutting edge and current. What's new? What's the most up to date? What is going on in the industry is represented in the Service Objects services that we're using.",
        name: 'Bob Fagan',
        title: 'Senior VP of Finance and Accounting, USPlate',
    },
    {
        quote: "In insurance, things like cancellation and non-renewal notices have to be sent out in a timely manner. Having a clean address properly formatted for the US Post Office is extremely important. Our users now just push a button and immediately get a valid address.",
        name: 'Mike Wanzong',
        title: 'Engagement Director, Guidewire',
    },
]