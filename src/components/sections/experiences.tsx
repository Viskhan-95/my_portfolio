"use client";

import { EXPERIENCES, EXPERIENCE_TEXTS } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import ExperienceDetails from "@/components/data-display/experience-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const ExperienceSection = () => {
    const { currentLang } = useLanguage();
    const texts = EXPERIENCE_TEXTS[currentLang];

    return (
        <Container className="bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <div className="self-center">
                    <Tag label={texts.tag} />
                </div>
                <Typography variant="subtitle" className="max-w-xl text-center">
                    {texts.subtitle}
                </Typography>
            </div>

            {EXPERIENCES?.map((experience, index) => (
                <ExperienceDetails {...experience} key={index} />
            ))}
        </Container>
    );
};

export default ExperienceSection;
