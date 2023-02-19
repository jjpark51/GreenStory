import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Signin from './components/Sigin/Signin';
import Footer from './components/Footer/Footer';
import Color from './components/Color/Color';
import Tags from './components/Tags/Tags';
import Detail from './components/Detail/Detail';
import Profile from './components/Profile/Profile';
import MoreRecipes from './components/Detail/MoreRecipes';

function App() {

  const [route, setRoute] = useState('/signin')

  const [home, setHome] = useState(true)


  const childToParent  = (route) =>  {
    setRoute(route)
  }

  const [select, setSelect] = useState('')

  const handleSelect = (e) => {
    setSelect(e)
  }

  console.log(route)



  return (
    <React.Fragment>
      <BrowserRouter>


          <Routes>
            <Route path="/" exact element={<Main childToParent={childToParent} handleSelect={handleSelect}/>} />

            <Route path="/signin" exact element={<>< Signin route={route} childToParent={childToParent} handleSelect={handleSelect}/></>} />
            <Route path='/tags'  exact element={<><Navigation childToParent={childToParent} handleSelect={handleSelect} /> < Tags route={route} select={select} handleSelect={handleSelect}/></> } />
            <Route path='/color' exact element={<> <Navigation childToParent={childToParent} handleSelect={handleSelect}/>< Color route={route} select={select} handleSelect={handleSelect}/></>} />
            <Route path='/detail' exact element={<> <Navigation childToParent={childToParent} handleSelect={handleSelect}/>< Detail select={select}/></>} />
            <Route path='/profile' exact element={<><Navigation childToParent={childToParent} handleSelect={handleSelect}/> <Profile /></>} />
            <Route path='/morerecipe' exact element={<><Navigation childToParent={childToParent} handleSelect={handleSelect}/><MoreRecipes select={select} handleSelect={handleSelect}/></>} />

          </Routes>
          

          <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
