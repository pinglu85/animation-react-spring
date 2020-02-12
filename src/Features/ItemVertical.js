import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { animated as a, useSpring, useChain } from 'react-spring';
import useIntersect from './useIntersect';
import featureStyles from './Features.module.css';

const ItemVertical = ({ icon, heading, desc }) => {
  const [ref, inView] = useIntersect({ triggerOnce: true });
  const animation = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
  };

  const iconSpringRef = useRef();
  const iconAnimation = useSpring({ ref: iconSpringRef, ...animation });
  const copySpringRef = useRef();
  const copyAnimation = useSpring({ ref: copySpringRef, ...animation });
  useChain([{ current: iconSpringRef.current }, copySpringRef], [0, 0.2]);

  return (
    <div ref={ref} className={featureStyles.FeatureItem}>
      <a.div
        className={featureStyles.FeatureIcon}
        style={{ willChange: 'opacity, transform', ...iconAnimation }}
      >
        {icon}
      </a.div>
      <a.div
        className={featureStyles.FeatureCopyWrapper}
        style={{
          willChange: 'opacity, transform',
          transformOrigin: '0% 50%',
          ...copyAnimation
        }}
      >
        <h4 className={featureStyles.FeatureTitle}>{heading}</h4>
        <p className={featureStyles.FeatureDesc}>{desc}</p>
      </a.div>
    </div>
  );
};

ItemVertical.propTypes = {
  icon: PropTypes.node,
  heading: PropTypes.string,
  desc: PropTypes.string
};

export default ItemVertical;
