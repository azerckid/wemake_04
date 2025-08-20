import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "About | wemake" },
        { name: "description", content: "About wemake" },
    ];
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground mb-4">
                We are wemake, a community of makers building the future.
            </p>
            <p className="text-lg text-muted-foreground">
                This project is built with React Router v7.
            </p>
        </div>
    );
}
