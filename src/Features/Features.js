import React, { useState, useRef } from 'react';
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
  const target = useRef(null);
  const [inViewFromAbove, setInViewFromAbove] = useState(false);

  let previousY = 0;

  useIntersect({
    target,
    onIntersect: ([entry]) => {
      const currentY = entry.boundingClientRect.y;
      const isIntersect = entry.isIntersecting;
      console.log(entry.rootBounds.y);

      if (isIntersect) {
        setInViewFromAbove(true);
      } else if (currentY > previousY && !isIntersect) {
        setInViewFromAbove(false);
      }
      previousY = currentY;
    }
  });

  return (
    <div className={featureStyles.FeaturesWrapper}>
      {Items.map(item => (
        <div key={item.id}>
          <div
            ref={target}
            style={{
              backgroundColor: inViewFromAbove ? 'red' : 'grey',
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
