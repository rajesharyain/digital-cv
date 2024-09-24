import { Experience } from "./experienceProps";

interface Organization {
    name: string; 
    period: string; 
    current: boolean; 
    logo: string; 
    link: string;
}


interface Achievement { title: string; imageUrl: string; description: string; }

export interface ProfileProps {
    name: string;
    avatarUrl?: string;
    githubAvatarUrl?: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
    phone: string;
    videoUrl?: string;
    organizations: Organization[];
    summary: string;
    skills: string[],
    achievements: Achievement[];
    metrics: { title: string; value: string; imageUrl: string }[];
    contributionGraphUrl: string;
    githubUserName: string;
    currentExperience: Experience;

}
