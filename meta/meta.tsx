// Define the structure for your icon links
interface IconLink {
  rel: string;
  url: string;
}

// Define the structure for your metadata
interface Metadata {
  title: string;
  description: string;
  icons: IconLink[];
}

// Define the structure for your person schema
interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  jobTitle: string;
  worksFor: { "@type": string; name: string };
  sameAs: string[];
}

export type { IconLink, Metadata, PersonSchema };
