import Head from "next/head";
import NavBar from "@/components/NavBar";

export default function Layout({
  header,
  description,
  children,
}: {
  header?: string;
  subHeader?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <Head>
        <title>{`${header || ""} | Portfolio`}</title>
        <meta
          name="description"
          content={description ? description : "Portfolio"}
        />
      </Head>
      <div>
        <NavBar />
        <div className="h-screen lg:px-8">
          <main>
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
