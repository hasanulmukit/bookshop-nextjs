import "./globals.css";

export const metadata = {
  title: "Modern Book Store",
  description: "Modern Book Store built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-100 to-white">
        {children}
      </body>
    </html>
  );
}
