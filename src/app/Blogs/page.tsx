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
          <a href="https://www.notion.so/React-s-reconciliation-process-17d780a2188f80529b0dc13041fe0df3" rel='noopener noreferrer' target='_blank' className='ml-1' > React&apos;s reconciliation process
          </a>
          </span>
            <p className="p-3 text-gray-600"> explained about the reconciliation in react.js </p>
      </div>
      {/* footer */}
      <Footer />
    </main>  
    );
}
