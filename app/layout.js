import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Gonzalez | Portfolio",
  description:
    "Fullstack Developer with a passion for building efficient, scalable and user-friendly web applications. Proficient in React.js, Redux, Javascript and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
