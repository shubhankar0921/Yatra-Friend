import React from 'react'
import "../style/home.css"
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom"


export default function Home() {
  const navigate = useNavigate();

  const Yes = ()=>{
    document.getElementById("question").innerHTML = "Follow Me"
    document.getElementById("yes").style.display = "none"
    document.getElementById("no").style.display = "none"
    document.getElementById("okay").style.display = "flex"
  }
  const Details = ()=>{
    navigate("/details")
  }
  return (
    <div className='home'>
        <p className="title">Yatra Friend</p>
        <div className="character_div">
          <div className="character"></div>
          <div className="character_text">
            <p className="question" id="question">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(" ")
                        .pauseFor(1000)
                        .typeString("Are You Alone In A Journey ?")
                        .start();
                }}
                />
            </p>
            <div className="button_div">
              <button className="yes" id="yes" onClick={Yes}>YES</button>
              <button className="no" id="no">NO</button>
              <button className="okay" id="okay" onClick={Details}>OKAY</button>
            </div>
          </div>
        </div>
        
    </div>
  )
}
