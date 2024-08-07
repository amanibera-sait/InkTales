import Header from '@/components/layout-components/Header';
import ComicCard from '@/components/comic-components/ComicCard';
import Image from 'next/image';
import Footer from '@/components/layout-components/Footer';

export default function Page() {

  return (
    <>
      <div className="bg-white w-full min-h-screen justify-center items-center">
        <Header/>
        <div className='flex justify-center space-x-20 my-24'>
          <div className='bg-gray-400 rounded-md flex flex-col p-10'>
            <Image src={"/icons/profileIcon.png"} className='m-8' width={500} height={500}/>
            <div className='flex flex-col justify-center items-center space-y-10 '>
              <p className='bg-gray-200 rounded-md p-3'>Username</p>
              <p className='bg-gray-200 rounded-md p-3'>Email</p>
              <div className='space-x-20'>
                <button className="rounded bg-gray-200 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Change email address</button>
                <button className="rounded bg-gray-200 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Change password</button>
              </div>
            </div>
          </div>

          <div className='bg-gray-400 rounded-md p-10'>
            <ComicCard/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
