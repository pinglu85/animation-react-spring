import React, { useRef } from 'react';
import { animated as a, useSpring, useChain } from 'react-spring';
import useIntersect from './useIntersect';
import featureStyles from './Features.module.css';

// Icons
const keys = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
    <path
      d="M59.6 48c-.3 0-.6-.1-.9-.3l-3.1-2.9c-.2-.2-.4-.5-.4-.8l-.1-1.7h-1.7c-.3 0-.6-.1-.9-.3l-.7-.7c-.2-.2-.4-.5-.4-.8l-.1-1.7h-1.7c-.3 0-.6-.1-.9-.3l-4.6-4.3c-1.9 1.1-4.1 1.8-6.3 2-.7.1-1.3-.4-1.4-1.1-.1-.7.4-1.3 1.1-1.4 2.2-.3 4.2-1 6.1-2.2.5-.3 1.1-.2 1.5.1l4.9 4.6h2.4c.7 0 1.2.5 1.2 1.2l.1 2.4h2.4c.7 0 1.2.5 1.3 1.2l.1 2.4 2.3 2.2 4-.3v-4L49.2 27.4c-.4-.4-.5-1-.3-1.5 3.2-6 1.9-13.4-3-18-2.9-2.7-6.7-4.1-10.7-4-4 .1-7.7 1.8-10.4 4.8-.4.5-.9 1-1.2 1.5-.4.6-1.2.7-1.7.3-.6-.4-.7-1.2-.3-1.7.4-.6.9-1.2 1.4-1.8 3.2-3.4 7.5-5.4 12.2-5.6 4.7-.2 9.1 1.5 12.5 4.7 5.6 5.2 7.1 13.3 4 20.1l14.5 13.5c.3.2.4.6.4.9v5.7c0 .6-.5 1.2-1.2 1.2l-5.8.5z"
      fill="#2e251b"
    ></path>
    <path
      d="M17.9 26.3c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.1 4.9-4.9 4.9zm0-7.4c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1-2.4-2.4-2.4z"
      fill="#2e251b"
    ></path>
    <path
      d="M17.9 65.6c-.3 0-.6-.1-.8-.3l-4.2-3.8c-.3-.2-.4-.6-.4-.9v-4.2c0-.3.1-.6.4-.9l1.2-1.2-1.2-1.3c-.2-.2-.4-.5-.4-.9v-1c0-.3.1-.6.4-.9L14 49l-1.2-1.2c-.2-.2-.4-.5-.4-.9v-5.3C5.3 39.3.4 32.6.4 25c0-9.6 7.8-17.5 17.5-17.5 9.6 0 17.5 7.8 17.5 17.5 0 7.6-4.9 14.3-12 16.6v18.8c0 .3-.1.7-.4.9l-4.2 3.8c-.2.4-.6.5-.9.5zM15 59.9l2.9 2.7 2.9-2.7V40.7c0-.6.4-1.1.9-1.2 6.5-1.7 11.1-7.7 11.1-14.5 0-8.3-6.7-15-15-15s-15 6.7-15 15c0 6.8 4.6 12.7 11.1 14.5.5.1.9.6.9 1.2v5.7l1.6 1.7c.5.5.5 1.3 0 1.7L15 51.6l1.6 1.7c.5.5.5 1.3 0 1.7L15 56.7v3.2zm7.1.6z"
      fill="#2e251b"
    ></path>
  </svg>
);

