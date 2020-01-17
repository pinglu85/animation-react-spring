import React from 'react';
import { animated as a, useTrail } from 'react-spring';
import useIntersect from './useIntersect';
import featureStyles from './Features.module.css';

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

const items = [
  {
    id: 'asdw',
    icon: keys,
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
  const [ref, inView] = useIntersect({
    triggerOnce: true
  });

  // Items animation
  const trail = useTrail(items.length, {
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0,
    from: { opacity: 0, scale: 0 },
    config: { mass: 5, tension: 1500, friction: 200 }
  });

  return (
    <div className={featureStyles.FeaturesWrapper}>
      {trail.map(({ opacity, scale }, index) => (
        <a.div style={opacity} ref={ref} key={items[index].id}>
          <a.div
            style={{
              willChange: 'transform',
              transform: scale.interpolate(s => `scale(${s})`)
            }}
            className={featureStyles.FeatureIcon}
          >
            {items[index].icon}
          </a.div>
          <a.div
            style={{
              willChange: 'transform',
              transformOrigin: '0 50%',
              transform: scale.interpolate(s => `scale(${s})`)
            }}
            className={featureStyles.FeatureCopyWrapper}
          >
            <h4 className={featureStyles.FeatureTitle}>
              {items[index].heading}
            </h4>
            <p className={featureStyles.FeatureDesc}>{items[index].desc}</p>
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Features;
