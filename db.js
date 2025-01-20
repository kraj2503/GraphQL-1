const games = [
        { id: "1", title: "Elden Ring", platform: ["PC", "PlayStation", "Xbox"] },
        { id: "2", title: "The Legend of Zelda: Breath of the Wild", platform: ["Nintendo Switch"] },
        { id: "3", title: "Minecraft", platform: ["PC", "PlayStation", "Xbox", "Mobile"] }
];

const authors = [
        { id: "1", name: "Alice Johnson", verified: true },
        { id: "2", name: "Bob Smith", verified: false },
        { id: "3", name: "Charlie Brown", verified: true }
];

const reviews = [
        {
                id: "1",
                rating: 5,
                content: "A truly breathtaking experience!",
                author_id: "1",
                game_id: "1"
        },
        {
                id: "2",
                rating: 2,
                content: "Masterpiece of open-world design.",
                author_id: "2",
                game_id: "1"
        },
        {
                id: "3",
                rating: 6,
                content: "Great for creativity and fun with friends.",
                author_id: "2",
                game_id: "3"
        }
];

export default { games, authors, reviews };
