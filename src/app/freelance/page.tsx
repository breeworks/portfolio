import React from 'react'
import Footer from '@/components/footer';

export default function Page() {
  return (
        <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
          <span className="flex items-center justify-center text-xl font-semibold p-6">
            freelance work
          </span>
          <div className="mb-5">
              <span className="font-semibold">
            {/* post some freelance work */}
              </span>
            <p className="p-2 text-gray-600">
                👀looking for work
            </p>
          </div>
          {/* footer */}
          <Footer />
        </main>  
    );
}
