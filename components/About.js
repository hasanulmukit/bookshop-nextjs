import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          {/* Wrap Image in a relative container for fill */}
          <div className="relative w-full h-96">
            <Image
              src="/images/about.jpg"
              alt="About Us"
              fill
              className="rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
            <p className="text-gray-700 mb-4">
              At BookStore, we believe in the transformative power of
              literature. Our collection is handpicked to deliver the best
              reading experience.
            </p>
            <p className="text-gray-700 mb-4">
              From timeless classics to modern bestsellers, each book inspires
              and enlightens.
            </p>
            <Link
              href="/#featured"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-secondary transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
