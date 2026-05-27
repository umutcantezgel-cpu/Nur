import { Metadata } from 'next';
import { MOCK_JOURNAL } from '@/lib/mock-data';
import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = MOCK_JOURNAL.find(p => p.id === slug) || MOCK_JOURNAL[0];

  const ogImageUrl = `https://ay-nur.de/api/og?title=${encodeURIComponent(article.title)}`;

  return constructMetadata({
    title: `${article.title} | Nur Journal`,
    description: article.excerpt,
    image: typeof article.imageUrl === 'string' && article.imageUrl !== '' ? article.imageUrl : ogImageUrl,
    keywords: ["Islamic interior design", "Quran gift ideas", "Islamic lifestyle", "Muslim gifts", "handcrafted prayer rugs"],
  });
}

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