const flower = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
    <path
      d="M30.7 60.7c-4.1 0-11.9-.7-18.6-5.3-6.6-4.5-8.6-11-8.7-11.2-.1-.3-.1-.7.1-1s.5-.5.9-.6c.3 0 7.5-1.1 15.6 2.4 10.8 4.7 14.5 13.4 14.7 13.8.1.4.1.8-.1 1.1-.2.3-.5.6-.9.6-.1.1-1.2.2-3 .2zM6.4 44.9c.9 2 3.1 5.6 7.1 8.4 6.6 4.5 14.5 4.9 18 4.8-1.5-2.5-5.3-7.6-12.5-10.8-5.3-2.3-10.2-2.4-12.6-2.4z"
      fill="#2e251b"
    ></path>
    <path
      d="M36.3 63.6c-1.7 0-2.8-.1-2.9-.1-.4 0-.8-.3-.9-.6-.2-.3-.2-.8-.1-1.1.1-.3 3.7-8 14.2-12.1 7.8-3.1 14.7-2.1 15-2.1.4.1.7.3.9.6.2.3.2.7.1 1-.1.2-2 5.9-8.4 9.9-6.5 3.9-13.9 4.5-17.9 4.5zm-.7-2.5c3.5.1 11-.3 17.2-4.2 3.7-2.3 5.7-5.3 6.7-7-2.4-.1-7 .1-12 2.1-6.7 2.5-10.3 6.7-11.9 9.1z"
      fill="#2e251b"
    ></path>
    <path
      d="M33.5 65.4c-.7 0-1.2-.6-1.2-1.2V44.7c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v19.5c.1.7-.5 1.2-1.2 1.2z"
      fill="#2e251b"
    ></path>
    <path
      d="M33.5 45.9c-3.2 0-5.9-2.8-6.7-6.7-3.4 2.2-7.4 2.4-9.7.1-1.1-1.1-1.7-2.5-1.7-4.2 0-1.7.6-3.5 1.7-5.1-4-.8-6.9-3.4-6.9-6.5s2.9-5.8 6.9-6.5c-1.1-1.6-1.7-3.4-1.7-5.1 0-1.7.6-3.1 1.7-4.2 2.3-2.2 6.3-2.1 9.7.1.8-3.8 3.5-6.7 6.7-6.7s5.9 2.8 6.7 6.7c3.4-2.2 7.3-2.4 9.7-.1 1.1 1.1 1.7 2.5 1.7 4.2 0 1.7-.6 3.5-1.7 5.1 4 .8 6.9 3.4 6.9 6.5s-2.9 5.8-6.9 6.5c1.1 1.6 1.7 3.4 1.7 5.1 0 1.7-.6 3.1-1.7 4.2-2.3 2.2-6.3 2.1-9.7-.1-.8 3.9-3.5 6.7-6.7 6.7zm-5.7-10.3c.2 0 .3 0 .5.1.5.2.8.6.8 1.1 0 3.5 2.1 6.5 4.5 6.5s4.5-3 4.5-6.5c0-.5.3-1 .8-1.1.5-.2 1-.1 1.4.2 2.6 2.5 6.3 3.3 8.1 1.6.7-.7.9-1.7.9-2.4 0-1.7-1-3.7-2.6-5.3-.4-.4-.5-.9-.3-1.4.2-.5.6-.8 1.2-.8 3.7 0 6.9-2 6.9-4.3S51.4 19 47.6 19c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4 1.6-1.6 2.6-3.5 2.6-5.3 0-.7-.2-1.6-.9-2.4-1.7-1.7-5.4-.9-8.1 1.6-.4.3-.9.4-1.4.2-.5-.2-.8-.6-.8-1.1 0-3.5-2.1-6.5-4.5-6.5s-4.5 3-4.5 6.5c0 .5-.3 1-.8 1.1-.5.2-1 .1-1.4-.2-2.6-2.5-6.3-3.3-8.1-1.6-.7.7-.9 1.7-.9 2.4 0 1.7 1 3.7 2.6 5.3.4.4.5.9.3 1.4-.2.5-.6.8-1.2.8-3.7 0-6.9 2-6.9 4.3s3.1 4.3 6.9 4.3c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4-1.6 1.6-2.6 3.5-2.6 5.3 0 .7.2 1.6.9 2.4 1.7 1.7 5.4.9 8.1-1.6.2-.1.5-.3.9-.3z"
      fill="#2e251b"
    ></path>
    <path
      d="M33.5 34.3c-1.5 0-2.8-1.1-3.5-2.7-1.6.7-3.3.6-4.4-.5-.6-.6-1-1.4-1-2.4 0-.6.2-1.3.4-1.9-1.6-.6-2.8-1.9-2.8-3.4s1.1-2.8 2.8-3.4c-.3-.6-.4-1.3-.4-1.9 0-.9.3-1.8 1-2.4 1.1-1 2.8-1.2 4.4-.5.6-1.6 1.9-2.7 3.5-2.7 1.5 0 2.8 1.1 3.5 2.7 1.6-.7 3.3-.6 4.4.5.6.6 1 1.4 1 2.4 0 .6-.2 1.3-.4 1.9 1.6.6 2.8 1.9 2.8 3.4s-1.1 2.8-2.8 3.4c.3.6.4 1.3.4 1.9 0 .9-.3 1.8-1 2.4-1.1 1-2.8 1.2-4.4.5-.7 1.6-2 2.7-3.5 2.7zm-2.6-6c.2 0 .3 0 .5.1.5.2.8.6.8 1.1 0 1.3.7 2.3 1.3 2.3s1.3-1 1.3-2.3c0-.5.3-1 .8-1.1.5-.2 1-.1 1.4.2 1 .9 2.2 1.2 2.7.7.1-.1.2-.3.2-.6 0-.5-.3-1.2-1-1.9-.4-.4-.5-.9-.3-1.4.2-.5.6-.8 1.2-.8 1.5 0 2.4-.7 2.4-1.2s-.9-1.2-2.4-1.2c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4.7-.7 1-1.4 1-1.9 0-.2-.1-.4-.2-.6-.4-.4-1.7-.2-2.7.7-.4.3-.9.4-1.4.2-.5-.2-.8-.6-.8-1.1 0-1.3-.7-2.3-1.3-2.3s-1.3 1-1.3 2.3c0 .5-.3 1-.8 1.1-.5.2-1 .1-1.4-.2-1-.9-2.2-1.2-2.7-.7-.1.1-.2.3-.2.6 0 .5.3 1.2 1 1.9.4.4.5.9.3 1.4-.2.5-.6.8-1.2.8-1.5 0-2.4.7-2.4 1.2s.9 1.2 2.4 1.2c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4-.7.7-1 1.4-1 1.9 0 .2.1.4.2.6.4.4 1.7.2 2.7-.7.3-.2.6-.3.9-.3z"
      fill="#2e251b"
    ></path>
  </svg>
);

