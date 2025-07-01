import React from 'react'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <span className="flex items-center justify-center text-xl font-semibold p-6">
        Contact me 
      </span>
      <div className="mb-5">
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-semibold">
          <a href="mailto:dishafaujdar.work@gmail.com" rel='noopener noreferrer' target='_blank'  className="hover:underline">dishafaujdar.work 📬 
          </a>
          </span>
        </li>
        <li>
          <span className="font-semibold">+91 9166890988 📞</span>
        </li>
      </ul>
      </div>
      <Footer />
    </main>
  )
}
