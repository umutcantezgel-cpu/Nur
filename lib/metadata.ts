import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description,
  image = "https://ay-nur.de/og-image.webp",
  noIndex = false,
  keywords = ["Islamic lifestyle", "handcrafted decor", "Islamic interior design", "Quran gift ideas"],
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: "https://ay-nur.de",
      siteName: "Nur",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@aynur",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
