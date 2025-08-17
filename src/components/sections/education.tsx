"use client";

import { EDUCATION, EDUCATION_TEXTS } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import Tag from "@/components/data-display/tag";
import EducationDetails from "@/components/data-display/education-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const EducationSection = () => {
    const { currentLang } = useLanguage();
    const texts = EDUCATION_TEXTS[currentLang];

    return (
        <Container id="education" className="bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <div className="self-center">
                    <Tag label={texts.tag} />
                </div>
                <Typography variant="subtitle" className="max-w-xl text-center">
                    {texts.subtitle}
                </Typography>
            </div>

            <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
                {EDUCATION?.map((education, index) => (
                    <EducationDetails key={index} {...education} />
                ))}
            </div>
        </Container>
    );
};

export default EducationSection;
