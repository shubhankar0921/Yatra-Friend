import React from 'react'
import "../style/details.css" 
import Typewriter from "typewriter-effect";
import { useState } from 'react';
import { getDocs,addDoc, collection } from 'firebase/firestore'
import { db } from '../config'
import { useNavigate } from 'react-router-dom';


export default function Question2() {
    const [Email, setEmail] = useState()
    let navigate = useNavigate()
    
    let interest =  localStorage.getItem("interest")
    const collection_ref = collection(db,"users")
    const Sumbit =  async() =>{
        if (Email!=="" ) {
            await addDoc(collection_ref, { Email, interest})
            navigate('/matches')
            console.log('done');
            localStorage.setItem("email", Email)
            
        }else{
            alert("kindly write your email")
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
                        .typeString("Your email id ")
                        .start();
                }}
                />
            </p>
            <div className="button_div">
              <button className="next" id="submit" onClick={Sumbit}>NEXT</button>
            </div>
            <input className='answer' id="answer" type="text" onChange={(event)=>{setEmail(event.target.value)}} />
          </div>
        </div>
    </div>
  )
}
