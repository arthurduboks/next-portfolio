import Head from "next/head";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Favicon from "@/public/favicon.ico";
import { Person, WithContext } from "schema-dts";

// Define schema and metadata types
interface IconLink {
  rel: string;
  url: string;
}

interface Metadata {
  title: string;
  description: string;
  icons: IconLink[];
}

// Metadata for the site
export const metadata: Metadata = {
  title: "Arthur Duboks - Full Stack React Developer, Montreal",
  description:
    "Arthur Duboks is a Full Stack Developer from Montreal with a deep focus on React, and its eco-system.",
  icons: [{ rel: "icon", url: Favicon.src as string }],
};

type ExtendedPerson = Person & {
  headline?: string;
  image?: string;
};

function getPersonJsonLd(): WithContext<ExtendedPerson> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arthur Duboks",
    url: "http://www.arthurduboks.com",
    jobTitle: "Full Stack Developer",
    headline: metadata.title,
    image:
      "https://www.codebyarthur.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofileimg.6e291786.png&w=384&q=85",
    sameAs: [
      "https://github.com/arthurduboks",
      "https://www.linkedin.com/in/arthur-duboks",
    ],
    description: metadata.description,
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons.map((icon, index) => (
          <link key={index} rel={icon.rel} href={icon.url} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()),
          }}
        />
      </Head>
      <main className="flex flex-col items-center pt-24">
        <Intro />
        <Divider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
