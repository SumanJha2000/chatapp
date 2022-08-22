import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import SignIn from './SignIn';
import Chat from './Chat';
import data from './data.js';

let result = [];

result = JSON.parse(localStorage.getItem('result')) ? [...JSON.parse(localStorage.getItem('result'))] : result;
if (result.length < 3) {
    result = [...result, ...data];
}


function App() {
    const [name, setName] = useState('');
    const [login, setLogin] = useState(false);
    const [friend, setFriend] = useState({});
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            let count = 0;
            if (user) {
                result && result.map(v => {
                    if (v.uid === user.uid) {
                        console.log("called")
                        count++;
                    }
                })
                if (count === 0) {
                    result.push(user);
                    count = 0;
                }
                count = 0;
                setFriend(user);
                setName(user._delegate.displayName);
                return setLogin(true);
            }
            setLogin(false);
        })
    }, [])


    localStorage.setItem('result', JSON.stringify(result));

    return (
        <div className='max-vw-100 max-vh-100'>
            <Router>
                <Routes>
                    <Route path='' element={!login ? <SignIn /> : <Chat name={name} friend={friend} setFriend={setFriend} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;