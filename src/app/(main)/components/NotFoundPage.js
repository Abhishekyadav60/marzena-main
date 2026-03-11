"use client"
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="404 Not Found"
            width={200}
            height={200}
            className="mx-auto block mb-3"
          />
        </div>
        
        <h2 className="mb-3 text-2xl font-semibold text-zinc-800">
          Oops! Page Not Found
        </h2>
        
        <p className="mb-4 text-gray-600 w-3/4 mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, renamed, or is temporarily unavailable.
        </p>
        

        <Link 
          href="/"
          className="inline-block px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}