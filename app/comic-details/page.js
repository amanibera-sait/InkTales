"use client";
import ChapterList from '@/components/comic-components/ChapterList';
import ComicFilter from '@/components/comic-components/ComicFilter';
import Footer from '@/components/layout-components/Footer';
import Header from '@/components/layout-components/Header';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


function ComicDetails() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const author = searchParams.get('author');

    const data = ComicFilter(name, author);
    const comicInfo = data[0];

    console.log(comicInfo)
    
    return (
      <>
        <div className="bg-white w-full min-h-screen justify-center items-center">
          <Header/>
          <div className='flex justify-center space-x-20 my-24 drop-shadow-md'>
            <div className='w-1/3 flex justify-center items-center flex-col flex-wrap bg-gray-400 rounded-md p-12'>
              <Image alt={comicInfo.icon} className='bg-slate-100 w-3/4 m-8' width={240} height={240}/>
              <div className='flex flex-col justify-center items-center space-y-4 '>
                <p className='bg-gray-200 rounded-md p-4 text-5xl'>{comicInfo.name}</p>
                <p className='bg-gray-200 rounded-md p-4 text-4xl'>By: {comicInfo.author}</p>
                <div className='space-x-20'>
                  <p className='bg-gray-200 rounded-md p-4 text-2xl'>{comicInfo.genre}</p>
                </div>
                <p className='bg-gray-200 rounded-md p-4 text-wrap'>{comicInfo.synopsis}</p>
              </div>
            </div>
  
            <div className='bg-gray-400 rounded-md p-12 drop-shadow-md'>
              <p className='bg-slate-200 rounded-md p-4 text-2xl text-center font-extrabold'>Chapters</p>
              <ChapterList chapters={comicInfo.chapters}/>
            </div>
          </div>
          <Footer/>
        </div>
      </>
    )
}

export default ComicDetails