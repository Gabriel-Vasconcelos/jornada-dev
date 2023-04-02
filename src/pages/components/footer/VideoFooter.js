import React from "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "./videofooter.css";

const VideoFooter = ( {name, description, music} ) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3> @{name} </h3>
        <p> {description} </p>
        <div className="vidoFooter__music">
            <MusicNoteIcon />
            <div className="videoMusicFooter__text">
                <p> {music} </p>
            </div>
        </div>
      </div>

      <img 
        className="videoFooter__record"
        alt="Imagem ícone de um disco de vinil girando"
        src="https://cdn-icons-png.flaticon.com/512/96/96463.png"
      />
    </div>
  );
};

export default VideoFooter;
