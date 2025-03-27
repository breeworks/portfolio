import React from 'react'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <span className="flex items-center justify-center text-xl font-semibold p-6">
        open source contributions
      </span>
      <div className="mb-5">
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-semibold">
          fix: css alignment of calendar component on the home page 
          <a href="https://github.com/asyncapi/website/pull/3276" rel='noopener noreferrer' target='_blank' className='ml-1' > #3276 </a>
          </span>
        </li>
        <li>
          <span className="font-semibold">
          fix: Align index number with text for smaller devices  
          <a href="https://github.com/trpc/trpc/pull/6639" rel='noopener noreferrer' target='_blank' className='ml-1' > #6639 </a>
          </span>
        </li>
        <li>
          <span className="font-semibold">
          fix: created a margin between buttons  
          <a href="https://github.com/yangshun/tech-interview-handbook/pull/693" rel='noopener noreferrer' target='_blank' className='ml-1' > #693 </a>
          </span>
        </li>

      </ul>
      </div>
      {/* footer */}
      <Footer />
    </main>
  )
}
