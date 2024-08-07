//TODO
// - Add Icon images to folder.
"use client"

import Link from "next/link";

const Chapter = ({number, name}) => {  
    return (
        <>
            <li className="flex justify-center items-start p-4 space-x-12 w-full max-w-screen-md mx-auto my-4 bg-slate-300 rounded-lg">
                <div className="flex flex-row justify-center space-x-10 items-center text-center">
                    <p className="font-black text-md my-6">Chapter {number} - {name}</p>
                    <Link href={`/chapter-list/chapter-viewer?name=${name}&chapter=${number}`}>
                        <button className="rounded bg-gray-400 mx-2 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Click to Read</button>
                    </Link>   
                </div>
            </li>
        </>
    )
}
export default Chapter;                    