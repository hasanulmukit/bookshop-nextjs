"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BookDetailContent({ book }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    // Implement further cart functionality here if needed
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white/80 backdrop-blur-md shadow p-4">
        <Link href="/" className="text-primary font-semibold">
          ← Back to Home
        </Link>
      </header>
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/3 h-96">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-gray-600 mt-2">by {book.author}</p>
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-2xl font-bold text-primary">
              ${book.discountPrice.toFixed(2)}
            </span>
            <span className="text-gray-500 line-through">
              ${book.price.toFixed(2)}
            </span>
          </div>
          <p className="mt-6 text-gray-700">{book.description}</p>
          <button
            onClick={handleAddToCart}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition"
          >
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
