import Head from 'next/head'
import Image from 'next/image'
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillYoutube, 
  AiFillGithub
} from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import mohaimin from '../public/dev-ed-wave.png'
import galley from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohaimin Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-4'>
        <section>
          <nav className='flex items-center justify-between max-w-7xl m-auto mb-12'>
            <h1 className='text-gray-700 font-semibold text-xl text-left py-4 cursor-pointer sm:text-3xl'>DevByMohaimin</h1>

            <ul className='flex items-center justify-between '>
              <li className='cursor-pointer text-3xl'><BsFillMoonStarsFill/></li>
              <li><a className='border-none px-8 py-2 m-4 border-black text-black font-semibold text-1xl rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500' href='#'>Resume</a></li>
            </ul>
          </nav>

          <div className='text-center '>
            <h1 className='text-cyan-600 font-semibold text-5xl py-2'>Mohaimin Islam</h1>
            <h2 className='font-semibold text-2xl pb-4'>Front-end Designer and Developer</h2>
            <p className='text-gray-500 font-normal text-xl max-w-lg mx-auto'>I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer. But in future I wanted to become e Full-Stack Developer.</p>
          </div>

          <div className='flex items-center justify-center text-4xl space-x-8 mt-8'>
            <a href="https://github.com/ProgrammerMohaimin"> <AiFillGithub/></a>
            <a href="https://youtube.com/ProgrammerMohaimin"> <AiFillYoutube/></a>
            <a href="https://twitter.com/DevMohaimin"> <AiFillTwitterCircle/></a>
            <a href="https://www.linkedin.com/in/programmermohaimin/"> <AiFillLinkedin/></a>
          </div>

          <div className='overflow-hidden relative bg-gradient-to-t from-white to-teal-500 rounded-full w-80 h-80 mx-auto mt-20 md:w-96 md:h-96 '>
            <Image layout='fill' objectFit='cover' src={mohaimin} alt='Mohaimin'/>
          </div>

          <div  className='max-w-3xl mx-auto px-4 mt-8 '>
            <h1 className='text-gray-600 font-semibold text-4xl text-left py-4 xl:text-center'>Services I Offer</h1>
            <p className='text-gray-500 font-normal text-xl text-left py-4 xl:text-center'>I am a programmer mohaimin and I am learning web development . Still now I am a <span className='text-teal-500 font-semibold'>Front-end Developer</span>, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make <span className='text-teal-500 font-semibold'>your dream</span> on your project.</p>

            <p className='text-gray-500 font-normal text-xl text-left py-4 xl:text-center' >I will help you to make your dream on your project. I wanted to become e <span className='text-teal-500 font-semibold'> Full-Stack Developer</span>.</p>
          </div>

          <div className='max-w-2xl mx-auto mt-12'>
            <div className='px-4 shadow-xl m-4 rounded-lg text-center p-8'>
              <Image height={130} width={130} src={galley} alt='Gallery' />
              <h1 className='font-semibold text-2xl text-gray-600 py-4'>Beautiful Design</h1>
              <p className='text-gray-500 font-normal text-lg max-w-md mx-auto'>I will help you to make your dream on your project. I wanted to become e Full-Stack Developer.</p>
              <h2 className='text-teal-500 font-normal text-xl py-2'>Design Tool I Use</h2>
              <p className='text-lg text-gray-700'>PhotoShop</p>
              <p className='text-lg text-gray-700'>Illustrator</p>
              <p className='text-lg text-gray-700'>Figma</p>
            </div>
    {/* another card */}
            <div className='px-4 shadow-xl m-4 rounded-lg text-center p-8 mt-12'>
              <Image height={130} width={130} src={code} alt='Gallery' />
              <h1 className='font-semibold text-2xl text-gray-600 py-4'>Next Level Code Skill</h1>
              <p className='text-gray-500 font-normal text-lg max-w-md mx-auto'>I will help you to make your dream on your project. I wanted to become e Full-Stack Developer.</p>
              <h2 className='text-teal-500 font-normal text-xl py-2'>Design Tool I Use</h2>
              <p className='text-lg text-gray-700'>Vs Code editor</p>
              <p className='text-lg text-gray-700'>Tailwind CSS</p>
              <p className='text-lg text-gray-700'>Next Js </p>
            </div>
    {/* another card */}
            <div className='px-4 shadow-xl m-4 rounded-lg text-center p-8 mt-12'>
              <Image height={130} width={130} src={consulting} alt='Gallery' />
              <h1 className='font-semibold text-2xl text-gray-600 py-4'>Consulting Idea</h1>
              <p className='text-gray-500 font-normal text-lg max-w-md mx-auto'>I will help you to make your dream on your project. I wanted to become e Full-Stack Developer.</p>
              <h2 className='text-teal-500 font-normal text-xl py-2'>Design Tool I Use</h2>
              <p className='text-lg text-gray-700'>PhotoShop</p>
              <p className='text-lg text-gray-700'>Illustrator</p>
              <p className='text-lg text-gray-700'>Figma</p>
            </div>
          </div>
        </section>
        <section className='max-w-3xl mx-auto mt-8'>
          <h1 className='text-gray-700 font-semibold text-3xl text-left py-4'>Portfolio</h1>
        </section>
      </main>

      
    </div>
  )
}
