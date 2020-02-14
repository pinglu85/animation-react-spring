import React, { useRef } from 'react';
import { useSpring, useChain } from 'react-spring';
import items from './Data/data';
import useIntersect from './shared/useIntersect';
import Item from './Item/Item';
import featureStyles from './Features.module.css';

const Features = () => {
  const [ref, inView] = useIntersect({
    triggerOnce: true
  });

  // Hard code the animation because delay between each item
  // cannot be modified when using useTrail.
  // Item one animations
  const animation = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
  };

  const iconOneRef = useRef();
  const iconOneSpring = useSpring({
    ref: iconOneRef,
    ...animation
  });

  const copyOneRef = useRef();
  const copyOneSpring = useSpring({
    ref: copyOneRef,
    ...animation
  });

  // Item two animations
  const iconTwoRef = useRef();
  const iconTwoSpring = useSpring({
    ref: iconTwoRef,
    ...animation
  });

  const copyTwoRef = useRef();
  const copyTwoSpring = useSpring({
    ref: copyTwoRef,
    ...animation
  });

  // Item three animations
  const iconThreeRef = useRef();
  const iconThreeSpring = useSpring({
    ref: iconThreeRef,
    ...animation
  });

  const copyThreeRef = useRef();
  const copyThreeSpring = useSpring({
    ref: copyThreeRef,
    ...animation
  });

  useChain(
    [
      { current: iconOneRef.current },
      copyOneRef,
      iconTwoRef,
      copyTwoRef,
      iconThreeRef,
      copyThreeRef
    ],
    [0, 0.2, 0.4, 0.6, 0.8, 1]
  );

  return (
    <div className={featureStyles.FeaturesWrapper} ref={ref}>
      <Item
        iconAnimation={iconOneSpring}
        copyAnimation={copyOneSpring}
        icon={items[0].icon}
        heading={items[0].heading}
        desc={items[0].desc}
      />
      <Item
        iconAnimation={iconTwoSpring}
        copyAnimation={copyTwoSpring}
        icon={items[1].icon}
        heading={items[1].heading}
        desc={items[1].desc}
      />
      <Item
        iconAnimation={iconThreeSpring}
        copyAnimation={copyThreeSpring}
        icon={items[2].icon}
        heading={items[2].heading}
        desc={items[2].desc}
      />
    </div>
  );
};

export default Features;
