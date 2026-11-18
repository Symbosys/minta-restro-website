import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mintarestro.com"),

  title: {
    default: "Minta Restro | Discover Authentic Food & Order Online",
    template: "%s | Minta Restro",
  },

  description:
    "Discover authentic Indian food with Minta Restro. Explore delicious chicken biryani, mutton biryani, Hyderabadi dum biryani, dosa, idli and traditional thalis. Find local flavours in Ranchi, Jamshedpur and Dhanbad.",

  applicationName: "Minta Restro",

  keywords: [
    "Minta Restro",
    "Restro",
    "food ordering app",
    "order food online",
    "biryani online",
    "chicken biryani",
    "mutton biryani",
    "Hyderabadi dum biryani",
    "South Indian food",
    "dosa",
    "idli",
    "traditional Indian thali",
    "food in Ranchi",
    "food in Jamshedpur",
    "food in Dhanbad",
    "local food discovery",
  ],

  authors: [{ name: "Minta Restro" }],
  creator: "Minta Restro",
  publisher: "Minta Restro",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mintarestro.com",
    siteName: "Minta Restro",
    title: "Minta Restro | Discover Authentic Food",
    description:
      "Explore delicious biryani, South Indian dishes and traditional Indian meals with Minta Restro.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minta Restro - Authentic Indian Food",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Minta Restro | Discover Authentic Food",
    description:
      "Discover authentic biryani, dosa, idli and traditional Indian food with Minta Restro.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "nSsWDLrheX-E6n_4bQVNBbjRiEs8GvhKLdTKvfTnW78",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/biryani.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/pizza.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/dosa.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/idli.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/indianthali.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/burger.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/muttonbiryani.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/thali.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/rava.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/cake.png"
          fetchPriority="high"
          type="image/png"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
