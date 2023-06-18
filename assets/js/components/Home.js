import React from 'react';
import Login from './Login';
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Redirect, Link} from 'react-router-dom';
import Homepage from './Homepage';
import Register from './Register';
import Dashboard from '../pages/dashboard';
import Private from '../pages/Private/Private';
import PrivateHome from '../pages/Private/PrivateHome/PrivateHome';
import { UserContextProvider } from '../context/userContext';




function Home() {
  return (
   <>

    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route path="/private" element={<Private/>}>
          <Route path='/private/private-home' element={<PrivateHome/>}></Route>

      </Route>
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
        <UserContextProvider>
          <Home />
          </UserContextProvider>
          </Router>
      
        
      // </StrictMode>
  );
}