import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
function SignOut() {
    //sign out function using firebase auth;
    const signOut = () => {
        firebase.auth().signOut();
    }
    return (
        <div className='d-flex justify-content-end w-25 mr-2'>
            <button onClick={signOut} className="btn btn-dark btn-md btn-lg my-2 "><i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
    )
}

export default SignOut