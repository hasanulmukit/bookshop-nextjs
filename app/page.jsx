import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import FeaturedBooks from "../components/FeaturedBooks";
import NewArrivals from "../components/NewArrivals";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

async function getBooks() {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  const books = await res.json();
  return books;
}

export default async function Home() {
  const books = await getBooks();
  return (
    <>
      <Navbar />
      <main className="space-y-16">
        <Hero />
        <Services />
        <About />
        <FeaturedBooks books={books.slice(0, 4)} />
        <NewArrivals books={books.slice(4)} />
        <Reviews />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
