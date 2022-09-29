import Mainpage from './components/MainPage';
import { Routes, Route } from "react-router-dom";
// import React, {ReactFragment} from "react";

const App = () =>{return(
    <>
      <Routes>
        <Route path='/' element={<Mainpage />}></Route>
      </Routes>
    </>
  )}

export default App;
