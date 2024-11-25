import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";
import AuthProvider from "@/provider/AuthProvider";
import { Toaster } from "react-hot-toast";

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
  title: {
    default: "Play",
    template: "%s | Play"
  },
  description: "Gaming Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto" >
        <AuthProvider>
          <Navbar></Navbar>
          <div>
            {children}
          </div>
          <Footer></Footer>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
