import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Play",
  description: "Gaming Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    className="font-roboto" >
        <Navbar></Navbar>
       <div>
       {children}
       </div>
       <Footer></Footer>
      </body>
    </html>
  );
}
