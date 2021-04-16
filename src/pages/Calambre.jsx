import React from 'react';
import ReactPlayer from 'react-player';
import "./Tratamientos.css";


export default function Calambre() {
    return (
        <div className="calambre">
            <ReactPlayer url='/images/IMG_3014 2.mp4'  width='100%' height='40%' playing />
            <ReactPlayer url='/images/IMG_3015.mp4' width='100%' height='40%' playing />
        </div>
    )
}
