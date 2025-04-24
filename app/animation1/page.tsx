import type { NextPage } from 'next';
import StaggeredLoadAnimation from '@/components/StaggeredLoadAnimation';

// Optional: Define custom items
const customItems = [
    { id: 1, title: "Blog Post 1", image: "/api/placeholder/300/200", price: "5 min read" },
    { id: 2, title: "Blog Post 2", image: "/api/placeholder/300/200", price: "3 min read" },
    // Add more items as needed
];

const Home: NextPage = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-8 text-center">My Website</h1>

            {/* Use with default items */}
            <StaggeredLoadAnimation />

            {/* Or use with custom items and delay */}
            {/* <StaggeredLoadAnimation items={customItems} delay={200} /> */}
        </div>
    );
};

export default Home;