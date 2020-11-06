import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getData } from '../actions'
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
    }, [])

    onChangeHandler = (e) => {
      setFormData
    }
  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>
        {props.smurfData.map(smurf => {
          return <Smurf smurf={smurf}/>
        })}
        </div>
        <form>
          <label>Name:
            <input type='text' value />
          </label>
          <label>Age:
            <input />
          </label>
          <label>Height:
            <input />
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

export default connect(mapStateToProps, {getData})(App);
