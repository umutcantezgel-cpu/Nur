export interface Product {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    price: number;
    formattedPrice: string;
    imageUrl: string;
    imageAlt: string;
    badge?: string;
    category: string;
    isNew?: boolean;
    inStock: boolean;
}

export interface JournalArticle {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    publishedAt: string;
    author: string;
}

export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
}
