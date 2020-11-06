import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getData, postData } from '../actions'
import Smurf from './Smurf'

const initialFormData = {
  name: '',
  age: '',
  height: ''
}

const App = (props) => {
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
      props.getData()
    }, [props.smurfData])


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
        <h1>SMURFS! W/Redux</h1>
        <div>
        {props.smurfData.map((smurf, index) => {
          return <Smurf key={index} smurf={smurf}/>
        })}
        </div>
        <form onSubmit={onSubmitHandler}>
          <label>Name:
            <input type='text' name='name' value={formData.name} onChange={onChangeHandler}/>
          </label>
          <label>Age:
          <input type='text' name='age' value={formData.age} onChange={onChangeHandler}/>
          </label>
          <label>Height:
          <input type='text' name='height' value={formData.height} onChange={onChangeHandler}/>
          </label>
          <button>Submit</button>
        </form>
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
