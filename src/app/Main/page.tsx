import React from 'react'
import Link from 'next/link'

export default function Main() {
    return (
        <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
          {/* Introduction */}
          <section className="mb-12">
            {/* pleaseee get a cool name */}
            <h1 className="text-2xl mb-4">hi, i am disha🌻</h1>
            <p className="mb-2">i am a third-year student studying Data Science,</p>
            <p>primarily work in software engineering.</p>
          </section>
    
          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-xl mb-4">experience</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>verry soon</li>
            </ul>

          </section>
    
          {/* Projects */}
          <section className="mb-12">
            <h2 className="text-xl mb-4">projects</h2>
            <ul className="list-disc list-inside space-y-2 ">
              <Link href="Seriousproject"> <li>serious projects</li> </Link>
              <Link href="funproject"> <li>fun projects</li> </Link>
              <Link href="/opensource"><li>open source contribution</li></Link>
            </ul>
          </section>
    
          {/* Blogs */}
          <section className="mb-12">
            <h2 className="text-xl mb-4">blogs</h2>
            <ul className="list-disc list-inside space-y-2">
              <Link href="/Blogs"><li> devs blogs </li></Link>
            </ul>
          </section>
    
          {/* Footer */}
          <footer className="pt-8 mt-16 border-t text-center">
          <nav className="space-x-3">
              <a href="https://www.x.com/maidishahoon" rel='noopener noreferrer' target='_blank'  className="hover:underline">twitter</a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/disha-faujdar-df1102/" rel='noopener noreferrer' target='_blank'  className="hover:underline">linkedin</a>
              <span>|</span>
              <a href="/contactMe" rel='noopener noreferrer' target='_blank' className="hover:underline">contactMe</a>
            </nav>
          </footer>
        </main>
      )
    }
