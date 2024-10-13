import React, { useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import TableData from './Components/TableData'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {

  const [info, setInfo] = useState([])

  return (
    
    <div className='app'>
      
      <Router>
      <Header/>
        <Routes>
          <Route path="/form" element={<Form setInfo={setInfo} info={info}/>}></Route>
      <Route path="/table" element={<TableData info={info}/>}></Route>
      
        </Routes>
    </Router>
      
    </div>
  )
}

export default App
