"use client";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Header from '../layout-components/Header'
import ComicFilter from './ComicFilter'
import ChapterList from './ChapterList';

function ComicDetails() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const author = searchParams.get('author');

    const comicInfo = ComicFilter(name, author)
    
    return (
      <>
        <div className="bg-white w-full min-h-screen justify-center items-center">
          <Header/>
          <div className='flex justify-center space-x-20 my-24'>
            <div className='bg-gray-400 rounded-md flex flex-col p-10'>
              <Image alt={comicInfo.icon} width={500} height={500}/>
              <div className='flex flex-col justify-center items-center space-y-12 '>
                <p className='bg-gray-200 rounded-md p-4'>{comicInfo.name}</p>
                <p className='bg-gray-200 rounded-md p-4'>{comicInfo.author}</p>
                <div className='space-x-20'>
                  <p className='bg-gray-200 rounded-md p-4'>{comicInfo.author}</p>
                </div>
                <p className='bg-gray-200 rounded-md p-4'>{comicInfo.synopsis}</p>
              </div>
            </div>
  
            <div className='bg-gray-400 rounded-md p-12'>
              <ChapterList/>
            </div>
          </div>
        </div>
      </>
    )
}

export default ComicDetails