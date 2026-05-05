export interface SolutionItem {
    title: string
    description: string
    href: string
    image: string
}

export const solutionsIntro =
    'Our Customer Data Validation services ensure every contact record in your database is genuine, accurate, and up-to-date. Our solutions are designed to increase productivity, leverage business intelligence, correct mailing address errors, ensure compliance, manage fraud risks, and provide a comprehensive understanding of Customer Data Validation.'

export const solutionItems: SolutionItem[] = [
    {
        title: 'Increasing Productivity',
        description: 'Automate processes and improve productivity with Customer Data Validation.',
        href: '/solutions/increasing-productivity/',
        image: '/images/solutions/increasing-productivity.jpg',
    },
    {
        title: 'Leveraging Business Intelligence',
        description: 'Gain vital customer insights to improve decisions and better serve customers.',
        href: '/solutions/leveraging-business-intelligence/',
        image: '/images/solutions/leveraging-business-intelligence.jpg',
    },
    {
        title: 'Fixing Bad Addresses',
        description: 'Learn how Customer Data Validation verifies and corrects bad addresses.',
        href: '/solutions/fixing-bad-addresses/',
        image: '/images/solutions/fixing-bad-addresses.jpg',
    },
    {
        title: 'Achieving Compliance',
        description: 'Use Customer Data Validation to support privacy and data protection compliance.',
        href: '/solutions/achieving-compliance/',
        image: '/images/solutions/achieving-compliance.jpg',
    },
    {
        title: 'Managing Fraud',
        description: 'Detect and prevent fraud and fake accounts with Customer Data Validation.',
        href: '/solutions/managing-fraud/',
        image: '/images/solutions/managing-fraud.jpg',
    },
    {
        title: 'Understanding Customer Data Validation',
        description: 'Understand Customer Data Validation across integrity, enrichment, and quality signals.',
        href: '/solutions/customer-data-validation/',
        image: '/images/solutions/understanding-customer-data-validation.jpg',
    },
]

export const reliabilityStats = [
    { value: '99.999%', label: 'Uptime Guarantee', icon: '/images/solutions/reliability/uptime.png' },
    { value: '24/7/365', label: 'Customer Support', icon: '/images/solutions/reliability/support.png' },
    { value: 'Dedicated', label: 'Support Engineers', icon: '/images/solutions/reliability/engineers.png' },
]
