import React, { useEffect, useState } from 'react';
import variant1 from '../image/variant1.png';
import variant2 from '../image/variant2.png';
import variant3 from '../image/variant3.png';

const BodySlide = () => {
    const [slider, setSlider] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider === 3) {
                setSlider(1);
            } else {
                setSlider(slider + 1);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [slider]);

    return (
        <div className='BodySlideMain'>
            <div className='contentWrapper'>
                <div className='textContent'>
                    <h1 className='htextSlider'>Персонализированный подход</h1>
                    <div className='slider'>
                        <div className='phaseSlider'></div>
                        <div className='nameSlider'>
                            <p className='textSlider'>Контент подстраивается под ваш темп обучения. Показывает только то что вам интересно</p>
                            <p className='textSlider'>Подтягивает знания</p>
                            <p className='textSlider'>Задания для подготовки к суммативному оцениванию</p>
                        </div>
                    </div>
                </div>
                <div className='imageWrapper'>
                    <div className='imageOverlay' style={{ display: slider === 1 ? 'block' : 'none' }}>
                        <img src={variant1} alt="Variant" />
                    </div>
                    <div className='imageOverlay' style={{ display: slider === 2 ? 'block' : 'none' }}>
                        <img src={variant2} alt="Variant" />
                    </div>
                    <div className='imageOverlay' style={{ display: slider === 3 ? 'block' : 'none' }}>
                        <img src={variant3} alt="Variant" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodySlide;