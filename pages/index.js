import Head from 'next/head'
import { useState } from 'react'
import Countdown from 'react-countdown';


export default function Home() {

  const [playVid, setPlayVid] = useState(false)

  const changeVid = () => {
    setPlayVid(prevPlayVid => !prevPlayVid)
  }


  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2 drop-shadow'>
      <Head>
        <title>Get Back to Work!</title>
      </Head>
      <div className='grid grid-rows-3 mb-8 rounded bg-orange-300 p-2 shadow-orange-400/50 shadow-xl text-xs'>
       <div> AP Chemistry - Week 12</div>
       <div> APUSH - Week 3</div>
        <div>  Honors English - Week 2</div>
      </div>
        <div>
          Time Left:
          <Countdown date={new Date("Feb 20, 2023")} className='px-2'/>
        </div>
      <div className='text-xl'>Be Wise and Don&#39;t Get Distracted™️</div>
      <div>
        <button disabled className='mx-2 my-4 text-sm rounded-md bg-orange-300 shadow-xl shadow-orange-300/50 dark:bg-orange-500 p-2 px-4 dark:shadow-orange-500/50 '>Analytics</button>
        <button className='mx-2 my-4 text-sm rounded-md bg-orange-300 shadow-xl shadow-orange-300/50 dark:bg-orange-500 p-2 px-4 dark:shadow-orange-500/50 ' onClick={changeVid}>Video</button>
      </div>
      {
        playVid 
          ?
          <video width="200" height="700" className='mt-4 rounded-md shadow-xl shadow-slate-700/40 dark:shadow-slate-300/30' loop autoPlay >
          <source src="bewise.mp4" type="video/mp4"/>
          </video>
          :
          null
      }
        
   </div>
  )
}
