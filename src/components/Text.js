import React, { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { db, auth } from '../fire';


function Text() {
    let sms = [];
    sms = JSON.parse(localStorage.getItem('result')) ? [...JSON.parse(localStorage.getItem('result'))] : sms;

    const [msg, setMsg] = useState('');
    async function sendMessage(e) {
        e.preventDefault();
        if (msg.length == 0) return;
        const { uid, photoURL } = auth.currentUser;
        await db.collection('message').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })

        sms.map(s => {
            if (s.uid === uid) {
                s.text = msg;
                return s;
            }
            return s;
        })






        localStorage.setItem('result', JSON.stringify(sms));
        setMsg('');
    }
    return (
        <form style={{ width: "97%" }} onSubmit={sendMessage} className='ml-2 input-div d-flex'>
            <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Enter text here...'></input>
            <button style={{ width: "4rem" }} type="submit" className='border-0 bg-success'><i className="fa-solid fa-share text-white"></i></button>
        </form>
    )
}

export default Text