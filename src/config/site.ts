import type { NavBar, Project, Skill } from "@/types/index";

export const socialLinks = {
  github: "https://github.com/Vicjocaso",
  linkedin:
    "https://www.linkedin.com/in/victor-jos%C3%A9-calder%C3%B3n-16a194184/",
};

export const siteConfig = {
  name: "Porfolio web",
  description: "An open source porfolio web build with Nextjs",
  url: "https://portafolio-nextjs-chi.vercel.app/",
  ogImage: "",
  navbar: [
    {
      title: "Home",
      path: "/#home",
    },
    {
      title: "About",
      path: "/#about",
    },
    {
      title: "Skills",
      path: "/#skills",
    },
    {
      title: "Projects",
      path: "/#projects",
    },
    {
      title: "Contact",
      path: "/#contact",
    },
  ] satisfies NavBar[],
  project: [
    {
      title: "Nextjs-Ecommerce",
      subtitle: "Nextjs / Tailwindcss / Prisma",
      backgroundImage:
        "https://res.cloudinary.com/dvtx1e6ag/image/upload/v1690073688/Screenshot_2023-07-22_205422_du0an6.png",
      href: "https://pastry-wheat.vercel.app/",
      overview:
        "This is an ecommerce that I did with Stack T3. I wanted to improve my typescript skills.",
      technologies: ["Nextjs", "TRCP", "Prisma", "PlanetScale"],
      github: "",
    },
    {
      title: "Real State UI",
      subtitle: "Nextjs 13 / Tailwindcss",
      backgroundImage:
        "https://res.cloudinary.com/dvtx1e6ag/image/upload/v1690073579/Screenshot_2023-07-22_205237_hipux9.png",
      href: "https://real-state-ui-eight.vercel.app/",
      overview:
        "This is a personal project of a page for sales of residences, I am working on a backend with Golang and planetscale to add to that project in the future, I am working with the latest that react and nextjs 13 have released.",
      technologies: [
        "Nextjs",
        "Tailwindcss",
        "Shadcn/UI",
        "React useForm",
        "Zod",
      ],
      github: "https://github.com/Vicjocaso/real-state-ui",
    },
  ] satisfies Project[],
  skills: [
    {
      title: "NextJS",
      src: "/assets/skills/nextjs.png",
      href: "https://nextjs.org/",
    },
    {
      title: "NodeJs",
      src: "/assets/skills/node.png",
      href: "https://nodejs.org/en",
    },
    {
      title: "Tailwind",
      src: "/assets/skills/tailwind.png",
      href: "https://tailwindcss.com/",
    },
    {
      title: "GitHub",
      src: "/assets/skills/github.png",
      href: "https://github.com/",
    },
    {
      title: "ReactJs",
      src: "/assets/skills/reactjs.png",
      href: "https://react.dev/",
    },
    {
      title: "TypeScript",
      src: "/assets/skills/typescript.png",
      href: "https://www.typescriptlang.org/",
    },
    {
      title: "Golang",
      src: "/assets/skills/golang.png",
      href: "https://golang.google.cn/",
    },
  ] satisfies Skill[],
};
