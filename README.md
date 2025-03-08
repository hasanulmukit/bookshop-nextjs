# Modern BookStore

Modern BookStore is a sleek, glassmorphic online bookstore built with Next.js 13 using the new App Router and Tailwind CSS. It showcases a curated collection of books with featured sections, new arrivals, dynamic blog posts, and detailed book pages—all designed with a modern, responsive aesthetic.

## Features

- **Modern Design & Glassmorphism:**  
  Enjoy a contemporary look with glass-like translucent cards, gradient backgrounds, and smooth hover transitions.

- **Next.js 13 & App Router:**  
  Leverages the new App Router and server components for improved performance and structure.

- **Tailwind CSS:**  
  Rapid styling with Tailwind CSS and custom theme extensions.

- **Dynamic Book Pages:**  
  Each book card links to a dedicated page with detailed information and “Add to Cart” functionality.

- **Built-In API Route:**  
  Sample book data is served from an API endpoint within the project.

- **Optimized Images & Local Icons:**  
  Uses Next.js’s Image component for optimal loading; images and icons are served from the local `public` folder.

## File Structure

```plaintext

bookstore/
├── app/
│ ├── api/
│ │ └── books/
│ │ └── route.js # API endpoint serving book data
│ ├── book/
│ │ └── [id]/
│ │ └── page.js # Dynamic book detail page
│ ├── layout.js # Global layout for the app
│ └── page.js # Home page ├── components/
│ ├── Navbar.js # Navigation bar with links and logo
│ ├── Hero.js # Hero section with glassmorphic overlay and gradient text
│ ├── Services.js # Service section using local PNG icons
│ ├── About.js # About section with a properly scaled image
│ ├── FeaturedBooks.js # Section for featured books
│ ├── NewArrivals.js # Section for new arrival books
│ ├── BookCard.js # Reusable book card component with fixed height
│ ├── Reviews.js # Customer reviews section
│ ├── Blog.js # Blog section with glassmorphic cards
│ ├── Footer.js # Footer with social icons and newsletter
│ └── BookDetailContent.js # Detailed book page content (client component)
├── public/
│ ├── images/ # Contains images (logo, hero-bg, book covers, about, etc.)
│ └── icons/ # Contains PNG icons for social media & services (e.g. fast_delivery.png)
├── tailwind.config.js # Tailwind CSS configuration
├── package.json
└── README.md
```

### Contributing

Contributions and suggestions are welcome! Open an issue or submit a pull request if you have ideas for improvements.

### License

This project is licensed under the MIT License.
