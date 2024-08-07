"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="rounded text-center font-bold mt-20">
            <div className="bg-gray-800 p-10 flex justify-center col-auto space-x-12">
                <div style={{width: '10%'}} className="flex justify-start hover:opacity-75 active:opacity-50">
                    <Link href="/">
                        <Image src={"/icons/InkTales Horizontal Icon.png"} alt="Ink Tales Logo" width={1015} height={161}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}