import React from "react"
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
        <div className="videoFooter-text">
            <h3>@arthurolando</h3>
            <p>Descrição do Video</p>
            <div className="videoFooter-music">
                <MusicNoteIcon />
                <div className="videoFooter-music-name">
                    <p>Título da musica</p>
                </div>
            </div>
        </div>
        <img
            className="videoFooter-record"
            alt="Imagem de um vinil girando"
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        />
    </div>
  )
}

export default VideoFooter