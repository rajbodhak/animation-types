import { PageTransition } from "@/components/animation3cpt/PageTransition";

export default function Home() {
    return (
        <PageTransition>
            <main className="max-w-6xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6">Welcome to our Website</h1>
                <p className="text-lg mb-4">
                    This is a demonstration of smooth page transitions in Next.js.
                    Use the controls above to change the transition type!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lacinia odio vitae vestibulum vestibulum.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
                        <p>
                            Praesent et diam eget libero egestas mattis sit amet vitae augue.
                            Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
                        </p>
                    </div>
                </div>
            </main>
        </PageTransition>
    );
}