import React from 'react'
import "../style/details.css" 
import { getDocs,addDoc, collection } from 'firebase/firestore'
import { db } from '../config'
import Typewriter from "typewriter-effect";
import { useState } from 'react';
import { useEffect } from 'react';


export default function Matches() {
    const [list, setlist] = useState([])

    const collection_ref = collection(db,"users")
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    let email = localStorage.getItem("email")
    let interest = localStorage.getItem("interest")
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
                        .typeString("Matches for you are.....")
                        .start();
                }}
                />
            </p>
            <div className="button_div">
            {list.map((post) =>{
                    if (post.interest == interest & post.Email == email) {
                    return <button  className="next" id="contact"  onClick={()=>{window.location.href = `mailto:${post.Email}`;}}>CONTACT</button>

                    }
                    
                })}
            </div>
          </div>
        </div>
    </div>
  )
}
