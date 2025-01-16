import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="pt-8 mt-16 border-t text-center">
            <nav className="space-x-3">
              <a href="mailto:dishachoudhary1102@gmail.com" rel='noopener noreferrer' target='_blank'  className="hover:underline">gamil</a>
            <span>|</span>
              <a href="https://github.com/dishafaujdar" rel='noopener noreferrer' target='_blank' className="hover:underline">github</a>
              <span>|</span>
              <a href="https://docs.google.com/document/d/1pPnCgx1BH2N7r6nvRZI8Rr2Dkbsjk9E0wNn5paHdS6E/edit?usp=sharing" rel='noopener noreferrer' target='_blank' className="hover:underline">resume</a>
            </nav>
          </footer>
    </div>
  )
}
