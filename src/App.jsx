import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { navItems } from './utils/constants'
import { SwContext } from './utils/context';

function App() {
  const [page, setPage] = useState(navItems[0])

  return (
    <div className='container-fluid'>
      <SwContext.Provider value={{
        changePage: (newPage) => { setPage(newPage) }
      }}>
        <Header />
      </SwContext.Provider>
      <Main page={page} />
      <Footer />
    </div>

  )
}

export default App
