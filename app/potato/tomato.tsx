export function meta() {
    return [
        { title: "Tomato" },
        { name: "description", content: "Tomato" },
    ];
}

export function links() {
    return [{ rel: "stylesheet", href: "potato.com" }];
}

export default function Tomato() {
    return <div>Tomato</div>;
}
