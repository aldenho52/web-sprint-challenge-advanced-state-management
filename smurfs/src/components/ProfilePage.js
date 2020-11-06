import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfilePage = (props) => {
    return (
        <div>
        <div>
        <NavLink to='/'>Home</NavLink>
        </div>
            <h2>{props.smurf.name}</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default ProfilePage

