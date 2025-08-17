"use client";

import Button from "@/components/general/button";
import { useLanguage } from "@/lib/language-context";

const LanguageSwitcher = () => {
    const { currentLang, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "ru" : "en";
        setLanguage(newLang);
    };

    return (
        <Button
            onClick={toggleLanguage}
            className="bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200"
        >
            {currentLang === "en" ? "RU" : "EN"}
        </Button>
    );
};

export default LanguageSwitcher;
