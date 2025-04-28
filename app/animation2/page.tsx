"use client"

import { useState, useEffect } from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';

interface Post {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    author: string;
}

// Fake data to simulate API response
const posts: Post[] = [
    {
        id: 1,
        title: "Understanding React Hooks",
        excerpt: "Learn how to use React Hooks to simplify your component logic and state management.",
        imageUrl: "https://images.pexels.com/photos/12282166/pexels-photo-12282166.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Jane Doe"
    },
    {
        id: 2,
        title: "Next.js for Production",
        excerpt: "Discover why Next.js is the perfect framework for production-ready React applications.",
        imageUrl: "https://images.pexels.com/photos/25524747/pexels-photo-25524747/free-photo-of-close-up-of-a-eurasian-eagle-owl.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "John Smith"
    },
    {
        id: 3,
        title: "Tailwind CSS Best Practices",
        excerpt: "Effective strategies for using Tailwind CSS in large projects while keeping your codebase clean.",
        imageUrl: "https://images.pexels.com/photos/27565377/pexels-photo-27565377/free-photo-of-secluded-paradise-breathtaking-coastal-landscape-at-stokes-bay-kangaroo-island.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: "Alex Johnson"
    }
];

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Post[]>([]);

    // Simulate API call with a delay
    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setData(posts);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    // Create individual skeleton items that each occupy one grid cell
                    Array(3).fill(0).map((_, index) => (
                        <SkeletonLoader key={index} type="card" count={1} />
                    ))
                ) : (
                    data.map((post) => (
                        <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-40 object-cover rounded mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">By {post.author}</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}