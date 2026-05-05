import { NavItem } from '@/types'

export const navLinks: NavItem[] = [
    {
        label: 'Products',
        href: '/products',
        children: [
            {
                label: 'Address', href: '#',
                children: [
                    { label: 'Address Validation', href: '/address-validation/', children: [
                            { label: 'US', href: '/address-validation-us/' },
                            { label: 'Canada', href: '/address-validation-canada/' },
                            { label: 'Global', href: '/address-validation-international/' },
                        ]},
                    { label: 'Address Suggestor', href: '#', children: [
                            { label: 'Global Address Complete', href: '/global-address-complete/' },
                        ]},
                    { label: 'Change of Address', href: '#', children: [
                            { label: 'NCOA Live (US only)', href: '/change-of-address/' },
                        ]},
                    { label: 'Address Intelligence', href: '#', children: [
                            { label: 'Address Insight', href: '/address-insight/' },
                        ]},
                ],
            },
            {
                label: 'Lead', href: '#',
                children: [
                    { label: 'Customer & Lead Validation', href: '#', children: [
                            { label: 'US', href: '/lead-validation-us/' },
                            { label: 'Global', href: '/lead-validation-international/' },
                        ]},
                ],
            },
            {
                label: 'Geocode', href: '#',
                children: [
                    { label: 'Address Geocoding', href: '#', children: [
                            { label: 'US', href: '/address-geocode-us/' },
                            { label: 'Canada', href: '/address-geocode-canada/' },
                            { label: 'Global', href: '/address-geocode-international/' },
                        ]},
                ],
            },
            {
                label: 'Phone', href: '#',
                children: [
                    { label: 'Phone Validation', href: '#', children: [
                            { label: 'Global', href: '/phone-validation-international/' },
                        ]},
                    { label: 'Reverse Phone Lookup', href: '#', children: [
                            { label: 'GeoPhone Plus', href: '/reverse-phone-lookup/' },
                        ]},
                    { label: 'Phone Intelligence', href: '#', children: [
                            { label: 'Phone Append', href: '/phone-append/' },
                            { label: 'Phone Exchange', href: '/phone-exchange/' },
                        ]},
                ],
            },
            {
                label: 'Name', href: '#',
                children: [
                    { label: 'Name Validation', href: '#', children: [
                            { label: 'Name Validation', href: '/name-validation/' },
                        ]},
                ],
            },
            {
                label: 'Email', href: '#',
                children: [
                    { label: 'Email Validation', href: '#', children: [
                            { label: 'Email Validation', href: '/email-validation/' },
                        ]},
                ],
            },
            {
                label: 'Ecommerce', href: '#',
                children: [
                    { label: 'Ecommerce Support', href: '#', children: [
                            { label: 'FastTax', href: '/fasttax/' },
                            { label: 'IP Validation', href: '/ip-address-validation/' },
                        ]},
                ],
            },
        ],
    },
    {
        label: 'Solutions',
        href: '/solutions',
        children: [
            { label: 'Fixing Bad Addresses', href: '/solutions/fixing-bad-addresses/', description: 'Detect and correct invalid and bad addresses' },
            { label: 'Achieving Compliance', href: '/solutions/achieving-compliance/', description: 'Support compliance with accurate customer data' },
            { label: 'Managing Fraud', href: '/solutions/managing-fraud/', description: 'Flag & remove low quality and fraudulent accounts' },
            { label: 'Leveraging Business Intelligence', href: '/solutions/leveraging-business-intelligence/', description: 'Gain insights and make informed decisions' },
            { label: 'Increasing Productivity', href: '/solutions/increasing-productivity/', description: 'Optimize operations and boost productivity' },
            { label: 'Understanding Customer Data Validation', href: '/solutions/customer-data-validation/', description: 'Learn how Customer Data Validation works' },
        ],
    },
    {
        label: 'Developers',
        href: '/developers',
        children: [
            { label: 'Developers Guide', href: '/docs/', description: 'Comprehensive guides for integration and implementation' },
            { label: 'Sample Code', href: '/developers/sample-code/', description: 'Sample code & code libraries for major programming languages' },
            { label: 'Sample Data', href: '/sample-data/', description: 'Accelerate testing with sample data' },
            { label: 'Quick Lookups', href: '/developers/lookups/', description: 'Use your API key to validate a small set of records' },
            { label: 'Integrations', href: '/blog/integrations/', description: 'Testing tools, example integrations and mashups' },
            { label: 'Upload Your List', href: '/upload-center/', description: 'Send us your list to validate' },
            { label: 'DataTumbler App', href: '/developers/datatumbler/', description: 'Desktop application for DIY data cleansing' },
            { label: 'NuGet Packages', href: '/developers/nuget/', description: 'Expedite integration with NuGet packages' },
        ],
    },
    {
        label: 'Support',
        href: '/support/tech-support',
        children: [
            { label: 'Request Customer Support', href: '/support/tech-support/', description: 'Contact us for customer and technical support' },
            { label: 'Usage Reports', href: '/support/usage-reports/', description: 'Check transaction usage on your trial and production keys' },
            { label: 'Failover Configuration', href: '/support/failover-configuration/', description: 'Overview of our data centers and failover protocol' },
            { label: 'Performance Reports', href: '/support/performance-reports/', description: 'Response and Uptime reports (2006 to present)' },
            { label: 'Professional Services', href: '/support/professional-services/', description: 'Developer support for integrations and customizations' },
            { label: 'Security', href: '/support/security/', description: 'Overview of our bank-grade security and privacy measures' },
            { label: 'Service Level Agreement', href: '/support/service-level-agreement/', description: 'Our service level commitment' },
            { label: 'Master Service Agreement', href: '/support/master-service-agreement/', description: 'The agreement that governs our service offerings' },
        ],
    },
    {
        label: 'About',
        href: '/about-us',
        children: [
            { label: 'Contact Us', href: '/contact-us/' },
            { label: 'About Service Objects', href: '/about-us/' },
            { label: 'Our Story', href: '/about-us/our-story/' },
            { label: 'Mission and Core Values', href: '/about-us/our-mission/' },
            { label: 'Corporate Conservation', href: '/about-us/corporate-conservation/' },
            { label: 'Management Team', href: '/about-us/management-team/' },
            { label: 'Grants', href: '/about-us/in-kind-grants/' },
            { label: 'Careers', href: '/careers/' },
            { label: 'Success Stories', href: '/customer-success-stories/' },
            { label: 'Why Service Objects', href: '/about-us/why-service-objects/' },
            { label: 'Partners', href: '/about-us/partners/' },
            { label: 'News and Press', href: '/news-and-press/' },
            { label: 'White Papers', href: '/articles-whitepapers/' },
            { label: 'Webinars', href: '/webinars/' },
            { label: 'Company Materials', href: '/about-us/company-materials/' },
        ],
    },
    { label: 'Login', href: '/login', children: [] },
    { label: 'Blog', href: '/blog', children: [] },
]