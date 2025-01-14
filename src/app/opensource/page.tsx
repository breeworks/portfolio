import React from 'react'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <span className="flex items-center justify-center text-xl font-semibold p-6">
        open source contributions
      </span>
      <div className="mb-5">
          <span className="font-semibold">
          fix: css alignment of calendar component on the home page 
          <a href="https://github.com/asyncapi/website/pull/3276" rel='noopener noreferrer' target='_blank' className='ml-1' > #3276 </a>
          </span>
        <p className="p-2 text-gray-600">
        <ul className="list-disc list-inside space-y-1">
          <li> Fixed the alignment of &quot;Join our public meeting&quot; on the home page. </li>
          <li> Change the calendar card to the height, the same as that of the slack card for the desktop view. </li>  
        </ul>
        </p>
      </div>
      {/* footer */}
      <Footer />
    </main>
  )
}
