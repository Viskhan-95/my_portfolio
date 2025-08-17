"use client";

import Image from "next/image";

import Typography from "@/components/general/typography";
import Card from "@/components/layout/card";
import { useLanguage } from "@/lib/language-context";

interface EducationDetailsProps {
    institutionName: string;
    institutionNameEn?: string;
    logo: any | null;
    degree: string;
    degreeEn?: string;
    period: string;
    periodEn?: string;
    description: string;
    descriptionEn?: string;
}

const EducationDetails = ({
    institutionName,
    institutionNameEn,
    logo,
    degree,
    degreeEn,
    period,
    periodEn,
    description,
    descriptionEn,
}: EducationDetailsProps) => {
    const { currentLang } = useLanguage();

    const displayInstitutionName =
        currentLang === "en" && institutionNameEn
            ? institutionNameEn
            : institutionName;
    const displayDegree = currentLang === "en" && degreeEn ? degreeEn : degree;
    const displayPeriod = currentLang === "en" && periodEn ? periodEn : period;
    const displayDescription =
        currentLang === "en" && descriptionEn ? descriptionEn : description;

    return (
        <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
            {logo && (
                <Image
                    src={logo}
                    alt={`${displayInstitutionName} logo`}
                    width={80}
                    height={80}
                    className="rounded-lg"
                />
            )}
            <Typography
                variant="subtitle"
                className="w-full text-center font-semibold text-gray-900"
            >
                {displayInstitutionName}
            </Typography>
            <Typography
                variant="body2"
                className="w-full text-center font-medium"
            >
                {displayDegree}
            </Typography>
            <Typography
                variant="body3"
                className="w-full text-center text-gray-600"
            >
                {displayPeriod}
            </Typography>
            <Typography className="w-full text-center">
                {displayDescription}
            </Typography>
        </Card>
    );
};

export default EducationDetails;
