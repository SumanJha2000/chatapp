import React, { useState } from 'react'

function Sidebar() {
    let people = [];

    //check if localstorage already has some data or not
    people = JSON.parse(localStorage.getItem('result')) ? [...JSON.parse(localStorage.getItem('result'))] : people;
    const [search, setSearch] = useState('');


    let filteredPeople = [];
    //filter on search  sidebar
    filteredPeople = people.filter(p => {
        return p.displayName.toLowerCase().startsWith(search.toLowerCase());
    })


    return (
        <div className='vh-100 w-25 sidebar '>
            <div style={{ height: "4rem", position: "fixed", top: "0", left: "0", width: "25%" }} className='contact-search mb-5 d-flex justify-content-center align-items-center '>
                <input onChange={(e) => setSearch(e.target.value)} className='w-75 text-dark' type="text" placeholder='Search...'></input>
                <i className='fa fa-search text-left text-dark'></i>
            </div>
            <div style={{ paddingTop: "4rem" }} className=''>
                <ul >

                    {/* show friend according to search result */}
                    {search.length != 0 && filteredPeople.map(p => {
                        return (<div key={p.uid} className="h-5 ml-2 d-flex align-items-center">
                            <img className="side-img" src={p.photoURL}></img>
                            <div className='ml-3 d-flex flex-column '>
                                <p className='pt-2'>{p.displayName}</p>
                                <small className='pb-2'>{p.text && p.text}</small>
                            </div>

                        </div>)
                    })}

                    {/*show all the friend since search input in empty*/}
                    {!search.length && people.map(p => {
                        return (<div key={p.uid} className="h-5 ml-2 d-flex align-items-center">
                            <img className="side-img" src={p.photoURL}></img>
                            <div className='ml-3 d-flex flex-column '>
                                <p className='pt-2'>{p.displayName}</p>
                                <small className='pb-2'>{p.text && p.text}</small>
                            </div>

                        </div>)
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;