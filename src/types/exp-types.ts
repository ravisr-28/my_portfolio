export interface IExperience {
    company: string;
    role: string;
    companyLogo: string;
    time: string;
    duration: string;
    location: string;
    companyUrl: string;
    type: string;
    technologies: ITechnology[];
}

export interface ITechnology {
    name: string;
    icon: React.ElementType;
    color: string;
}