const calculator = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
    <path
      d="M58.5 65.4h-50c-.7 0-1.2-.6-1.2-1.2v-39c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v37.7h47.5V25.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v39c.1.7-.4 1.2-1.1 1.2zm5.5-43c-.2 0-.4-.1-.7-.2L33.5 4 3.6 22.3c-.6.4-1.4.2-1.7-.4-.4-.6-.2-1.4.4-1.7L32.8 1.5c.4-.2.9-.2 1.3 0l30.5 18.6c.6.4.8 1.1.4 1.7-.2.4-.6.6-1 .6z"
      fill="#2e251b"
    ></path>
    <path
      d="M28.5 26.2h-4.8v-4.8c0-.7-.6-1.2-1.2-1.2s-1.2.6-1.2 1.2v4.8h-4.8c-.7 0-1.2.6-1.2 1.2s.6 1.2 1.2 1.2h4.8v4.8c0 .7.6 1.2 1.2 1.2s1.2-.6 1.2-1.2v-4.8h4.8c.7 0 1.2-.6 1.2-1.2s-.5-1.2-1.2-1.2zm-4.2 22.9l4.1-4.1c.5-.5.5-1.3 0-1.8s-1.3-.5-1.8 0l-4.1 4.1-4.1-4.1c-.5-.5-1.3-.5-1.8 0s-.5 1.3 0 1.8l4.1 4.1-4.1 4.1c-.5.5-.5 1.3 0 1.8.2.2.6.4.9.4s.6-.1.9-.4l4.1-4.1 4.1 4.1c.2.2.6.4.9.4s.6-.1.9-.4c.5-.5.5-1.3 0-1.8l-4.1-4.1zm26.2-20.3h-12c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h12c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2zm0 17.7h-12c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h12c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2zm0 7.6h-12c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h12c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2z"
      fill="#2e251b"
    ></path>
  </svg>
);

