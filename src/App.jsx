import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import {Routes,Route} from "react-router"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/add-country" element={<Addcountry/>}/>
        <Route path="/add-city" element={<Addcity/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
