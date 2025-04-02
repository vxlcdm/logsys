import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './components/Register';
import Login from './components/Login';
import RouteProtection from './utils/RouteProtection';


 



function App() {
  return (
        <>
 
<Router>
<Routes>
<Route   path='/' element={<Home/>}     />
<Route   path='/register' element={<Register/>}     />
<Route   path='/login' element={<Login/>}     />

<Route path='/profile' element={<RouteProtection/>}>
<Route   path='/profile' element={<Profile/>}     />


</Route>
 
</Routes>
</Router>

 
        </>
      
  );
}

export default App;
