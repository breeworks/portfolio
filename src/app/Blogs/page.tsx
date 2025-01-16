import Footer from '@/components/footer'
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
      <Footer />
    </main>  
    );
}
