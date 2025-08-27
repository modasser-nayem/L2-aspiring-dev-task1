import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700"],
   variable: "--font-poppins",
});

export const metadata: Metadata = {
   title: "Blogger - Educational Blog Post Application",
   description:
      "Comprehensive Blog Management System for students, teachers, and administrators",
   keywords: "blog, education, blog_management",
   authors: [{ name: "Blogger Team" }],
   viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="en"
         className={`${inter.variable} ${poppins.variable}`}
      >
         <body className={`${inter.className} antialiased font-sans`}>
            <MainLayout>{children}</MainLayout>
            <Toaster
               position="top-right"
               toastOptions={{
                  duration: 4000,
                  style: {
                     background: "#363636",
                     color: "#fff",
                  },
                  success: {
                     duration: 3000,
                     iconTheme: {
                        primary: "#10B981",
                        secondary: "#fff",
                     },
                  },
                  error: {
                     duration: 5000,
                     iconTheme: {
                        primary: "#EF4444",
                        secondary: "#fff",
                     },
                  },
               }}
            />
         </body>
      </html>
   );
}
