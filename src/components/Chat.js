import React from 'react'
import Text from './Text'
import Content from './Content'
import SignOut from './SignOut'
import Profile from './Profile'
import Sidebar from './Sidebar'
function Chat({ friend, setFriend, name }) {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className='w-75 '>
                {/* <SignOut /> */}
                <Profile
                    friend={friend}
                    setFriend={setFriend}
                    name={name}

                />
                <Content
                    friend={friend}
                    setFriend={setFriend} />
                <Text />
            </div>
        </div>
    )
}

export default Chat