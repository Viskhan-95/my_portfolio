"use client";

import Typography from "@/components/general/typography";
import ImageWrapper from "@/components/data-display/image-wrapper";
import Card from "@/components/layout/card";
import { ExperienceDetails as ExperienceDetailsProps } from "@/lib/types";
import { useLanguage } from "@/lib/language-context";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
};

const dateFormatOptionsRu: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
};

const ExperienceDetails = ({
    logo,
    darkModeLogo,
    logoAlt,
    companyName,
    companyNameEn,
    position,
    currentlyWorkHere,
    startDate,
    endDate,
    summary,
    summaryEn,
}: ExperienceDetailsProps) => {
    const { currentLang } = useLanguage();

    // Выбираем правильные тексты в зависимости от языка
    const displayCompanyName =
        currentLang === "en" && companyNameEn ? companyNameEn : companyName;
    const displaySummary =
        currentLang === "en" && summaryEn ? summaryEn : summary;

    // Выбираем правильный формат дат в зависимости от языка
    const dateOptions =
        currentLang === "ru" ? dateFormatOptionsRu : dateFormatOptions;
    const locale = currentLang === "ru" ? "ru-RU" : "en-US";
    return (
        <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
            <div className="max-md:order-1 md:w-1/4">
                <ImageWrapper
                    src={logo}
                    srcForDarkMode={darkModeLogo}
                    alt={logoAlt}
                    className="max-w-[120px]"
                />
            </div>
            <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
                {displayCompanyName && (
                    <Typography
                        variant="h3"
                        className="font-bold text-gray-900"
                    >
                        {displayCompanyName}
                    </Typography>
                )}
                <Typography
                    variant="subtitle"
                    className="font-semibold text-gray-900"
                >
                    {position}
                </Typography>
                <ul className="flex list-disc flex-col gap-2 md:gap-1">
                    {displaySummary?.map((sentence, index) => (
                        <Typography component="li" key={index}>
                            {sentence}
                        </Typography>
                    ))}
                </ul>
            </div>
            <div className="max-md:order-2 md:w-1/4">
                <Typography className="text-gray-700 md:text-right">
                    {new Intl.DateTimeFormat(locale, dateOptions).format(
                        startDate
                    )}{" "}
                    -{" "}
                    {currentlyWorkHere
                        ? currentLang === "ru"
                            ? "Настоящее время"
                            : "Present"
                        : endDate
                        ? new Intl.DateTimeFormat(locale, dateOptions).format(
                              endDate
                          )
                        : "NA"}
                </Typography>
            </div>
        </Card>
    );
};

export default ExperienceDetails;
