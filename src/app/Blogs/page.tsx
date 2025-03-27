import { FiCoffee } from "react-icons/fi";
import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <span className="flex items-center justify-center text-xl font-semibold p-6">
        devs blogs 
      </span>
      <div>
          <span className="font-semibold"> React.js </span>
          <a href="https://lydian-rhubarb-93e.notion.site/React-s-reconciliation-process-17d780a2188f80529b0dc13041fe0df3" rel='noopener noreferrer' target='_blank' > 
            <p className="p-3 text-gray-600"> explained about the <b>reconciliation</b> in react.js </p>
          </a>
          <a href="https://lydian-rhubarb-93e.notion.site/Diffing-Algorithm-17d780a2188f80aa8de4c100e87cdc49" rel='noopener noreferrer' target='_blank' > 
            <p className="p-3 text-gray-600"> explained about <b>the diffing algorithm</b> in react.js </p>
          </a>
      </div>
      <div>
      <footer className="pt-8 mt-16 border-t text-center flex items-center justify-center">
      <nav className="flex items-center space-x-3">
        <a href="mailto:dishachoudhary1102@gmail.com" rel="noopener noreferrer" target="_blank" className="hover:underline">gmail</a>
        <span>|</span>
        <a href="https://github.com/breeworks" rel="noopener noreferrer" target="_blank" className="hover:underline">github</a>
        <span>|</span>
        <a href="https://docs.google.com/document/d/1-kSOAdsLzVboK2Sg5K1iWwVZDOS2cZPDiX-4kBLbhMY/edit?usp=sharing" rel="noopener noreferrer" target="_blank" className="hover:underline">resume</a>
        <span>|</span>
        <a href="https://www.buymeacoffee.com/yourusername" rel="noopener noreferrer" target="_blank" className="hover:underline flex items-center space-x-1">
          <span>buymeacoffee</span>
          <FiCoffee className="size-5 mb-1" />
        </a>
      </nav>
    </footer>
    </div>
    </main>  
    );
}
