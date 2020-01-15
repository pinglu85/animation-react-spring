import React from 'react';
import { animated as a, useSpring } from 'react-spring';
import * as easings from 'd3-ease';

const Keys = ({ triggerAnimation }) => {
  const styles = {
    fill: 'none',
    stroke: '#2e251b',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.5
  };
  const { r } = useSpring({
    from: { r: 0 },
    to: async next => {
      await next({ r: triggerAnimation ? 6 : 0 });
      await next({ r: 0 });
    },
    config: { duration: 500, easing: easings.easeSinInOut }
  });
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
      <a.path
        d="M42.4 32.7l15.3 14.9c1.4 1.3 3.6 1.3 4.9-.1s1.3-3.6-.1-4.9L47.3 27.7c3.6-6 2.8-13.9-2.4-18.9C38.7 2.8 29 3 23.1 9s-5.8 15.8.3 21.7c5.2 5.1 13.1 5.8 19 2z"
        style={{
          willChange: 'transform',
          transformOrigin: '18.75px 4.40px',
          transform: r.interpolate(r => `rotate(${r * 2}deg)`),
          ...styles
        }}
        id="key-back"
      ></a.path>
      <a.g
        id="key-front"
        style={{
          willChange: 'transform',
          transformOrigin: '19.25px 10px',
          transform: r.interpolate(r => `rotate(${r}deg)`)
        }}
      >
        <path
          fill="none"
          stroke="#fefefe"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeWidth="5"
          d="M35.1 25.4c0 9-7.3 16.4-16.4 16.4"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          stroke="#2e251b"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeWidth="2"
          d="M15.3 40.4v18.7c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5V40.4c6.8-1.6 11.9-7.7 11.9-15 0-8.5-6.9-15.4-15.4-15.4S3.4 17 3.4 25.4c0 7.3 5.1 13.4 11.9 15h0z"
          clipRule="evenodd"
        ></path>
        <circle cx="18.8" cy="22" r="3.5" style={styles}></circle>
      </a.g>
    </svg>
  );
};

export default Keys;
