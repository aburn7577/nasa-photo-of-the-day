import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header'
import Photos from './Photos'
import Axios from 'axios'
import styled from 'styled-components'

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #003b6f;
`



function App() {
  const [pic, setPic] = useState([])

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=I3Vw27hYvq5LP9IOoyy7VrbtF7dBRe7JgtDAX0BD')
      .then(response => {
        setPic(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Style className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header picture={pic} />
      <Photos picture={pic} />
    </Style>
  );
}

export default App;
