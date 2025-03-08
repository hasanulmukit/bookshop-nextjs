import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-2 font-bold text-2xl text-gray-800">
              BookStore
            </span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/">
            <span className="cursor-pointer hover:text-primary">Home</span>
          </Link>
          <Link href="/#about">
            <span className="cursor-pointer hover:text-primary">About</span>
          </Link>
          <Link href="/#featured">
            <span className="cursor-pointer hover:text-primary">Featured</span>
          </Link>
          <Link href="/#new">
            <span className="cursor-pointer hover:text-primary">
              New Arrivals
            </span>
          </Link>
          <Link href="/#reviews">
            <span className="cursor-pointer hover:text-primary">Reviews</span>
          </Link>
          <Link href="/#blog">
            <span className="cursor-pointer hover:text-primary">Blog</span>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden bg-white/80 backdrop-blur-md">
        <div className="flex flex-col space-y-2 px-4 py-2 text-gray-700">
          <Link href="/">
            <span className="cursor-pointer hover:text-primary">Home</span>
          </Link>
          <Link href="/#about">
            <span className="cursor-pointer hover:text-primary">About</span>
          </Link>
          <Link href="/#featured">
            <span className="cursor-pointer hover:text-primary">Featured</span>
          </Link>
          <Link href="/#new">
            <span className="cursor-pointer hover:text-primary">
              New Arrivals
            </span>
          </Link>
          <Link href="/#reviews">
            <span className="cursor-pointer hover:text-primary">Reviews</span>
          </Link>
          <Link href="/#blog">
            <span className="cursor-pointer hover:text-primary">Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
