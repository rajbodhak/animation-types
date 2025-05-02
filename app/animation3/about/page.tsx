import { PageTransition } from "@/components/animation3cpt/PageTransition";

export default function About() {
    return (
        <PageTransition forceVariant="slide">
            <main className="max-w-6xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-lg mb-6">
                    Learn more about our company and team. This page uses a slide transition.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio
                        vitae vestibulum vestibulum. Cras porttitor metus justo, ut imperdiet eros
                        suscipit quis. Praesent et diam eget libero egestas mattis sit amet vitae augue.
                    </p>
                    <p>
                        Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut
                        libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </p>
                </div>
            </main>
        </PageTransition>
    );
}