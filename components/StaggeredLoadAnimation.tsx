"use client"
import React, { useState, useEffect } from 'react';

// Define types for our data
interface Item {
    id: number;
    title: string;
    image: string;
    price: string;
}

// Props type for the component
interface StaggeredLoadAnimationProps {
    items?: Item[];
    delay?: number;
}

// Sample data for demonstration
const defaultItems: Item[] = [
    { id: 1, title: "Modern Coffee Table", image: "/api/placeholder/300/200", price: "$249" },
    { id: 2, title: "Ergonomic Office Chair", image: "/api/placeholder/300/200", price: "$399" },
    { id: 3, title: "Smart LED Desk Lamp", image: "/api/placeholder/300/200", price: "$89" },
    { id: 4, title: "Minimalist Bookshelf", image: "/api/placeholder/300/200", price: "$179" },
    { id: 5, title: "Wireless Charging Pad", image: "/api/placeholder/300/200", price: "$59" },
    { id: 6, title: "Bluetooth Speaker", image: "/api/placeholder/300/200", price: "$129" },
];

const StaggeredLoadAnimation: React.FC<StaggeredLoadAnimationProps> = ({
    items = defaultItems,
    delay = 300
}) => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    const animateItems = (): void => {
        // Reset animation
        setVisibleItems([]);

        // Add items one by one with a delay
        items.forEach((item, index) => {
            setTimeout(() => {
                setVisibleItems(prev => [...prev, item.id]);
            }, delay * index);
        });
    };

    useEffect(() => {
        animateItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Product Gallery</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform ${visibleItems.includes(item.id)
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={animateItems}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Replay Animation
                </button>
            </div>
        </div>
    );
};

export default StaggeredLoadAnimation;