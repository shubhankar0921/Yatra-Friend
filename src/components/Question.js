import React from 'react'
import "../style/details.css" 
import Typewriter from "typewriter-effect";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Questions() {
    const [Interest, setInterest] = useState()
    let navigate = useNavigate()
    const Next = ()=>{
        if (Interest == "") {
            alert("Kindly fill the required details")
        }
        if(Interest !== ""){
            localStorage.setItem("interest", Interest)
            navigate("/email")
            console.log(Interest)
        }
    }
  return (
    <div className='details'>
        <div className="character_div">
          <div className="character"></div>
          <div className="character_text">
            <p className="type" id="question">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(" ")
                        .pauseFor(1000)
                        .typeString("About what you want to talk ?")
                        .start();
                }}
                />
            </p>
            <div className="button_div">
              <button className="next" id="next" onClick={Next}>NEXT</button>
            </div>
            <input className='answer' id="answer" type="text" onChange={(event)=>{setInterest(event.target.value)}} />
          </div>
        </div>
    </div>
  )
}
