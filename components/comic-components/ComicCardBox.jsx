"use client";

import { useSearchParams } from 'next/navigation';

import Link from "next/link";
import Image from 'next/image';

export default function ComicCardBox({name, icon, author}) {  

    return (
        <>
            <li className="flex p-4 max-w-screen-md mx-auto my-4">
                <Link href={`/comic-details?name=${name}&author=${author}`}>
                <div className="flex flex-col space-x-12 rounded bg-gray-400 mx-4 font-bold text-gray-900 p-4 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
                    <Image alt={icon} className="bg-gray-200 rounded-md p-4" width={250} height={250}/>
                    
                    <div className='text-lg'>
                        <p>{name}</p>
                        <p>{author}</p>

                    </div>
                </div>
                </Link>   
            </li>
        </>
    )
}