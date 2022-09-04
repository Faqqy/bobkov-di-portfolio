import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Job from '../Job';
import AppHeader from '../app-header/app-header';
import AppBody from '../app-body/app-body';
// import AppFooter from '../app-footer/app-footer';
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
                    <Route path='/job' element={<Job/>} />
                </Routes>
            </Router>
            {/* <div className="main-footer">
                <AppFooter/>
            </div> */}
        </div>
    );
}

export default App;