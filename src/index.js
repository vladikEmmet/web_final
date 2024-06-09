import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './i18n';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Certificates from "./pages/Certificates";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contacts',
        element: <Contacts />,
    },
    {
        path: '/certificates',
        element: <Certificates />,
    },
], {basename: '/web_final'});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
        <RouterProvider router={router}>
            <Navbar />
            <Outlet />
        </RouterProvider>
        <Footer />
      </Suspense>
  </React.StrictMode>
);