// Items
const items = [
  {
    icon: keys,
    heading: 'Kostenloser Mietservice',
    desc:
      'Lorem ipsum dolor sit amet, consect adipiscing elit ut aliquam, purus sit amet luctus venenatis.'
  },
  {
    icon: flower,
    heading: 'Ideale Kapitalanlage',
    desc:
      'Lorem ipsum dolor sit amet, consect adipiscing elit ut aliquam, purus sit amet luctus venenatis.'
  },
  {
    icon: calculator,
    heading: 'Investitionsmanagement',
    desc:
      'Lorem ipsum dolor sit amet, consect adipiscing elit ut aliquam, purus sit amet luctus venenatis.'
  }
];

const Features = () => {
  const [ref, inView] = useIntersect({
    triggerOnce: true
  });

  // Hard code the animation because delay between each item
  // cannot be modified when using useTrail.
  // Item one animations
  const iconOneRef = useRef();
  const iconOneSpring = useSpring({
    ref: iconOneRef,
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
  });

  const copyOneRef = useRef();
  const copyOneSpring = useSpring({
    ref: copyOneRef,
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
  });

  // Item two animations
  const iconTwoRef = useRef();
  const iconTwoSpring = useSpring({
    ref: iconTwoRef,
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
  });

  const copyTwoRef = useRef();
  const copyTwoSpring = useSpring({
    ref: copyTwoRef,
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
  });

  // Item three animations
  const iconThreeRef = useRef();
  const iconThreeSpring = useSpring({
    ref: iconThreeRef,
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
  });

  const copyThreeRef = useRef();
  const copyThreeSpring = useSpring({
    ref: copyThreeRef,
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { mass: 5, tension: 2000, friction: 200 }
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
    <div className={featureStyles.FeaturesWrapper}>
      <div ref={ref}>
        <a.div
          style={{
            willChange: 'opacity, transform',
            ...iconOneSpring
          }}
          className={featureStyles.FeatureIcon}
        >
          {items[0].icon}
        </a.div>
        <a.div
          style={{
            willChange: 'opacity, transform',
            transformOrigin: '0 50%',
            ...copyOneSpring
          }}
          className={featureStyles.FeatureCopyWrapper}
        >
          <h4 className={featureStyles.FeatureTitle}>{items[0].heading}</h4>
          <p className={featureStyles.FeatureDesc}>{items[0].desc}</p>
        </a.div>
      </div>
      <div ref={ref}>
        <a.div
          style={{
            willChange: 'opacity, transform',
            ...iconTwoSpring
          }}
          className={featureStyles.FeatureIcon}
        >
          {items[1].icon}
        </a.div>
        <a.div
          style={{
            willChange: 'opacity, transform',
            transformOrigin: '0 50%',
            ...copyTwoSpring
          }}
          className={featureStyles.FeatureCopyWrapper}
        >
          <h4 className={featureStyles.FeatureTitle}>{items[1].heading}</h4>
          <p className={featureStyles.FeatureDesc}>{items[1].desc}</p>
        </a.div>
      </div>
      <div ref={ref}>
        <a.div
          style={{
            willChange: 'opacity, transform',
            ...iconThreeSpring
          }}
          className={featureStyles.FeatureIcon}
        >
          {items[2].icon}
        </a.div>
        <a.div
          style={{
            willChange: 'opacity, transform',
            transformOrigin: '0 50%',
            ...copyThreeSpring
          }}
          className={featureStyles.FeatureCopyWrapper}
        >
          <h4 className={featureStyles.FeatureTitle}>{items[2].heading}</h4>
          <p className={featureStyles.FeatureDesc}>{items[2].desc}</p>
        </a.div>
      </div>
    </div>
  );
};

export default Features;
