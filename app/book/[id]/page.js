import { notFound } from "next/navigation";
import BookDetailContent from "../../../components/BookDetailContent";

export async function generateMetadata({ params }) {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  const books = await res.json();
  const book = books.find((b) => b.id === params.id);
  if (!book) {
    return { title: "Book Not Found" };
  }
  return { title: book.title };
}

export default async function BookPage({ params }) {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  const books = await res.json();
  const book = books.find((b) => b.id === params.id);
  if (!book) {
    notFound();
  }

  return <BookDetailContent book={book} />;
}
