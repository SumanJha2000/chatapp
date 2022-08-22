import React from 'react'
import SignOut from './SignOut';
function Profile({ friend, name }) {


    return (
        <div style={{ height: "4rem" }} className="d-flex justify-space-between align-items-center bg-success">
            <h5 className='pr-3 text-white w-75 pl-3'>{name}</h5>
            <SignOut className="mr-auto " />
        </div>
    )
}

export default Profile;