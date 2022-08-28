import React, {StrictMode} from 'react';
import AppHeader from '../app-header/app-header';
import AppBody from '../app-body/app-body';
import AppFooter from '../app-footer/app-footer';
import './app.css';

function App() {
    return(
        <div className="main-app">
            <div className="main-header">
                <AppHeader/>
            </div>
            <div className="main-body">
                <AppBody/>
            </div>
            <div className="main-footer">
                <AppFooter/>
            </div>
        </div>
    );
}

export default App;