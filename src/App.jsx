import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
// import NavbarComponent from './Components/NavbarComponent';
import MyProfile from './Components/MyProfile';
import Components from './Components/Components';
import MyTickets from './Components/MyTickets';
// import SingleMovie from './Components/SingleMovie';
import MovieTrailers from './Components/MovieTrailers';
import Movie from './Components/Movie';
import DateFormat from './Components/DateFormat';
import Theaters from './Components/Theaters';
import Seatings from './Components/Seatings';
import Locations from './Components/Locations';
import Location from './Components/Location';
function App() {
  

  return (
    <>
    <BrowserRouter>
    {/* <DateFormat/> */}
    <Routes>
      <Route path='/location' element={<Location/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Components/>}/>
      <Route path='/profile' element={<MyProfile/>}/>
      <Route path='/mytickets' element={<MyTickets/>}/>
      <Route path='/movies/:movieId' element={<Movie/>}/>
      <Route path='/movieTrailer/:movieId' element={<MovieTrailers/>}/>
      <Route path='/theaters/:movieId/:currentDate' element={<Theaters/>}/>
      <Route path='/seatings/:currentDate' element={<Seatings/>}/>
      <Route path='/location/:movieName' element={<Locations/>}/>
      
    </Routes>
    </BrowserRouter>
     
        
    </>
  )
}

export default App
