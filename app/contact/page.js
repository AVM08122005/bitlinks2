'use client' // Add this if using interactivity (like the copy function)
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'achintya8122005@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[84vh] flex flex-col items-center justify-top py-12 bg-purple-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Me</h1>
      
      <main className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="space-y-4">
          <p className="text-gray-600">Feel free to reach out via email:</p>
          
          <div 
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={copyToClipboard}
          >
            <span className="text-purple-600 font-medium">{email}</span>
            <button className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Click the email address to copy it to your clipboard
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500">I'll try to respond within 24 hours</p>
        </div>
      </main>
    </div>
  );
}



