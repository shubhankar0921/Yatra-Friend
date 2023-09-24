import React from 'react'
import "../style/details.css" 
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom"



export default function UserInfo() {
    const navigate = useNavigate();
    const Details = ()=>{
        navigate("/questions")
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
                        .typeString("Answer the following questions, it will help me in finding a match for you..")
                        .start();
                }}
                />
            </p>
            <div className="button_div">
              <button className="next" id="okay" onClick={Details}>OKAY</button>
            </div>
          </div>
        </div>
    </div>
  )
}
