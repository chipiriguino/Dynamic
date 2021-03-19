import React from 'react';
import ReactPlayer from 'react-player';


export default function Calambre() {
    return (
        <div >
            <div className="rampa-align"><ReactPlayer url='/images/IMG_3014 2.mp4'  width='100%' height='40%' playing /></div> 
           <div className="rampa-align"> <ReactPlayer url='/images/IMG_3015.mp4' width='100%' height='40%' playing /></div> 
        </div>
    )
}
