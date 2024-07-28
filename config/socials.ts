import { Icons } from "@/components/icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@hmiftachul11",
        icon: Icons.gitHub,
        link: "https://github.com/hmiftachul11",
    },
    {
        name: "LinkedIn",
        username: "Miftachul Huda",
        icon: Icons.linkedin,
        link: "https://www.linkedin.com/in/miftachulhuda/",
    },
    {
        name: "Twitter",
        username: "@hmiftachul11",
        icon: Icons.twitter,
        link: "https://twitter.com/hmiftachul_",
    },
    {
        name: "Gmail",
        username: "hmiftachul11",
        icon: Icons.gmail,
        link: "mailto:hmiftachul11@gmail.com",
    },
];
