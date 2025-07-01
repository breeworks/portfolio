import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="pt-8 mt-16 border-t text-center">
            <nav className="space-x-3">
              <a href="https://github.com/dishafaujdar" rel='noopener noreferrer' target='_blank' className="hover:underline">github</a>
              <span>|</span>
              <a href="https://docs.google.com/document/d/1-kSOAdsLzVboK2Sg5K1iWwVZDOS2cZPDiX-4kBLbhMY/edit?usp=sharing" rel='noopener noreferrer' target='_blank' className="hover:underline">resume</a>
            </nav>
          </footer>
    </div>
  )
}
