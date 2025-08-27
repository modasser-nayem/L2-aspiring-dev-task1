import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-gray-300 mt-10">
         <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
               <h2 className="text-2xl font-bold text-white">✨ Blogger</h2>
               <p className="mt-3 text-sm">
                  Share your stories, ideas, and creativity with the world.
               </p>
            </div>

            {/* Quick Links */}
            <div>
               <h3 className="font-semibold text-lg text-white">Quick Links</h3>
               <ul className="mt-3 space-y-2 text-sm">
                  <li>
                     <Link
                        href="/"
                        className="hover:text-yellow-400"
                     >
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/posts/create"
                        className="hover:text-yellow-400"
                     >
                        Create Post
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/about"
                        className="hover:text-yellow-400"
                     >
                        About
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/contact"
                        className="hover:text-yellow-400"
                     >
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>

            {/* Socials */}
            <div>
               <h3 className="font-semibold text-lg text-white">Follow Us</h3>
               <div className="flex space-x-4 mt-3">
                  <Link
                     href="https://github.com"
                     target="_blank"
                  >
                     <Github className="hover:text-yellow-400" />
                  </Link>
                  <Link
                     href="https://linkedin.com"
                     target="_blank"
                  >
                     <Linkedin className="hover:text-yellow-400" />
                  </Link>
                  <Link
                     href="https://twitter.com"
                     target="_blank"
                  >
                     <Twitter className="hover:text-yellow-400" />
                  </Link>
               </div>
            </div>
         </div>

         <div className="border-t border-gray-700 text-center py-4 text-sm">
            © {new Date().getFullYear()} Blogger. All rights reserved.
         </div>
      </footer>
   );
}
