
import React,{useEffect} from "react";
import {BaseLayout} from "./layouts";
import {Home} from "./pages";
import {movieService} from "./services/MoviesService";

import './App.css';


function App() {



  useEffect(()=>{

  },[])

  return (
<BaseLayout>
<Home/>
</BaseLayout>


  );
}

export default App;
