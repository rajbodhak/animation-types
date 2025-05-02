import { PageTransition } from "@/components/animation3cpt/PageTransition";

export default function Services() {
    return (
        <PageTransition forceVariant="slideUp">
            <main className="max-w-6xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                <p className="text-lg mb-6">
                    Explore the services we offer. This page uses a slide-up transition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Web Development",
                            description: "We create responsive, modern websites tailored to your needs."
                        },
                        {
                            title: "Mobile Apps",
                            description: "Native and cross-platform mobile applications for iOS and Android."
                        },
                        {
                            title: "UI/UX Design",
                            description: "User-centered design that enhances user experience and satisfaction."
                        }
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </PageTransition>
    );
}