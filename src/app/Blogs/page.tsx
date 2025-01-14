import Footer from '@/components/footer'
import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <span className="flex items-center justify-center text-xl font-semibold p-6">
        devs blogs
      </span>
      <div className="mb-5">
          <span className="font-semibold">
        {/* posting soon */}
          {/* <a href="https://www.notion.so/NEXT-JS-17b780a2188f80ca90dcd0e55d9054e1" rel='noopener noreferrer' target='_blank' className='ml-1' > nextjs in depth </a> */}
          coming soon 🔜
          </span>
        <p className="p-2 text-gray-600">
        this is a blog on ....🤔
        </p>
      </div>
      {/* footer */}
      <Footer />
    </main>  )
}
