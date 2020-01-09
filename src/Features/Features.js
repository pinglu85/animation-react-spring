import React, { useState, useEffect } from 'react';
import useIntersect from './useIntersect';
import featureStyles from './Features.module.css';

const Items = [
  {
    id: 'asdw',
    icon: 'icon1',
    heading: 'Kostenloser Mietservice',
    desc:
      'Lorem ipsum dolor sit amet, consect adipiscing elit ut aliquam, purus sit amet luctus venenatis.'
  },
  {
    id: 'woiu',
    icon: 'icon2',
    heading: 'Ideale Kapitalanlage',
    desc:
      'Lorem ipsum dolor sit amet, consect adipiscing elit ut aliquam, purus sit amet luctus venenatis.'
  },
  {
    id: 'ioki',
    icon: 'icon3',
    heading: 'Investitionsmanagement',
    desc:
      'Lorem ipsum dolor sit amet, consect adipiscing elit ut aliquam, purus sit amet luctus venenatis.'
  }
];

const Features = () => {
  const [ref, entry] = useIntersect();
  const [color, setColor] = useState('grey');

  useEffect(() => {
    if (entry.isIntersecting) {
      setColor('red');
    }
  }, [color, entry]);

  return (
    <div className={featureStyles.FeaturesWrapper}>
      {Items.map(item => (
        <div key={item.id}>
          <div
            ref={ref}
            style={{
              backgroundColor: color,
              transition: 'background-color 1s linear'
            }}
            className={featureStyles.FeatureIcon}
          >
            {item.icon}
          </div>
          <h4 className={featureStyles.FeatureTitle}>{item.heading}</h4>
          <p className={featureStyles.FeatureDesc}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
