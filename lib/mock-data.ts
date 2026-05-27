import { JournalArticle } from "@/types";

export type SneakPeek = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
};

export const MOCK_SNEAK_PEEKS: SneakPeek[] = [
    {
        id: "sp1",
        title: "Premium Koranhüllen",
        subtitle: "Handgefertigt aus Samt und veganem Leder",
        date: "In Produktion. Launch: Winter 2026."
    },
    {
        id: "sp2",
        title: "Aesthetic Sticker",
        subtitle: "Minimalistisches Islamic Design",
        date: "In Produktion. Launch: Winter 2026."
    },
    {
        id: "sp3",
        title: "Luxus Gebetsteppiche",
        subtitle: "Sanfte Farben, höchste Qualität",
        date: "In Produktion. Launch: Winter 2026."
    }
];

export const MOCK_TESTIMONIALS = [
    {
        id: "t1",
        name: "Amina K.",
        role: "Early Access Member",
        content: "Die Ästhetik von Nur ist genau das, wonach ich gesucht habe. Endlich ein Design-Ansatz für den Islamic Lifestyle, der minimalistisch und hochwertig ist."
    },
    {
        id: "t2",
        name: "Yusuf M.",
        role: "Design Enthusiast",
        content: "Ich verfolge die Entstehung der Manufaktur-Produkte in Istanbul auf Social Media. Die Qualität und Liebe zum Detail ist spürbar."
    },
    {
        id: "t3",
        name: "Leila S.",
        role: "Community",
        content: "Die Kombination aus tiefer Spiritualität und modernem, eleganten Design spricht mich sehr an. Ich kann den ersten Drop kaum erwarten."
    }
];

export const MOCK_FAQS = [
    {
        question: "Wann findet der erste Launch statt?",
        answer: "Unser erster exklusiver Drop, bestehend aus handgefertigten Koranhüllen und Aesthetic Stickern, ist für Winter 2026 geplant. Trage dich in die Warteliste ein, um als Erstes benachrichtigt zu werden."
    },
    {
        question: "Wo werden eure Produkte hergestellt?",
        answer: "Wir legen großen Wert auf traditionelle Handwerkskunst. Unsere Produkte werden größtenteils in ausgewählten Manufakturen in Istanbul unter ethischen Bedingungen gefertigt."
    },
    {
        question: "Was bedeutet 'Nur'?",
        answer: "'Nur' ist das arabische Wort für Licht. Es steht für Erleuchtung, spirituelle Klarheit und die innere Schönheit, die wir mit unseren Produkten in deinen Alltag bringen möchten."
    },
    {
        question: "Gibt es internationalen Versand?",
        answer: "Zum Launch werden wir primär nach Deutschland, Österreich und in die Schweiz versenden. Ein europaweiter und später internationaler Versand ist fest in Planung."
    }
];

export const MOCK_INSTAGRAM = [
    { id: "ig1", image: "https://picsum.photos/seed/ig1/600/600", link: "#" },
    { id: "ig2", image: "https://picsum.photos/seed/ig2/600/600", link: "#" },
    { id: "ig3", image: "https://picsum.photos/seed/ig3/600/600", link: "#" },
    { id: "ig4", image: "https://picsum.photos/seed/ig4/600/600", link: "#" },
];

export const MOCK_JOURNAL: JournalArticle[] = [
    {
        id: "sabr",
        title: "Die Bedeutung von Sabr im Alltag",
        excerpt: "Wie Geduld und Standhaftigkeit unser Herz in unruhigen Zeiten beruhigen können.",
        content: "Detailed content would go here...",
        category: "Spiritualität",
        imageUrl: "https://picsum.photos/seed/sabr/1200/800",
        imageAlt: "Geduld im Alltag",
        publishedAt: "2026-05-10",
        author: "Nur Editorial"
    },
    {
        id: "quran-journaling",
        title: "Quran Journaling für Anfänger",
        excerpt: "Ein minimalisitischer Guide um eine tiefere Verbindung zur Offenbarung aufzubauen.",
        content: "Detailed content would go here...",
        category: "Praxis",
        imageUrl: "https://picsum.photos/seed/quran/1200/800",
        imageAlt: "Quran Journaling",
        publishedAt: "2026-05-18",
        author: "Nur Editorial"
    }
];
