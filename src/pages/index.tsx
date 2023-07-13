import Head from "next/head";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Project from "@/components/projects/Projects";
import Contact from "@/components/Contact";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Full-Stack Developer</title>
        <meta name="description" content="Portfolio Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
        <About />
        <Skills />
        <Project />
        <Contact />
      </Layout>
    </div>
  );
}
