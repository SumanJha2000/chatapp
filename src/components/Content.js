import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../fire.js';

function Content({ setFriend, friend }) {
    const [messages, setMessages] = useState([]);



    useEffect(() => {
        async function getData() {
            db.collection('message').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => {
                    return doc.data()
                }))
            })

        }
        getData();
    }, [messages])




    return (
        <div style={{
            height: "620px", overflowY: "auto", marginBottom: "1rem", display: "flex", flexDirection: "column-reverse", paddingBottom: "2rem"
        }} className='bg'  >
            <div>
                {
                    messages.map(({ id, text, uid, photoURL }) => (
                        <div className={`   ${uid && uid == auth.currentUser.uid ? "right" : "left"}`}>
                            <div className={`pr-5 text-box  ${uid && uid == auth.currentUser.uid ? "text" : "white"}`}>
                                <img className='text-img mt-2 ' src={photoURL && photoURL}></img>
                                < span className="pl-2   text-center " key={id} > {text}</span>
                            </div >
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Content;