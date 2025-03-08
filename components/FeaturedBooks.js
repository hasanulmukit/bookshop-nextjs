import BookCard from "./BookCard";
import Link from "next/link";

export default function FeaturedBooks({ books }) {
  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {books.map((book) => (
            <Link key={book.id} href={`/book/${book.id}`}>
              <div className="cursor-pointer">
                <BookCard book={book} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
