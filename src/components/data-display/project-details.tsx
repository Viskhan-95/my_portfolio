"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import Tag from "@/components/data-display/tag";
import Card from "@/components/layout/card";
import { useLanguage } from "@/lib/language-context";

type ProjectDetailsProps = ProjectDetailsType & {
    layoutType: "default" | "reverse";
};

const ProjectDetails = ({
    name,
    nameRu,
    description,
    descriptionRu,
    technologies,
    url,
    previewImage,
    video,
    layoutType = "default",
}: ProjectDetailsProps) => {
    const { currentLang } = useLanguage();

    // Выбираем правильные тексты в зависимости от языка
    const displayName = currentLang === "ru" && nameRu ? nameRu : name;
    const displayDescription =
        currentLang === "ru" && descriptionRu ? descriptionRu : description;
    return (
        <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
            {/* Image */}
            <div
                className={mergeClasses(
                    "flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12",
                    layoutType === "default"
                        ? "md:rounded-l-xl md:border-r"
                        : "md:order-last md:rounded-r-xl md:border-l"
                )}
            >
                {video ? (
                    <video
                        controls
                        className="h-auto w-full rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                        style={{ objectFit: "cover", maxHeight: "70vh" }}
                    >
                        <source src={video} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                ) : previewImage ? (
                    <Link noCustomization href={url} externalLink>
                        <Image
                            src={previewImage}
                            alt={`${displayName} preview`}
                            className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                            style={{ objectFit: "cover" }}
                        />
                    </Link>
                ) : null}
            </div>

            {/* Content */}
            <div
                className={mergeClasses(
                    "flex flex-col gap-6 p-8 md:w-1/2 lg:p-12",
                    layoutType === "default" ? "" : "md:order-first"
                )}
            >
                <Typography
                    variant="subtitle"
                    className="font-semibold text-gray-900"
                >
                    {displayName}
                </Typography>
                <Typography>{displayDescription}</Typography>
                <div className="flex flex-wrap gap-2">
                    {technologies?.map((technology, index) => (
                        <Tag key={index} label={technology} />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default ProjectDetails;
