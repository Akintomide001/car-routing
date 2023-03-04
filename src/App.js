import logo from './logo.svg';
import './cars/car.css';
import CarInfo from './cars';
import Landing from './landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Nav-bar';
import Layout from './layout';
import PeopleInfo from './people';
import Person from './people/person';
import Cars from './cars/cars';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<Landing />} />
          <Route path='/Database/' exact element={<Layout />}>
            <Route path='people' exact element={<PeopleInfo />}/>
            <Route path='people/:personid' exact element={<Person />}/>
            <Route path='car-info' exact element={<CarInfo/>}/>
            <Route path='car-info/:carid' exact element={<Cars />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
