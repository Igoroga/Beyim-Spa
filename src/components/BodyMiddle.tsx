import React from 'react';
import imgPlatform2 from '../image/imgPlatform2.png';
import aboutPlatform from '../image/aboutPlatform.png';
import imgPlatform1 from '../image/imgPlatform1.png';

const BodyMiddle = () => {
    return (
        <div className='bodyMiddleMain'>
          <div className='contentColumn'>
            <h1 className='contentColumn1'>Уникальный контент</h1>
            <p className='contentColumn2'>Контент в разных форматах, видео, картинки, СОР, СОЧ , задачи ( активити )</p>
            <div className='imageRow'>
              <img className='aboutPlatform' src={aboutPlatform} alt="imgPlatform2" />
              <img className='imgPlatform1' src={imgPlatform1} alt="imgPlatform2" />
            </div>
          </div>
          <div className='imageColumn'>
            <img src={imgPlatform2} alt="imgPlatform2" />
          </div>
        </div>
      );
};

export default BodyMiddle;