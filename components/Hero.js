export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 max-w-lg shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-6">
            Explore a curated collection of timeless classics and modern
            masterpieces.
          </p>
          <a
            href="#featured"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition"
          >
            Explore Books
          </a>
        </div>
      </div>
    </section>
  );
}
