import React from 'react';
import useIntersect from './useIntersect';
import Keys from './Keys';
import featureStyles from './Features.module.css';

const Features = () => {
  const [ref, inView] = useIntersect({ triggerOnce: true, threshold: 0.8 });

  const Items = [
    {
      id: 'asdw',
      icon: <Keys triggerAnimation={inView} />,
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

  // console.log(inViewFromAbove);
  // useEffect(() => {
  //   const currentY = entry.boundingClientRect.y;
  //   const isIntersect = entry.isIntersecting;
  //   console.log('previousY:', previousY);
  //   console.log(currentY);
  //   console.log('useEffect called');
  //   if (currentY < previousY && isIntersect) {
  //     setInViewFromAbove(true);
  //   }
  //   setPreviousY(currentY);
  // }, [entry, previousY, io]);

  return (
    <div className={featureStyles.FeaturesWrapper}>
      {Items.map(item => (
        <div ref={ref} key={item.id}>
          <div className={featureStyles.FeatureIcon}>{item.icon}</div>
          <h4 className={featureStyles.FeatureTitle}>{item.heading}</h4>
          <p className={featureStyles.FeatureDesc}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
