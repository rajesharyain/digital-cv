interface Project {
    title: string;
    role: string;
    projectSkills?:string;
    details: string[];
}

export interface Experience {
    companyName: string;
    duration: string;
    entitle: string;
    location: string;
    clientLogo: string;
    clientName: string;
    companyLogo: string;
    projects: Project[];
}