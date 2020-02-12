import React from 'react';
import PropTypes from 'prop-types';
import { animated as a } from 'react-spring';
import featureStyles from './Features.module.css';

const Item = ({ iconAnimation, copyAnimation, icon, heading, desc }) => {
  return (
    <div>
      <a.div
        style={{
          willChange: 'opacity, transform',
          ...iconAnimation
        }}
        className={featureStyles.FeatureIcon}
      >
        {icon}
      </a.div>
      <a.div
        style={{
          willChange: 'opacity, transform',
          transformOrigin: '0 50%',
          ...copyAnimation
        }}
        className={featureStyles.FeatureCopyWrapper}
      >
        <h4 className={featureStyles.FeatureTitle}>{heading}</h4>
        <p className={featureStyles.FeatureDesc}>{desc}</p>
      </a.div>
    </div>
  );
};

Item.propTypes = {
  iconAnimation: PropTypes.object,
  copyAnimation: PropTypes.object,
  icon: PropTypes.node,
  heading: PropTypes.string,
  desc: PropTypes.string
};

export default Item;
