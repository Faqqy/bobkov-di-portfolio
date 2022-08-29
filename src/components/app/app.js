import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Contact from '../Contact';
import AppHeader from '../app-header/app-header';
import AppBody from '../app-body/app-body';
import './app.css';

function App() {
    return(

        <div className="main-app">
            <div className="main-header">
                <AppHeader/>
            </div>
            <Router>
                <Routes>
                    <Route path='/' element={<AppBody/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </Router>

        </div>
    );
}

export default App;