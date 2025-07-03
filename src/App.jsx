
import { useEffect, useState } from 'react';
import './App.css'

import About from './componants/About'
import Header from './componants/Header'
import Home from './componants/Home'
import Skills from './componants/Skills'
import Works from './componants/Works'
import Contect from './componants/Contect'



function App() {

  return (
     <>
       <Header/>
     <main>
      <Home/>
       <About/>
       <Skills/>
       <Works/>
       <Contect/>
     </main>
    </>
 
  )
}

export default App
