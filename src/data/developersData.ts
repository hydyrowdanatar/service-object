export interface DeveloperResource {
    title: string
    description: string
    href: string
    icon: string
}

export const developersIntro = 'Tools, detailed help, and sample data for a pain free integration experience!'

export const developerResources: DeveloperResource[] = [
    {
        title: 'Developer Guides',
        description: 'Consistent, easy-to-follow guides walk you through each API.',
        href: '/docs/',
        icon: '/images/developers/resources/developer-guides.png',
    },
    {
        title: 'Sample Code',
        description: 'View sample code in PHP, Java, C# and other supported protocols and languages.',
        href: '/developers/sample-code/',
        icon: '/images/developers/resources/sample-code.png',
    },
    {
        title: 'Upload Your List',
        description: 'Test our APIs and discover the possibilities by uploading a test list.',
        href: '/upload-center/',
        icon: '/images/developers/resources/upload-your-list.png',
    },
    {
        title: 'Integrations',
        description: 'Extend functionality and get deeper insights with plugins, mashups, and testing tools.',
        href: '/blog/integrations/',
        icon: '/images/developers/resources/integrations.png',
    },
    {
        title: 'Sample Data',
        description: 'Use our sample input data to get started testing our services right away.',
        href: '/sample-data/',
        icon: '/images/developers/resources/sample-data.png',
    },
    {
        title: 'Quick Lookups',
        description: 'Use our quick lookups to see how each API transforms your data.',
        href: '/developers/lookups/',
        icon: '/images/developers/resources/quick-lookups.png',
    },
]
