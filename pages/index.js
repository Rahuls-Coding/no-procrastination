import Head from 'next/head'
import { useState } from 'react'
import Countdown from 'react-countdown';


export default function Home() {

  const [playVid, setPlayVid] = useState(false)

  const changeVid = () => {
    setPlayVid(prevPlayVid => !prevPlayVid)
  }


  return (
    <div className='flex flex-row gap-10 flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative drop-shadow'>
      <Head>
        <title>Get Back to Work!</title>
      </Head>
      <div>
        <div>
          Time Left:
          <Countdown date={new Date("Jun 18, 2024")} className='px-2'/>
        </div>
      <div className='text-xl pt-3'>Be Wise and Don&#39;t Get Distracted™️</div>
      <div>
        <button disabled className=' my-4 text-sm rounded-md bg-orange-300 shadow-lg shadow-orange-300/50 dark:bg-orange-500 p-2 px-4 dark:shadow-orange-500/50 '>Analytics</button>
        <button className='mx-2 my-4 text-sm rounded-md bg-orange-300 shadow-lg shadow-orange-300/50 dark:bg-orange-500 p-2 px-4 dark:shadow-orange-500/50 ' onClick={changeVid}>Video</button>
      </div>
      {
        playVid 
          ?
          <video width="200" height="700" className='mt-4 rounded-md shadow-xl shadow-slate-700/40 dark:shadow-slate-300/30' loop autoPlay >
          <source src="bewise.mp4" type="video/mp4"/>
          </video>
          :
          <span className='flex items-center pt-2 pl-4 text-sm'>
            <div className='text-md pr-2 animate-bounce'>
              Play video!
            </div>
            <img src='arrow.png' className='w-8 h-6 animate-bounce' alt='arrow' />
          </span>
      }
      </div>
        <img src='tree.jpg' className='rounded-md shadow-2xl w-1/5 h-1/4' alt='tree' />
   </div>
  )
}
