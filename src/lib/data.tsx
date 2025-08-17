import { Github, Instagram, MessageCircle } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoReactNative from "/public/images/logos/icon-react.svg";
import LogoSupabase from "/public/images/logos/icon-supabase.svg";
import LogoBootstrap from "/public/images/logos/icon-bootstrap.svg";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import {
    ExperienceDetails,
    ProjectDetails,
    TechDetails,
    TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
    GITHUB: "https://github.com/Viskhan-95",
    GITHUB_REPO: "https://github.com/Viskhan-95/portfolio",
    TWITTER: "https://twitter.com/shahsagarm",
    FIGMA: "https://www.figma.com/@shahsagarm",
    FIGMA_FILE:
        "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Education",
        href: "#education",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

// Мультиязычные тексты для навигации
export const NAV_LINKS_TEXTS = {
    en: [
        {
            label: "About",
            href: "#about",
        },
        {
            label: "Work",
            href: "#work",
        },
        {
            label: "Education",
            href: "#education",
        },
        {
            label: "Contact",
            href: "#contact",
        },
    ],
    ru: [
        {
            label: "Обо мне",
            href: "#about",
        },
        {
            label: "Мои работы",
            href: "#work",
        },
        {
            label: "Образование",
            href: "#education",
        },
        {
            label: "Контакты",
            href: "#contact",
        },
    ],
};

export const SOCIAL_LINKS = [
    {
        icon: Github,
        url: "https://github.com/Viskhan-95",
    },
    {
        icon: Instagram,
        url: "https://instagram.com/viskhan.rkb",
    },
    {
        icon: MessageCircle,
        url: "https://t.me/viskhan1987",
    },
];

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: "Javascript",
        logo: LogoJavascript,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        label: "Typescript",
        logo: LogoTypescript,
        url: "https://www.typescriptlang.org/",
    },
    {
        label: "React",
        logo: LogoReact,
        url: "https://react.dev/",
    },
    {
        label: "React Native",
        logo: LogoReactNative,
        url: "https://reactnative.dev/",
    },
    {
        label: "Next.js",
        logo: LogoNextjs,
        url: "https://nextjs.org/",
    },
    {
        label: "Node.js",
        logo: LogoNodejs,
        url: "https://nodejs.org/en",
    },
    {
        label: "Express.js",
        logo: LogoExpress,
        darkModeLogo: LogoExpressLight,
        url: "https://expressjs.com/",
    },
    {
        label: "Socket.io",
        logo: LogoSocket,
        darkModeLogo: LogoSocketLight,
        url: "https://socket.io/",
    },
    {
        label: "PostgreSQL",
        logo: LogoPostgreSQL,
        url: "https://www.postgresql.org/",
    },
    {
        label: "MongoDB",
        logo: LogoMongoDB,
        url: "https://www.mongodb.com/",
    },
    {
        label: "Supabase",
        logo: LogoSupabase,
        url: "https://supabase.com/",
    },
    {
        label: "Tailwindcss",
        logo: LogoTailwindcss,
        url: "https://tailwindcss.com/",
    },
    {
        label: "Bootstrap",
        logo: LogoBootstrap,
        url: "https://getbootstrap.com/",
    },
    {
        label: "Figma",
        logo: LogoFigma,
        url: "https://www.figma.com/",
    },
    {
        label: "Git",
        logo: LogoGit,
        url: "https://git-scm.com/",
    },
];

export const EXPERIENCES: ExperienceDetails[] = [
    {
        logo: LogoUpwork,
        logoAlt: "Hospital logo",
        companyName: "Республиканская клиническая больница им. А. А. Кадырова",
        companyNameEn: "Republican Clinical Hospital named after A. A. Kadyrov",
        position: "",
        startDate: new Date(2015, 2), // Март (месяц 2)
        endDate: new Date(2022, 7), // Август (месяц 7)
        summary: ["Начальник информационного отдела", "Программист"],
        summaryEn: ["Head of the Information Department", "Programmer"],
    },
    {
        logo: LogoUpwork,
        logoAlt: "Shali hospital logo",
        companyName: "Шалинская центральная районная больница",
        companyNameEn: "Shali Central District Hospital",
        position: "",
        startDate: new Date(2022, 9), // Октябрь (месяц 9)
        endDate: new Date(2024, 7), // Август (месяц 7)
        summary: ["Начальник информационного отдела"],
        summaryEn: ["Head of the Information Department"],
    },
    {
        logo: LogoUpwork,
        logoAlt: "Medical center logo",
        companyName: "Медицинский информационно-аналитический центр",
        companyNameEn: "Medical Information and Analytical Center",
        position: "",
        startDate: new Date(2022, 3), // Апрель (месяц 3)
        endDate: new Date(2023, 3), // Апрель (месяц 3)
        summary: ["Программист"],
        summaryEn: ["Programmer"],
    },
];

