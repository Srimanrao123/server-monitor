import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={
        
          <Dashboard/>
        
          }/>
      </Routes>
    </Router>
  )
}

export default App