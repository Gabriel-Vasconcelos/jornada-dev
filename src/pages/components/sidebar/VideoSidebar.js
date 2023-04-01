import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import './videosidebar.css'

const VideoSidebar = () => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }
  
  return (
    <div className='videoSidebar'>
        <div 
          className='videoSidebar__options'
          onClick={handleLike}
        >
          <p>
            {liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/> }
          </p>
           
          <p> {liked ? 100 + 1 : 100}</p>
        </div>
        <div className='videoSidebar__options'>
            <p> <ChatIcon fontSize="large"/></p>
            <p> 53</p>
        </div>
        <div className='videoSidebar__options'>
            <p> <ShareIcon fontSize="large"/></p>
            <p> 5</p>
        </div>
    </div>
  )
}

export default VideoSidebar