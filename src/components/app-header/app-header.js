import React, {StrictMode} from 'react';
import watsImg from './watsiccon.png';
import telegImg from './telegram.png';
import './app-header.css';

function AppHeader() {
    return (
        <div className="app-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="app-header_logo">
                            <img src="/images/logo-black.svg" alt="logo" />
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="app-header_menu">
                            <ul>
                                <li><a href="#">Портфолио</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=79653294228"><img src={watsImg} alt="Ватсапп" /> +7(965)3294228</a></li>
                                <li><a href="#">Контакты</a></li>
                                <li><a href="https://t.me/Bobdmitry"><img src={telegImg} alt="Ватсапп" /> Написать в телеграм</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;