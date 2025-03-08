export async function GET(request) {
  const books = [
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      categories: ["Self-Improvement", "Productivity"],
      price: 11.99,
      discountPrice: 9.99,
      image: "/images/atomic_habits.jpg",
      description:
        "An easy and proven way to build good habits and break bad ones.",
    },
    {
      id: "2",
      title: "Sapiens: A Brief History...",
      author: "Yuval Noah Harari",
      categories: ["History", "Nonfiction"],
      price: 18.99,
      discountPrice: 16.99,
      image: "/images/sapiens.jpg",
      description:
        "A groundbreaking narrative of humanity’s creation and evolution.",
    },
    {
      id: "3",
      title: "Educated",
      author: "Tara Westover",
      categories: ["Memoir", "Nonfiction"],
      price: 15.99,
      discountPrice: 13.99,
      image: "/images/educated.jpg",
      description:
        "A memoir about a woman who, kept out of school, leaves her survivalist family.",
    },
    {
      id: "4",
      title: "The Midnight Library",
      author: "Matt Haig",
      categories: ["Fiction", "Fantasy", "Literary Fiction"],
      price: 14.99,
      discountPrice: 12.99,
      image: "/images/midnight_library.jpg",
      description:
        "A novel about all the choices that go into a life well lived.",
    },
    {
      id: "5",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      categories: ["Fiction", "Contemporary"],
      price: 16.99,
      discountPrice: 14.99,
      image: "/images/vanishing_half.jpg",
      description:
        "A story of twin sisters and the divergent paths they take in life.",
    },
    {
      id: "6",
      title: "Project Hail Mary",
      author: "Andy Weir",
      categories: ["Sci-Fi", "Adventure"],
      price: 17.99,
      discountPrice: 15.99,
      image: "/images/project_hail_mary.jpg",
      description: "An interstellar mission to save humanity against all odds.",
    },
  ];
  return new Response(JSON.stringify(books), { status: 200 });
}
