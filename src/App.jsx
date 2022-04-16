import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import {Routes,Route} from "react-router"
import { AddCountry } from './Components/AddCountry';
import { AddCity } from './Components/AddCity';
import { CityUpdate } from './Components/UpdateCity';
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path="/add-country" element={<AddCountry/>}/>
                <Route exact path="/add-city" element={<AddCity/>}/>
                <Route path="/update/:id" element={<CityUpdate />} />
            </Routes>
    </div>
  );
}

export default App;
