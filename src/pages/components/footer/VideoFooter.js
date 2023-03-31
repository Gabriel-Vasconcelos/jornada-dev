import React from "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "./videofooter.css";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3> @gabriel_vsv </h3>
        <p>Legenda do vídeo</p>
        <div className="vidoFooter__music">
            <MusicNoteIcon />
            <div className="videoMusicFooter__text">
                <p>Título da Música</p>
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
