import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import './style/Global.scss'

const App = () => {
    return (
        <div className='app-styled'>
            <Sidebar />
            <Home />
        </div>
    )
}

export default App