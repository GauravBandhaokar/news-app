import './App.css';

import NavBar from './components/NavBar';
import News from './components/News';
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  let PageSize= 9;

  

  return (
    <>
    
    <NavBar/>
    <Routes>
          <Route path="/"  element={<News pageSize={PageSize} country="in" category="general"/>} />
          

          {/* catagory */}
          <Route exact path="/General" element={<News key="general"  pageSize={PageSize} country="in" category="general"/>} />
          <Route exact path="/Business" element={<News key="business" pageSize={PageSize} country="in" category="business"/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={PageSize} country="in" category="technology"/>} />
          <Route exact path="/health" element={<News key="health" pageSize={PageSize} country="in" category="health"/>} />
          

      </Routes> 
          
    
  
    </>
  );
}

export default App;
