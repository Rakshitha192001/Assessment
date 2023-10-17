
import './App.css';
import Dashboard1 from './Components/Dasboard1';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (

    <>
       {/* <Home />   */}
     <Routes> 
      <Route path='/' element={<Home />}  />
       <Route path='/dashboard' element={<Dashboard />} />
         
    </Routes>  
     {/* <Dashboard />  */}
      {/* <Dashboard1 />  */}

    
    </>
  );
}

export default App;
