"use client"

import { useState, useEffect } from 'react';

type TransitionType = 'fade' | 'slide' | 'slideUp' | 'scale';

export function useTransitionStore() {
    // Use localStorage to persist the selected transition across page navigations
    const [transitionType, setTransitionType] = useState<TransitionType>('fade');

    useEffect(() => {
        // Load saved preference from localStorage on component mount
        const savedTransition = localStorage.getItem('preferredTransition');
        if (savedTransition && ['fade', 'slide', 'slideUp', 'scale'].includes(savedTransition)) {
            setTransitionType(savedTransition as TransitionType);
        }
    }, []);

    const updateTransitionType = (type: TransitionType) => {
        setTransitionType(type);
        // Save to localStorage for persistence
        localStorage.setItem('preferredTransition', type);
    };

    return { transitionType, updateTransitionType };
}

export default function TransitionSelector() {
    const { transitionType, updateTransitionType } = useTransitionStore();

    const transitions: { type: TransitionType; label: string }[] = [
        { type: 'fade', label: 'Fade' },
        { type: 'slide', label: 'Slide' },
        { type: 'slideUp', label: 'Slide Up' },
        { type: 'scale', label: 'Scale' }
    ];

    return (
        <div className="bg-gray-100 border-b border-gray-200 py-2">
            <div className="max-w-6xl mx-auto px-4 flex items-center">
                <span className="text-sm font-medium mr-3">Transition:</span>
                <div className="flex space-x-2">
                    {transitions.map((transition) => (
                        <button
                            key={transition.type}
                            onClick={() => updateTransitionType(transition.type)}
                            className={`px-3 py-1 text-sm rounded-md transition-colors ${transitionType === transition.type
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                }`}
                        >
                            {transition.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}