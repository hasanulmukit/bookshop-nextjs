import Image from "next/image";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Must-Read Classics",
      image: "/images/blog_1.jpg",
      excerpt:
        "Explore the timeless classics that have shaped literature and continue to inspire readers.",
      date: "2025-02-15",
    },
    {
      id: 2,
      title: "The Future of Reading in the Digital Age",
      image: "/images/blog_2.jpg",
      excerpt:
        "How technology is transforming the way we read and purchase books.",
      date: "2025-02-10",
    },
    {
      id: 3,
      title: "Interview with a Bestselling Author",
      image: "/images/blog_3.jpg",
      excerpt:
        "An exclusive interview with a renowned author about their journey and creative process.",
      date: "2025-02-05",
    },
  ];

  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition hover:shadow-2xl"
            >
              {/* Relative container with fixed height */}
              <div className="relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <p className="text-gray-500 text-sm">
                  Published on {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
