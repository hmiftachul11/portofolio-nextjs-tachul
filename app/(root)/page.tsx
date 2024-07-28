import Link from "next/link";
import Image from "next/image";

import tachulImg from "@/public/tachul.svg";
import SkillsCard from "@/components/skills-card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredSkills } from "@/config/skills";
import { Icons } from "@/components/icons";
import { pagesConfig } from "@/config/pages";
import ProjectCard from "@/components/project-card";
import { featuredProjects } from "@/config/project";


export default async function IndexPage() {
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
                    
                    <Image
                        src={tachulImg}
                        height={100}
                        width={100}
                        sizes="100vw"
                        className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
                        alt="hmiftachul11-img"
                    />
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Miftachul Huda
                    </h1>
                    <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
                        Frontend Developer
                    </h3>
                    

                    
                    <div className="flex flex-col  mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
                        <Link
                            href={"https://github.com/hmiftachul11"}
                            target="_blank"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
                        </Link>
                        <Link
                            href={"/contact"}
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            <Icons.contact className="w-4 h-4 mr-2" /> Contact
                        </Link>
                    </div>
                    <Icons.chevronDown className="h-6 w-6 mt-10" />
                </div>
            </section>
            <section
                id="skills"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.skills.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.skills.description}
                    </p>
                </div>
                <SkillsCard skills={featuredSkills} />
                <Link href="/skills" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
                
            </section>
            <section
                id="project"
                className="container space-y-6 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.projects.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.projects.description}
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3">
                    {featuredProjects.map((exp) => (
                        <ProjectCard key={exp.id} project={exp} />
                    ))}
                </div>
                <Link href="/projects" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
            </section>
        </>
    );
}
