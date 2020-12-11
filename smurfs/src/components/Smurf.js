import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import ProfilePage from './ProfilePage'

const Smurf = (props) => {
    return (
        <div className='smurf'>
            <h3>Name: {props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <NavLink to={`/${props.smurf.name}`}>Profile Page</NavLink>
        </div>
    )
}

export default Smurf