import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-md text-gray-700 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="mb-4"
          />
          <p>
            BookStore is your one-stop destination for a wide range of books.
            Discover, explore, and fall in love with reading.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Quick Links</h4>
          <ul>
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/#featured" className="hover:text-primary">
                Featured
              </Link>
            </li>
            <li>
              <Link href="/#new" className="hover:text-primary">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/#reviews" className="hover:text-primary">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/#blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Contact Info</h4>
          <p>+1 234 567 890</p>
          <p>info@bookstore.com</p>
          <p>123 Book St, Reading City</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#">
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded mb-2 border border-gray-300"
            />
            <button
              type="submit"
              className="w-full bg-primary p-2 rounded text-white hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-600">
        &copy; {new Date().getFullYear()} BookStore. All rights reserved.
      </div>
    </footer>
  );
}
