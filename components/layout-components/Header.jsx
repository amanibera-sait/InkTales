"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <div className="rounded text-center font-bold mb-20">
            <div className="bg-gray-800 p-10 flex justify-center col-auto space-x-12">
                <div style={{width: '10%'}} className="flex justify-start hover:opacity-75 active:opacity-50">
                    <Link href="/">
                        <Image src={"/icons/InkTales Horizontal Icon.png"} alt="Ink Tales Logo" width={1015} height={161}/>
                    </Link>
                </div>
                <div className="flex justify-center items-center text-lg font bold px-12 space-x-12">
                    <Link href="/" className="rounded bg-gray-400 text-gray-900 p-4 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Comics</Link>
                </div>
                <div className="flex justify-end items-center text-lg font bold px-12 space-x-12">
                    <Link href="/upload-page" className="rounded bg-gray-400 text-gray-900 p-4 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Upload</Link>
                    <Link href="/profile-page"><Image src={"/icons/profileIcon.png"} width={70} height={70}/></Link>
                </div>
            </div>
        </div>
    );
}