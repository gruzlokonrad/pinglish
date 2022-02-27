import React from 'react'
import { Button } from '../Button/Button';
import './CtaSection.scss';


interface ICtaSection {
  color: string;
  headline: string;
  description: string;
}

const COLOR = ['red']

const CtaSection = ({
  color,
  headline,
  description,
}: ICtaSection) => {

  const checkColor = COLOR.includes(color) ? color : null;

  return (
    <div className={`cta ${checkColor}`}>
      <div className="headline">
        {headline}
      </div>
      <div className="description">
        {description}
      </div>
      <Button color='white'>Zadzwoń</Button>
    </div>
  )
}

// CtaSection.propTypes = {
//   color: PropTypes.any,
//   headline: PropTypes.string,
//   description: PropTypes.string,
// }

export default CtaSection;
