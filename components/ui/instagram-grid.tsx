"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

interface InstagramPost {
    id: string;
    image: string;
    link: string;
}

export function InstagramGrid({ posts }: { posts: InstagramPost[] }) {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate loading time for skeleton display
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {posts.map((post, idx) => (
                <motion.a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="relative aspect-square overflow-hidden rounded-[24px] group block shadow-pink"
                >
                    {isLoading ? (
                        <div className="w-full h-full bg-surface-variant animate-pulse flex items-center justify-center">
                           <span className="material-symbols-outlined text-outline-variant text-[48px]">photo_camera</span>
                        </div>
                    ) : (
                        <>
                            <Image 
                                src={post.image} 
                                alt="Instagram Post" 
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                referrerPolicy="no-referrer"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-[32px]">favorite</span>
                            </div>
                        </>
                    )}
                </motion.a>
            ))}
        </div>
    );
}
