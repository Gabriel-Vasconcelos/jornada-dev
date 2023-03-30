import React, { useRef, useState } from 'react';
import "./Video.css";

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
            Componente Vídeo

            <video 
                className='video__player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                src = "https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/oM7gIFzgyIkOCMgEpAEfl4KhUzzMAXAOMotFSa/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1314&bt=657&cs=0&ds=3&ft=_RwJrBiTq8Zmo3eVCc_vjz_x8AhLrus&mime_type=video_mp4&qs=0&rc=NWhnaWVmZDpoZzdlM2dnNUBpanVmOTc6ZjlkajMzNzczM0A2MmItMTNfX18xYF4xYDNeYSNtcWotcjRfXmRgLS1kMTZzcw%3D%3D&btag=80000&expire=1680220396&l=2023033017530676C26F7B312656454838&ply_type=2&policy=2&signature=b5d32bff5572f2d6174003e3d9faf22c&tk=tt_chain_token"
            >
                
            </video>
        </div>
    )
}

export default Video;