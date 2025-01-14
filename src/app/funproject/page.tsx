import Footer from '@/components/footer'
import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
    <div>
    <span className="flex items-center justify-center text-xl font-semibold p-6">
        serious projects
      </span>
      <div className="mb-5">
        <p className="p-2 text-gray-600 font-semibold">
          under construction <span className='text-xl'>🚧</span>
        </p>
      </div>     
      {/* Footer */}
      <Footer />
    </div>
    </main>
  )
}