export const PROJECTS: ProjectDetails[] = [
    {
        name: "Coffee Shop Mobile App",
        nameRu: "Мобильное приложение для кофейни",
        description:
            "Mobile application for a coffee shop with the ability to view a product, add to favorites, basket, order a product both with online payment and delivery, and on-site.",
        descriptionRu:
            "Мобильное приложение для кофейни с возможностью просмотра товара, добавления в избранное, корзину, заказа продукта как с онлайн оплатой и доставкой, так и на месте.",
        url: "",
        previewImage: null, // Убираем изображение, так как есть видео
        video: "/videos/Coffee.mp4", // Добавляем видео
        technologies: [
            "React Native",
            "TypeScript",
            "Redux Toolkit",
            "Node.js",
            "Express.js",
            "PostgreSQL",
        ],
    },
    {
        name: "Pharmacy Mobile App",
        nameRu: "Мобильное приложение для аптеки",
        description:
            "Mobile application for a pharmacy with the ability to view products, add to cart, order products both with online payment and delivery, and on-site, as well as with a news page.",
        descriptionRu:
            "Мобильное приложение для аптеки с возможностью просмотра товара, добавления в корзину, заказа продукта как с онлайн оплатой и доставкой, так и на месте, а также с новостной страницей.",
        url: "#",
        previewImage: null, // Убираем изображение
        technologies: [
            "React Native",
            "TypeScript",
            "Redux Toolkit",
            "Node.js",
            "Express.js",
            "PostgreSQL",
        ],
    },
];

export const EDUCATION = [
    {
        institutionName: "Магнитогорский колледж современного образования",
        institutionNameEn: "Magnitogorsk College of Modern Education",
        logo: null,
        degree: "Менеджмент",
        degreeEn: "Management",
        period: "2004 - 2007 гг",
        periodEn: "2004 - 2007",
        description: "Специализация в области менеджмента и управления.",
        descriptionEn: "Specialization in management and administration.",
    },
    {
        institutionName:
            "Российский государственный профессионально-педагогический университет",
        institutionNameEn: "Russian State Vocational Pedagogical University",
        logo: null,
        degree: "Антикризисное управление, оценка собственности",
        degreeEn: "Crisis Management, Property Valuation",
        period: "2007 - 2011 гг",
        periodEn: "2007 - 2011",
        description:
            "Специализация в области антикризисного управления и оценки собственности.",
        descriptionEn:
            "Specialization in crisis management and property valuation.",
    },
    {
        institutionName:
            "Грозненский колледж экономики и информационных технологий",
        institutionNameEn:
            "Grozny College of Economics and Information Technologies",
        logo: null,
        degree: "Программирование в компьютерных системах",
        degreeEn: "Programming in Computer Systems",
        period: "2017 - 2020 гг",
        periodEn: "2017 - 2020",
        description:
            "Специализация в области программирования и компьютерных систем.",
        descriptionEn: "Specialization in programming and computer systems.",
    },
    {
        institutionName: "Чеченский государственный университет",
        institutionNameEn: "Chechen State University",
        logo: null,
        degree: "Инфокоммуникационные технологии и системы связи",
        degreeEn:
            "Information and Communication Technologies and Communication Systems",
        period: "2020 - 2025 гг",
        periodEn: "2020 - 2025",
        description:
            "Специализация в области инфокоммуникационных технологий и систем связи.",
        descriptionEn:
            "Specialization in information and communication technologies and communication systems.",
    },
];

export const TESTIMONIALS: TestimonialDetails[] = [
    {
        personName: "Krisztian Gyuris",
        personAvatar: null,
        title: "Founder - inboxgenie.io",
        testimonial:
            "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
    },
    {
        personName: "Eugen Esanu",
        personAvatar: null,
        title: "Founder - shosho.design",
        testimonial:
            "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
    },
    {
        personName: "Joe Matkin",
        personAvatar: null,
        title: "Freelancer",
        testimonial:
            "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
    },
];

// Мультиязычные тексты для hero секции
export const HERO_TEXTS = {
    en: {
        greeting: "Hi, I'm Viskhan",
        description:
            "I'm a full stack developer (React Native & Node.js) with a focus on creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I have been creating mobile applications.",
        location: "Grozny, Russia",
        availability: "Available for new projects",
    },
    ru: {
        greeting: "Ассаламу 1алайкум, меня зовут Висхан",
        description:
            "Я fullstack разработчик (React Native и Node.js), специализирующийся на создании уникальных цифровых решений: быстрых, доступных, визуально привлекательных и адаптивных. Занимаюсь я разработкой мобильных приложений.",
        location: "Грозный, Россия",
        availability: "Доступен для новых проектов",
    },
};

