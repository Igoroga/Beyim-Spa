import React from 'react';
import bodyTop from '../image/GradientMain1.png';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import webSite from '../image/imgSiteFull копия.png';

const BodyTop = () => {
    return (
        <div className='GradientBody' style={{ backgroundImage: `url(${bodyTop})` }}>
            <div className='textBodyTop'>
            <div className='wordColumns'>
            <div className='word'>Платформа</div>
            <div className='word'>персонализированного</div>
            <div className='word'>обучения</div>
        </div>
            <p>Платформа, которая помогает каждому ученику учиться по своему!</p>
            <p>Назарбаев Интеллектуальные школы</p>
            </div>
            <div className='iconContent'>
            <div className='iconItem'>
                <img src={icon1} alt="Icon 1" />
                <p>Уникальный контент</p>
            </div>
            <div className='iconItem'>
                <img src={icon2} alt="Icon 2" />
                <p>Аналитика</p>
            </div>
            <div className='iconItem'>
                <img src={icon3} alt="Icon 3" />
                <p>Персонализированный подход</p>
            </div>
        </div>
        <img className='webSiteImage' src={webSite} alt="Website"/>
        </div>
    );
};

export default BodyTop;