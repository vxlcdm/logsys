import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './components/Register';
import Login from './components/Login';
import RouteProtection from './utils/RouteProtection';
import ProfileTemp from './pages/ProfileTemp';
import HomeX from './pages/HomeX';
import HomeProtection from './utils/HomeProtection';

 



function App() {
  return (
        <>
 
<Router>
<Routes>

 
<Route path="/" element={<HomeProtection />} > 
<Route path="/" element={<HomeX/>}/>
</Route>

<Route path="/u" element={<Home/>} />
<Route   path='/register' element={<Register/>}     />
<Route   path='/login' element={<Login/>}     />
<Route   path='/ppp' element={<ProfileTemp/>}     />

<Route path='/profile' element={<RouteProtection/>}>
<Route   path='/profile' element={<Profile/>}     />
</Route>
 
</Routes>
</Router>

 
        </>
      
  );
}

export default App;
