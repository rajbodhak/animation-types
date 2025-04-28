import React from 'react';

interface SkeletonLoaderProps {
    type?: 'card' | 'listItem' | 'text';
    count?: number;
}

export default function SkeletonLoader({ type = 'card', count = 1 }: SkeletonLoaderProps) {
    // Different skeleton types
    const skeletons = {
        card: (
            <div className="bg-white p-4 rounded-lg shadow w-full">
                <div className="animate-pulse">
                    <div className="h-40 bg-gray-200 rounded mb-4"></div>
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        ),

        listItem: (
            <div className="bg-white p-3 rounded-md shadow mb-2 w-full">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                    <div className="flex-1 space-y-2 py-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        ),

        text: (
            <div className="animate-pulse space-y-2 w-full">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
        )
    };

    return (
        <>
            {Array(count).fill(0).map((_, i) => (
                <div key={i} className="mb-4">
                    {skeletons[type]}
                </div>
            ))}
        </>
    );
}