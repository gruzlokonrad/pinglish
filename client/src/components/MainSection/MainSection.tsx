import React from 'react';
import './MainSection.scss';
import '../../_color.scss';

interface IMainSection {
  reversed: boolean;
  bgColor: string,
  fontColor: string,
  headline: string,
  description: string,
  img: string,
  alt: string
}


const MainSection = ({
  reversed,
  bgColor,
  fontColor,
  headline,
  description,
  img,
  alt
}: IMainSection) => {
  return (
    <div className={reversed ? 'mainSection left' : 'mainSection'} style={{ backgroundColor: bgColor, color: fontColor }}>
      <section>
        <div className='headline'>
          {headline}
        </div>
        <div className="description">
          {description}
        </div>
      </section>
      <img src={img} alt={alt} />
    </div >
  );
};

export default MainSection;
