import HeroSection from '@/components/home/HeroSection'
import TrustedBySection from '@/components/home/TrustedBySection'
import BusinessChallengesSection from '@/components/home/BusinessChallengesSection'
import ServicesSection from '@/components/home/ServicesSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CtaSection from '@/components/home/CtaSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <TrustedBySection />
            <BusinessChallengesSection />
            <ServicesSection />
            <CaseStudiesSection />
            <TestimonialsSection />
            <CtaSection />
        </>
    )
}