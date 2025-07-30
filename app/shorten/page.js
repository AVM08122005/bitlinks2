"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Shorten = () => {
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
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Genrate your short URLs</h1>
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
          <div className="mt-4 p-2 bg-purple-200 rounded flex justify-center items-center">
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
    </div>
  );
};

export default Shorten;


// export const metadata = {
//   title: "BitLinks - Shorten",
//   description: "This is a BitLinks Shorten page",
// };