import React from 'react';
import items from './Data/data';
import ItemVertical from './Item/ItemVertical';
import featureStyles from './Features.module.css';

const FeaturesVertical = () => {
  return (
    <div className={featureStyles.FeaturesVerticalWrapper}>
      {items.map(item => (
        <ItemVertical
          key={item.id}
          icon={item.icon}
          heading={item.heading}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default FeaturesVertical;
