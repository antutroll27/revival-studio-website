import React, { useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';


function Hero() {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const[isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextvideoRef = useRef(null);


  const handleVideoLoad = () => {
    setLoadedVideos(prev => prev + 1);
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  // Handler for video click events:
  // - Marks video as clicked
  // - Updates to next video in sequence
  const handleVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  }
    
  // Helper function to generate video file paths
  // Returns path like 'videos/hero-{index}.mp4'
  const getVideos = (index) => `videos/hero-${index}.mp4`;


  return (
    <div className='relative h-dvh w-full overflow-hidden'>
       <div id='video' className='relative z-10 h-dvh w-full overflow-hidden rounded-lg bg-cyan-600'>
         <div>
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                
                <div onClick={handleVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 '>
                    <video 
                        ref={nextvideoRef}
                        src= {getVideos(upcomingVideoIndex)}
                        loop
                        muted
                        id='current-video'
                        onLoadedData={handleVideoLoad}
                        className='size-64 origin-center scale-150 object-cover object-center'
                    />
                </div>
            </div>
            <video
                ref={nextvideoRef}
                src={getVideos(currentIndex)}
                loop
                muted
                id='next-video'
                className= 'absolute-center invisible absolute z-20 size-64 object-cover object-center'
                onLoadedData={handleVideoLoad}
            />
            <video src= {getVideos(currentIndex===totalVideos-1?1:currentIndex)}
                autoPlay
                loop
                muted 
                className='absolute left-0 top-0 size-full object-cover object-center'
                onLoadedData={handleVideoLoad}
            />
         </div>
       <h2 className='special-font hero-heading absolute bottom-5 right-5 whitespace-nowrap text-white'>Revival Studio</h2>

       <div className='absolute left-0 top-0 z-40 size-full'>
        <div className='mt-24 px-5 sm:px-10'>
          <h1 className='special-font hero-heading whitespace-nowrap'>Revival Studio</h1>
          <p className='mb-5 max-w-64 font-robert-regular text-white'>
            Enter the Metagame Layer & <br />Unleash the True Potential
          </p>
          <Button id='watch-trailer' title='Watch Trailer' leftIcon={<TiLocationArrow />} containerClassName='bg-yellow-300 flex-center gap-1'/>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Hero