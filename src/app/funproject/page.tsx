import Footer from '@/components/footer'
import React from 'react'
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
    <div>
    <span className="flex items-center justify-center text-xl font-semibold p-6">
        fun projects
      </span>
      <div className="mb-5">
        <p className="p-2 text-gray-600 font-semibold"><span className='text-xl'></span></p>
        <div className="mb-5">
        <Link href="https://github.com/breeworks/QR-generator">
          <span className="font-semibold">
          Web site that create QR.
          </span>
        </Link>
        <p className="p-2 text-gray-600">
          Make your own QR. Just for fun 😃
        </p>
      </div>
      </div>     
      {/* Footer */}
      <Footer />
    </div>
    </main>
  )
}