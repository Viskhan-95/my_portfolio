"use client";

import { PROJECTS, WORK_TEXTS } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const WorkSection = () => {
    const { currentLang } = useLanguage();
    const texts = WORK_TEXTS[currentLang];

    return (
        <Container id="work">
            <div className="flex flex-col items-center gap-4">
                <div className="self-center">
                    <Tag label={texts.tag} />
                </div>
                <Typography variant="subtitle" className="max-w-xl text-center">
                    {texts.subtitle}
                </Typography>
            </div>

            {PROJECTS?.map((project, index) => (
                <ProjectDetails
                    key={index}
                    {...project}
                    layoutType={index % 2 === 0 ? "default" : "reverse"}
                />
            ))}
        </Container>
    );
};

export default WorkSection;
