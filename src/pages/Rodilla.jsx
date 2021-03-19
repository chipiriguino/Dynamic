import React from 'react'
import ReactPlayer from 'react-player';

export default function Rodilla() {
    return (
        <div>
            <img className="rodilla-img" src="/images/rodilla.png" alt ="rodila" width='100%' height='40%'></img>
            <div ><ReactPlayer url='/images/rodilla.mp4'  width='100%' height='40%' playing /></div> 
        </div>
    )
}
