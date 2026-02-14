import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer"; // Import the player

// Configure fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"], 
  variable: "--font-dancing" 
});

export const metadata: Metadata = {
  title: "For My Valentine ❤️",
  description: "A surprise for someone special.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} font-sans antialiased`}>
        {/* The Music Player sits here, outside the page content so it never stops */}
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}