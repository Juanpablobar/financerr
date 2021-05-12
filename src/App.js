import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Loader from './components/loader';
import Router from './router';

function App() {

  const [loader, setLoader] = useState(true)
    // El contenido del DOM no se mostrará hasta que este listo, mientras pasa se mostrará el loader
    document.addEventListener("DOMContentLoaded",()=>{
      setLoader(false)
    })

  if(loader){
    return(
      <Loader />
    )
  } else { 

    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
