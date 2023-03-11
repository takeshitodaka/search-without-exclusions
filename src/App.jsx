import { useState } from 'react'
import Exclusions from './pages/Exclusions'
import Search from './pages/Search'
import './App.css'

import { Routes, Route } from 'react-router-dom'


function doSearch(){
  
  
}

function App() {
  const [searchWord, setSearchWord] = useState("")

  

  return (
    <div className="App">
      <Routes>
        <Route path='/exclusions' element={<Exclusions/>}></Route>
        <Route path='/' element={<Search/>}></Route>
      </Routes>
    </div>
  )
}

export default App
