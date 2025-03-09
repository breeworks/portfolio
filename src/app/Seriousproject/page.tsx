import React from "react";
import Footer from "@/components/footer";
import Link from "next/link";
export default function Page() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <span className="flex items-center justify-center text-xl font-semibold p-6">
        serious projects
      </span>
      <div className="mb-5">
        <Link href="https://github.com/breeworks/chrome-ext">
          <span className="font-semibold">
            This chrome extension helps to watch the filtered content of the
            user&apos;s choice{" "}
          </span>
        </Link>
        <p className="p-2 text-gray-600">
          A browser extension enabling users to filter and personalize their
          content consumption effortlessly. Built with a robust frontend and
          backend integration for dynamic customization capabilities.
        </p>
      </div>
      <div className="mb-5">
        <Link href="https://github.com/breeworks/muse">
          <span className="font-semibold">
            This help in transforming the old interior to new
          </span>
        </Link>
        <p className="p-2 text-gray-600">
          A transformative platform leveraging AI to revamp interiors, enabling
          users to visualize modernized designs from existing spaces, ensuring a
          cutting-edge interactive experience.
        </p>
      </div>
      <div className="mb-5">
        <Link href="https://github.com/breeworks/coupons">
          <span className="font-semibold">
            Website where user can share the rewards
          </span>
        </Link>
        <p className="p-2 text-gray-600"> A unique platform that allows users to buy, sell, or exchange rewards,
          coupons, and cashback offers they receive from digital wallets.</p>
      </div>
      {/* footer */}
      <Footer />
    </main>
  );
}
