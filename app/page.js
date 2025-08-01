"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generatedUrl, setGeneratedUrl] = useState("");
  
    const handleChange = (first) => {};
  
    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        url: url,
        shorturl: shorturl,
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch("/api/genrate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
          seturl("");
          setshorturl("");
          console.log(result);
          alert(result.message);
        })
        .catch((error) => console.error(error));
    };
  

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-100 px-4">
      {/* Hero Section */}
      <section className="max-w-2xl text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          <strong>The best URL shortener in the market.</strong>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The most straightforward URL shortener on the web. Unlike others, we
          prioritize your privacy by not tracking your activities or requiring
          login details.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/shorten">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com/AVM08122005/bitlinks2" target="_blank">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition">
              GitHub
            </button>
          </Link>
        </div>
      </section>

      {/* URL Shortener Section */}
      <section className="w-full max-w-md bg-purple-200 p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Generate Your Short URLs
        </h2>
        <div className="flex flex-col gap-2">
        <input
          className="p-3 focus:outline-purple-600 bg-white rounded-xl px-4 "
          type="text"
          value={url}
          placeholder="Enter your URL here"
          onChange={(e) => seturl(e.target.value)}
        />
        <input
          className="p-3 focus:outline-purple-600 bg-white rounded-xl px-4 "
          type="text"
          value={shorturl}
          placeholder="Enter your prefered short URL text"
          onChange={(e) => setshorturl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-purple-700 text-white px-4 py-1 my-3 hover:bg-purple-500 cursor-pointer rounded-lg"
        >
          Generate
        </button>

        {generatedUrl && (
          <div className="mt-4 p-2 bg-purple-100 rounded-xl flex justify-center items-center">
            Shortened URL:{" "}
            <Link
              target="_blank"
              href={generatedUrl}
              className="text-purple-700 underline"
            >
              {generatedUrl}
            </Link>
          </div>
        )}
      </div>
      </section>
    </main>
  );
}

// export const metadata = {
//   title: "BitLinks - Home",
//   description:
//     "Instant, simple, secure URL shortening with analytics, custom domains, and API.",
// };
