import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col justify-center items-center gap-5 px-10">
          <p className="text-2xl font-bold">
            The best URL shortner in the world.
          </p>
          <p className="text-center px-21">
            We are the most straightforward URL shortener in the world. Most of
            them will either track your clicks or require you to create an
            account. We understand your needs, and hence we have created a
            solution that is both simple and effective.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/shorten">
              <button className="bg-purple-700 text-white px-4 py-0.5  cursor-pointer rounded-lg">
                Try Now
              </button>
            </Link>
            <Link target="_blank" href="/github">
              <button className="bg-purple-700 text-white px-4 py-0.5  cursor-pointer rounded-lg">
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src="/assets/team-meet.jpg"
            alt="People in a meeting"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}


export const metadata = {
  title: "BitLinks - Home",
  description: "This is a BitLinks Home page",
};