import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    
  } from "react-router-dom";
import App from './App';
import AppShop from './comps/appShop';
import Layout from './layout';

export default function AppRoutes() {
  return (
    <React.Fragment>
        <Router>
            <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<AppShop />} />
        <Route path='/:cat'element={<AppShop />} />

        </Route>
            </Routes>
        </Router>
    </React.Fragment>
  )
}
