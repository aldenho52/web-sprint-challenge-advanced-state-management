import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getData } from '../actions'
import Smurf from './Smurf'

const App = (props) => {
    useEffect(() => {
      props.getData()
    }, [])
  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>
        {props.smurfData.map(smurf => {
          return <Smurf smurf={smurf}/>
        })}
        </div>
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
