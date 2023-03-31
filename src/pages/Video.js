import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import "./video.css";

const Video = () => {
    
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    const handdleStart = () => {
        if(play){
            videoRef.current.pause()
            setPlay(false)
        }else{
            videoRef.current.play()
            setPlay(true)
        }
    }


    return(
        <div className='video'>
            <video 
                className='video__player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                src = "https://raw.githubusercontent.com/Gabriel-Vasconcelos/jornada-dev/master/public/assets/videos/video1.mp4"
            >  
            </video>

            <VideoFooter/>
        </div>
    )
}

export default Video;