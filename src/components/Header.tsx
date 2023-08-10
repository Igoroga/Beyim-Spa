import React from 'react';
import logoMain from '../image/logo2.png';
import logoAlpha from '../image/logoAlpha.png';
import { useState } from 'react';

const Header = () => {
    const [activeLanguage, setActiveLanguage] = useState('Қаз');

    return (
        <div className='headerMain'>
            <div className="headerNav">
                <img src={logoMain} alt="Logo" />
                <img className='alphaLogo' src={logoAlpha} alt="alpha" />
                <a href="/notReady">Процесс</a>
                <a href="/notReady">FAQ</a>
                <a href="/notReady">Прайсинг</a>
                <a href="/notReady">Приложение</a>
                <a href="/notReady">Контакты</a>
            </div>
            <div className="headerSetting">
                <div className={activeLanguage === 'Қаз' ? 'languageButtonActive' : 'languageButton'} onClick={() => setActiveLanguage('Қаз')}>Қаз</div>
                <div className={activeLanguage === 'Рус' ? 'languageButtonActive' : 'languageButton'} onClick={() => setActiveLanguage('Рус')}>Рус</div>
                <div className={activeLanguage === 'Eng' ? 'languageButtonActive' : 'languageButton'} onClick={() => setActiveLanguage('Eng')}>Eng</div>
                <button className='signInButton'>Войти</button>
            </div>
        </div>
    );
};

export default Header;