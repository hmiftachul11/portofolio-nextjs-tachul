import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
    title: string;
    imgArr: string[];
    description?: string;
}

interface DescriptionDetailsInterface {
    paragraphs: string[];
    bullets: string[];
}

export interface ProjectInterface {
    id: string;
    type: ValidExpType;
    companyName: string;
    category: ValidCategory[];
    shortDescription: string;
    websiteLink?: string;
    githubLink?: string;
    techStack: ValidSkills[];
    startDate: Date;
    endDate: Date;
    companyLogoImg: any;
    descriptionDetails: DescriptionDetailsInterface;
    pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
    {
        id: "diktein",
        companyName: "Diktein",
        type: "Professional",
        category: ["Frontend", "Web Dev", "UI/UX"],
        shortDescription:
            "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
        websiteLink: "https://www.bahasakita.co.id/#/",
        techStack: [
            "React",
            "Node.js",
            "MongoDB",
            "Typescript",
            "Javascript",
            "Tailwind CSS",
            "React Bootstrap",
            "WebSocket",
        ],
        startDate: new Date("2024-04-02"),
        endDate: new Date("2024-07-28"),
        companyLogoImg: "/project/diktein/logo.png",
        pagesInfoArr: [
            {
                title: "Landing Page",
                imgArr: [
                    "/project/diktein/landing_1.png",
                    "/project/diktein/landing_2.png",
                    "/project/diktein/landing_3.png",
                ],
            },
            {
                title: "Edit Audio Transcription",
                imgArr: ["/project/diktein/edit-audio-transkripsi.png"],
            },
            {
                title: "Clients Dashboard",
                imgArr: [
                    "/project/diktein/client-dash-1.png",
                    "/project/diktein/client-dash-2.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "As a Freelance Research and Development Staff at PT Bahasa Kita, I am actively developing AI solutions for transcription, radio communication, and emotion analytics from voice data. This data is transmitted via WebSocket and integrated using Redux reducers and REST API. My responsibilities include developing advanced AI solutions, optimizing AI inference processing time, and making our AI-based products more efficient and responsive.",
                "One of the primary challenges I encountered was using WebSocket for the first time to transmit real-time data and integrating it with AI development. The use of WebSocket required the capability to handle continuous and real-time data, which demanded precise coordination between the frontend and backend. Additionally, I needed to develop AI models capable of processing data quickly and accurately to optimize inference processing time.",
                "Optimizing AI inference processing time required a deep understanding of AI algorithms, code optimization, and leveraging hardware acceleration whenever possible. One of the technologies I utilized was CUDA for GPU acceleration, which significantly reduced processing time and improved model performance.",
                "Another challenge was ensuring smooth integration between WebSocket, Redux, and REST API. This required designing a robust and scalable system architecture capable of handling large volumes of data without compromising performance.",
                "Through this project, I learned new techniques in optimization and hardware acceleration, specifically how to use CUDA to enhance AI model performance. I also developed a deeper understanding of system architecture and how to integrate various technological components to create effective and efficient AI solutions.",
                "This project has given me greater insight into the challenges and solutions in AI development and how to optimize technology to produce the best products for PT Bahasa Kita."
            ],
            bullets: [],
        },
    },
    {
        id: "ekspor-yuk",
        companyName: "EksporYuk",
        type: "Professional",
        category: ["Web Dev", "Frontend"],
        shortDescription:
            "EksporYuk is a comprehensive online course platform dedicated to export processes.",
        websiteLink:
            "https://member.eksporyuk.com",
        techStack: ["Next.js", "Node.js", "GraphQL", "Javascript", "Typescript", "Bootstrap"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-04-01"),
        companyLogoImg: "/project/eksporyuk/logo.png",
        pagesInfoArr: [
            {
                title: "Login Page",
                imgArr: ["/project/eksporyuk/web-1.png"],
            },
            {
                title: "Admin Dashboard",
                imgArr: [
                    "/project/eksporyuk/admin-dash.png",
                ],
            },
            {
                title: "Class Admin Page",
                imgArr: ["/project/eksporyuk/class-page.png"],
            },
            {
                title: "Add New Class Page",
                imgArr: [
                    "/project/eksporyuk/new-class.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                `At DSAA Group, my responsibilities encompass a wide range of tasks, focusing on developing and optimizing web applications. I developed an export application leveraging Next.js technology and GraphQL Client, ensuring efficient and streamlined data usage connected to APIs. Additionally, I implemented slicing using the Bootstrap framework to maintain a consistent and responsive application appearance. I also designed and implemented Redux reducers to manage state between parent and child components, ensuring seamless data flow and state management.`,
                `To ensure code quality and readability, I utilized Storybook as a development tool, which helped achieve 100% perfect pixel slicing for UI components. Furthermore, I developed an e-commerce application with a mobile-like UI using Next.js and the Bootstrap framework, providing a seamless user project across devices. My work at DSAA Group highlights the integration of modern technologies and tools to create efficient, responsive, and high-quality web applications.`
            ],
            bullets: [],
        },
    },
    {
        id: "vesselinggo",
        companyName: "Vesselinggo",
        type: "Professional",
        category: ["Web Dev", "Frontend"],
        shortDescription:
            "Vesselinggo is a communication app for ship-to-ship radio interactions, utilizing AI for real-time language translation. It operates with a flow of WebSocket => Redux Reducer => Frontend View, requiring continuous CPU usage for seamless, multilingual communication.",
        websiteLink:
            "https://www.bahasakita.co.id/#/",
        techStack: ["Next.js", "Node.js", "GraphQL", "Javascript", "Typescript", "Tailwind CSS", "WebSocket"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-04-01"),
        companyLogoImg: "/project/vesselinggo/logo.png",
        pagesInfoArr: [
            {
                title: "Open Application",
                imgArr: ["/project/vesselinggo/early.png"],
            },
            {
                title: "Management Data",
                imgArr: [
                    "/project/vesselinggo/management.png",
                ],
            },
            {
                title: "Conversation Page",
                imgArr: ["/project/vesselinggo/conversation.png"],
            },
            {
                title: "Management Kamus & Management Keywords",
                imgArr: [
                    "/project/vesselinggo/kamus.png",
                    "/project/vesselinggo/keyword.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [ 
                "Vesselinggo is an advanced communication application designed for ship-to-ship radio interactions, featuring real-time language translation powered by AI. The app ensures smooth and efficient communication across different languages, either automatically or by user preference, making it an essential tool for international maritime operations.",
                "The application's architecture leverages WebSocket technology to handle real-time data transmission, Redux Reducer for state management, and a dynamic frontend view to present the translated communication seamlessly. This setup allows Vesselinggo to maintain continuous and reliable communication channels between ships.",
                "Designed for continuous operation, Vesselinggo requires robust CPU hardware to support the constant data processing and translation tasks, ensuring uninterrupted service. With Vesselinggo, maritime communication is more accessible and effective, breaking down language barriers and enhancing coordination and safety at sea."      

            ],
            bullets: [],
        },
    },
    {
        id: "movietach",
        companyName: "Movietach",
        type: "Personal Project",
        category: ["Frontend", "UI/UX"],
        shortDescription:
            "I independently developed a simple movie website using React and Node.js. This platform allows users to search for and sort movie data efficiently.",
        githubLink: "https://github.com/hmiftachul11/MovieTach/",
        techStack: [
            "React",
            "Node.js",
            "Typescript",
        ],
        startDate: new Date("2022-05-14"),
        endDate: new Date("2022-05-15"),
        companyLogoImg: "/project/movietach/logo.png",
        pagesInfoArr: [
            {
                title: "Home Page",
                imgArr: ["/project/movietach/page.png"],
            },
            {
                title: "Search Page Results",
                imgArr: ["/project/movietach/search.png"],
            },
            
        ],
        descriptionDetails: {
            paragraphs: [
                `I independently developed a simple movie website using React and Node.js. This platform allows users to search for and sort movie data efficiently. The frontend, built with React, offers a dynamic and user-friendly interface, while the backend, powered by Node.js, handles data retrieval and processing. This project showcases my ability to create seamless and functional web applications by integrating modern technologies and best practices in web development.`,
                
            ],
            bullets: [],
        },
    },
    {
        id: "carrerfund",
        companyName: "CarrerFund",
        type: "Professional",
        category: ["Web Dev", "Frontend"],
        shortDescription:
            "Crowdfunding website to targeted and easy-to-use crowdfunding system. Develop frontend using React and Javascript.",
        websiteLink: "https://carrerfund.herokuapp.com",
        techStack: [
            "React",
            "Node.js",
            "MongoDB",
            "Typescript",
            "Javascript",
            "Tailwind CSS"
        ],
        startDate: new Date("2021-09-01"),
        endDate: new Date("2021-11-01"),
        companyLogoImg: "/project/carrerfund/logo.png",
        pagesInfoArr: [
            {
                title: "CarrerFund Landing Page",
                imgArr: ["/project/carrerfund/landing.png"],
            },
            {
                title: "Login Page",
                imgArr: ["/project/carrerfund/login.png"],
            },
            {
                title: "Class Page",
                imgArr: ["/project/carrerfund/kelas.png"],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                `We developed a targeted and easy-to-use crowdfunding system as a team project. The frontend was built using React and JavaScript, providing a dynamic and interactive user project. Our technology stack included React for efficient UI development, TypeScript for type safety and enhanced code quality, JavaScript for core functionality, and Tailwind CSS for streamlined and responsive styling. This combination ensured a robust, maintainable, and visually appealing crowdfunding platform.`,
            ],
            bullets: [],
        },
    },
   
];

export const featuredProjects = Projects.slice(0, 3);
