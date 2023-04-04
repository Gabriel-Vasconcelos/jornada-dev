import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {
  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideo] = useState([]);

  async function getVideos() {
    const videosColletion = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosColletion)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideo(videosList)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className="App" style={{ maxHeight: maxHeight + 'px' }}>
      <div className='app__videos'>

        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}  
              music={item.music}
              url={item.url}
            />
          )
        })}

        {/* <Video 
          likes={300}
          messages={67}
          shares={192}
          name="Gabriel"
          description="Gatinho goleiro do coritinhas"
          music="Música Épica"
          url="https://raw.githubusercontent.com/Gabriel-Vasconcelos/jornada-dev/master/public/assets/videos/video1.mp4"
        />

        <Video 
          likes={300}
          messages={67}
          shares={192}
          name="Gabriel"
          description="Gatinho goleiro do coritinhas"
          music="Música Épica"
          url="https://raw.githubusercontent.com/Gabriel-Vasconcelos/jornada-dev/master/public/assets/videos/video1.mp4"
        />

        <Video 
          likes={300}
          messages={67}
          shares={192}
          name="Gabriel"
          description="Gatinho goleiro do coritinhas"
          music="Música Épica"
          url="https://raw.githubusercontent.com/Gabriel-Vasconcelos/jornada-dev/master/public/assets/videos/video1.mp4"
        /> */}

      </div>
    </div>
  );
}

export default App;
