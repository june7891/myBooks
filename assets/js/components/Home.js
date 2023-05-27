import React from 'react';
import Login from './Login';
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Redirect, Link} from 'react-router-dom';
import Homepage from './Homepage';




function Home() {
  return (
   <>

    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/login" element={<Login/>}/>
    </Routes>
              
   </>
  )
}

export default Home;

if (document.getElementById('root')) {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
      // <StrictMode>
        <Router>
          <Home />
          </Router>
      // </StrictMode>
  );
}