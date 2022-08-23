import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { auth } from '../firebase.js'

const signIn = () => {

    //provider for sign in
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)


}
function SignIn() {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <button onClick={signIn} className='btn btn-success btn-md mx-auto btn-lg '>Sign in with google<i class="ml-2 text-danger fa-brands fa-google"></i></button>
        </div>
    )
}

export default SignIn