import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 codebyarthur. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Tech stack used:</span> built with React
        & Next.js (App Router & Server Actions), TypeScript, Framer Motion,
        React Email, Resend, React Hot Toast, Vercel.
      </p>
    </footer>
  );
}
