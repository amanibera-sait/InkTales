import Image from 'next/image'
import Link from 'next/link'
import BannerCarousel from './BannerCarousel'
import ComicList from '../comic-components/ComicList'

function HomePage() {
  return (
    <div className='my-4'>
        <BannerCarousel/>
        <div className='flex justify-center items-center text-lg'>
            <div className="flex flex-col justify-center text-center w-3/4 rounded bg-gray-200 bg-auto m-4 p-6 drop-shadow-md">
                <p className='m-4 text-4xl font-extrabold'>Comics</p>
                <ComicList/>
            </div>

        </div>
    </div>
  )
}

export default HomePage