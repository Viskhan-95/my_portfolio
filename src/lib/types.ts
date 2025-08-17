import type { StaticImageData } from "next/image";

export type TechDetails = {
    logo: string | StaticImageData;
    darkModeLogo?: string | StaticImageData;
    label: string;
    url: string;
};

export type ExperienceDetails = {
    logo: string | StaticImageData;
    darkModeLogo?: string | StaticImageData;
    logoAlt: string;
    companyName?: string;
    companyNameEn?: string;
    position: string;
    currentlyWorkHere?: boolean;
    startDate: Date;
    endDate?: Date;
    summary: string[];
    summaryEn?: string[];
};

export type ProjectDetails = {
    name: string;
    nameRu?: string;
    description: string;
    descriptionRu?: string;
    url: string;
    previewImage: string | StaticImageData | null;
    video?: string; // Добавляем опциональное поле для видео
    technologies: string[];
};

export type EducationDetails = {
    institutionName: string;
    institutionNameEn?: string;
    logo: string | StaticImageData | null;
    degree: string;
    degreeEn?: string;
    period: string;
    periodEn?: string;
    description: string;
    descriptionEn?: string;
};

export type TestimonialDetails = {
    personName: string;
    personAvatar?: string | StaticImageData | null;
    testimonial: string;
    title: string;
};
