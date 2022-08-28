import React, {StrictMode} from 'react';
import './app-body.css';

const AppBody = () => {
    return (
        <div className="app-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                      <div className="about_me">
                        <h1>Обо мне</h1>
                        <p>
                        Привет, друзья! Меня зовут Дмитрий Бобков. Я занимаюсь веб-разработкой вот уже 13 лет и искренне люблю свое дело, активно изучаю новые стандарты и технологии, всегда иду в ногу со временем и применяю только лучшее решение для Вашего проекта.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBody;