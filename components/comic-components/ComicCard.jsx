"use client";

import { useSearchParams } from 'next/navigation';

import Link from "next/link";

export default function ComicCard({name, icon, author}) {  

    return (
        <>
            <li className="flex justify-center items-start p-2 space-x-10 w-full max-w-screen-md mx-auto my-5 bg-slate-300 rounded-lg">
                <Link href={`/comic-details?name=${name}&author=${author}`}>
                <div className="flex flex-row justify-center space-x-10 items-center text-center rounded bg-gray-400 mx-2 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
                    <p className="bg-gray-200 rounded-md p-3">{icon}</p>
                    <p>{name}</p>
                    <p>{author}</p>
                </div>
                </Link>   
            </li>
        </>
    )
}