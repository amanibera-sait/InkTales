"use client";

import Footer from '@/components/layout-components/Footer';
import Header from '@/components/layout-components/Header'
import HomePage from '@/components/layout-components/HomePage';

export default function Home() {

  return (
    <>
        <div className="bg-white w-full min-h-screen justify-center items-center">
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
    </>
  );
}
