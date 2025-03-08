import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      image: "/images/review_1.png",
      text: "An amazing collection of books with excellent customer service!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mark Smith",
      image: "/images/review_2.png",
      text: "I love the variety and quality of the books. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      name: "Emma Williams",
      image: "/images/review_3.png",
      text: "A great place to find both classics and new releases. Love it!",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">
                    {review.name}
                  </h4>
                  <div className="flex">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.784.57-1.838-.197-1.54-1.118l1.286-3.953a1 1 0 00-.364-1.118L2.07 9.38c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.953z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
