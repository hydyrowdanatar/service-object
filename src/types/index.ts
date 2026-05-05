export interface NavItem {
    label: string
    href: string
    description?: string
    children?: NavItem[]
}

export interface Service {
    title: string
    description: string
    href: string
    icon: string
}

export interface Testimonial {
    quote: string
    name: string
    title: string
}

export interface CaseStudy {
    title: string
    description: string
    href: string
}

export interface ClientLogo {
    src: string
    alt: string
}

export interface Certification {
    src: string
    alt: string
}

export interface FooterColumn {
    title: string
    links: { label: string; href: string }[]
}