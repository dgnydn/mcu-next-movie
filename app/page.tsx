import Image from "next/image";
import Link from "next/link";

type MCUData = {
  days_until: number;
  overview: string;
  poster_url: string;
  release_date: string;
  title: string;
  type: string;
  following_production: {
    days_until: number;
    overview: string;
    poster_url: string;
    release_date: string;
    title: string;
    type: string;
  }
}

/**
 * Returns the next MCU movie.
 *
 * @async
 * @returns {Promise<MCUData>}
 */
async function getMCUData(): Promise<MCUData> {
  return await (await fetch("https://www.whenisthenextmcufilm.com/api")).json();
}

export default async function Page() {
  const data = await getMCUData();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-4 justify-center items-center bg-gray-900/70 p-10 shadow-xl shadow-black">
        <Image src={data.poster_url} alt="" fill className="w-full h-full blur-md -z-10" />
        <div className="md:w-full w-32">
          <Link href={data.poster_url}>
            <Image src={data.poster_url} width={500} height={750} alt={data.title}></Image>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-black text-4xl text-white drop-shadow-lg mb-4">{data.title}</h1>
          <p className="text-white">{data.overview}</p>
          <p className="text-white">Release Date: <span className="font-bold">{data.release_date}</span></p>
          <p className="text-white">Days Until: <span className="font-bold">{data.days_until}</span></p>
          <div className="text-indigo-900 bg-white font-black p-1">Next: {data.following_production.title}</div>
        </div>
      </div>
    </div>
  )
}
