import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getData, postData } from '../actions'
import Smurf from './Smurf'
import { Route } from 'react-router-dom'

// initial form values
const initialFormData = {
  name: '',
  age: '',
  height: ''
}

const App = (props) => {
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
      props.getData()
    }, [])

    const updateForm = (inputName, inputValue) => {
      setFormData({
        ...formData,
        [inputName]: inputValue
      })
    }

    const onChangeHandler = (e) => {
      const {name, value } = e.target
      updateForm(name, value)
    }

    const onSubmitHandler = (e) => {
      e.preventDefault()

      const newSmurf = {
        name: formData.name.trim(),
        age: formData.age.trim(),
        height: formData.height.trim(),
      }

      if (!newSmurf.name || !newSmurf.age || !newSmurf.height) {
        return;
      }

      console.log('working')
      props.postData(newSmurf)
      setFormData(initialFormData)
    }
  
    return (
      <div className="App">
        <Route exact path = '/'>
          <h1>SMURFS! W/Redux</h1>
          <div className='smurf-container'>
          {props.smurfData.map((smurf, index) => {
            return <Smurf key={index} smurf={smurf}/>
          })}
          </div>
          <h2>Add Smurf</h2>
          <form onSubmit={onSubmitHandler}>
            <label className='label-text'>Name:
              <input className='input-box' type='text' name='name' value={formData.name} onChange={onChangeHandler}/>
            </label>
            <label className='label-text'>Age:
              <input className='input-box' type='text' name='age' value={formData.age} onChange={onChangeHandler}/>
            </label>
            <label className='label-text'>Height:
              <input className='input-box' type='text' name='height' value={formData.height} onChange={onChangeHandler}/>
            </label>
            <button>Submit</button>
          </form>
        </Route>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfData: state.smurfData
  }
}

export default connect(mapStateToProps, {getData, postData})(App);
