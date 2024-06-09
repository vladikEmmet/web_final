import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import './style/Global.scss'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Certificates from './pages/Certificates'
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
    {
        path: '/web_final',
        element: <Home />,
    },
    {
        path: '/web_final/services',
        element: <Services />,
    },
    {
        path: '/web_final/about',
        element: <About />,
    },
    {
        path: '/web_final/contacts',
        element: <Contacts />,
    },
    {
        path: '/web_final/certificates',
        element: <Certificates />,
    },
]);

const App = () => {
    return (
        <div className='app-styled'>
            <Sidebar />
            <RouterProvider router={router} >
                <Navbar />
            </RouterProvider>
            <Footer />
        </div>
    )
}

export default App