// Мультиязычные тексты для секции "Skills"
export const SKILLS_TEXTS = {
    en: {
        tag: "Skills",
        subtitle: "The skills, tools and technologies I am really good at:",
    },
    ru: {
        tag: "Навыки",
        subtitle:
            "Навыки, инструменты и технологии, в которых я действительно хорош:",
    },
};

// Мультиязычные тексты для секции "Experience"
export const EXPERIENCE_TEXTS = {
    en: {
        tag: "Experience",
        subtitle: "Here is a brief overview of my work experience:",
    },
    ru: {
        tag: "Опыт работы",
        subtitle: "Вот краткое резюме моего опыта работы:",
    },
};

// Мультиязычные тексты для секции "Work"
export const WORK_TEXTS = {
    en: {
        tag: "Work",
        subtitle: "Some of the noteworthy projects I have built:",
    },
    ru: {
        tag: "Мои работы",
        subtitle: "Некоторые из примечательных проектов, которые я создал:",
    },
};

// Мультиязычные тексты для секции "Education"
export const EDUCATION_TEXTS = {
    en: {
        tag: "Education",
        subtitle: "My educational background and certifications:",
    },
    ru: {
        tag: "Образование",
        subtitle: "Мое образование и сертификаты:",
    },
};

// Мультиязычные тексты для секции "Contact"
export const CONTACT_TEXTS = {
    en: {
        tag: "Contact",
        title: "Get in touch",
        subtitle:
            "What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.",
        platforms: "You may also find me on these platforms!",
    },
    ru: {
        tag: "Контакты",
        title: "Свяжитесь со мной",
        subtitle:
            "Что дальше? Не стесняйтесь обращаться ко мне, если вы ищете разработчика, у вас есть вопрос или просто хотите связаться.",
        platforms: "Вы также можете найти меня на этих платформах!",
    },
};

// Мультиязычные тексты для секции "About me"
export const ABOUT_ME_TEXTS = {
    en: {
        tag: "About me",
        title: "Curious about me? Here you have it:",
        paragraph1:
            "I'm a passionate self-proclaimed IT specialist specializing in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, perfect design, and writing clean, readable, high-performance code matters to me.",
        paragraph2:
            "I began my journey as a web developer in 2018, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies. Now, I create cutting-edge web applications using modern technologies such as Next.js, TypeScript, Tailwindcss, Supabase and much more.",
        paragraph3:
            "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.",
        paragraph4: {
            start: "When I'm not in full-on developer mode, you can find me on Telegram or WhatsApp, witnessing the journey of early startups or enjoying some free time.",
        },
        quickBits: "Finally, some quick bits about me.",
        list1: ["Full time freelancer"],
        list2: ["Passionate learner"],
        final: "One last thing, I'm available for freelance work, so feel free to reach out and say hello! 😉",
    },
    ru: {
        tag: "Обо мне",
        title: "Интересно узнать обо мне? Вот что я могу рассказать:",
        paragraph1:
            "Я страстный самопровозглашенный IT-специалист, специализирующийся на full stack разработке (React.js & Node.js). Я с энтузиазмом отношусь к тому, чтобы оживлять технические и визуальные аспекты цифровых продуктов. Для меня важны пользовательский опыт, идеальный дизайн и написание чистого, читаемого, высокопроизводительного кода.",
        paragraph2:
            "Я начал свой путь как веб-разработчик в 2018 году, и с тех пор продолжаю расти и развиваться как разработчик, принимая новые вызовы и изучая последние технологии. Теперь, я создаю передовые веб-приложения, используя современные технологии, такие как Next.js, TypeScript, Tailwindcss, Supabase и многое другое.",
        paragraph3:
            "Я очень прогрессивно мыслю и люблю работать над продуктами от начала до конца, от идеи до разработки.",
        paragraph4: {
            start: "Когда я не в режиме полной разработки, вы можете найти меня в Telegram или WhatsApp, наблюдая за путешествием ранних стартапов или наслаждаясь свободным временем.",
        },
        quickBits: "И наконец, несколько быстрых фактов обо мне.",
        list1: ["Полный рабочий день фрилансер"],
        list2: ["Страстный ученик"],
        final: "И последнее, я доступен для фриланс-работы, так что не стесняйтесь обращаться и поздороваться! 😉",
    },
};
