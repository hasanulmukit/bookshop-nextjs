import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-80 w-full">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {book.title}
        </h3>
        <p className="text-gray-600">by {book.author}</p>
        <div className="mt-2 flex items-baseline space-x-2">
          <span className="text-primary font-bold text-lg">
            ${book.discountPrice.toFixed(2)}
          </span>
          <span className="text-gray-500 line-through">
            ${book.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
