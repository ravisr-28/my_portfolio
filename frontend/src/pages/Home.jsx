import HeroSection from '../components/home/hero/HeroSection'
import SkillsSection from '../components/home/skills/SkillsSection'
import ExperienceSection from '../components/home/experience/ExperienceSection'
import CertificationsSection from '../components/home/certifications/CertificationsSection'
import ProjectsSection from '../components/home/projects/ProjectsSection'
import EducationSection from '../components/home/education/EducationSection'
import ServicesSection from '../components/home/services/ServicesSection'
import GithubContribution from '../components/home/github/GithubContribution'

export default function Home() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <HeroSection />
            <GithubContribution />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <EducationSection />
            <ServicesSection />
        </div>
    )
}
