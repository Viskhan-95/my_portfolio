"use client";

import { TECHNOLOGIES, SKILLS_TEXTS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TechDetails from "@/components/data-display/tech-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { useLanguage } from "@/lib/language-context";

const SkillsSection = () => {
    const { currentLang } = useLanguage();
    const texts = SKILLS_TEXTS[currentLang];

    return (
        <Container>
            <div className="flex flex-col items-center gap-4">
                <div className="self-center">
                    <Tag label={texts.tag} />
                </div>
                <Typography variant="subtitle" className="max-w-xl text-center">
                    {texts.subtitle}
                </Typography>
            </div>

            <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
                {TECHNOLOGIES.map((technology, index) => (
                    <TechDetails {...technology} key={index} />
                ))}
            </div>
        </Container>
    );
};

export default SkillsSection;
