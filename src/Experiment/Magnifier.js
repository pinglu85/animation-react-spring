import React from 'react';
import { animated as a, useSpring } from 'react-spring';

const Magnifier = () => {
  const magnifierAnimation = useSpring({
    from: {
      transform: 'rotate(0deg) translate3d(0, 0px, 0)',
      transformOrigin: '1197.295px 284.071px'
    },
    to: async next => {
      while (1) {
        await next({ transform: 'rotate(-1.1deg) translate3d(0, -20px, 0)' });
        await next({ transform: 'rotate(0deg) translate3d(0, 0, 0)' });
      }
    }
  });
  const style = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    fill: '#569ef7',
    stroke: '#4d4f51',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.5
  };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 1352 1034"
        xmlSpace="preserve"
      >
        <a.g style={{ ...magnifierAnimation }}>
          <path
            d="M1204.5 304.9l2.6 36-9 .4-.8-33.2c2.9-.7 5.4-1.8 7.2-3.2zm-1.2-15.3c-.5-.1-1-.2-1.5-.2-1.9 0-3.4.9-4.8 2.2l-.4-18.8h2.8c.9 0 1.9-.1 2.8-.2l1.1 17z"
            style={style}
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            stroke="#4d4f51"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.5"
            d="M1195.5 185.6c22-1 40.6 16.1 41.6 38.1s-16.1 40.6-38.1 41.6-40.6-16.1-41.6-38.1c-.9-22.1 16.1-40.7 38.1-41.6z"
            clipRule="evenodd"
          ></path>
          <path
            d="M1195.2 178c26.2-1.1 48.3 19.2 49.5 45.3 1.1 26.2-19.2 48.3-45.3 49.5-26.2 1.1-48.3-19.2-49.5-45.3-1.2-26.2 19.1-48.4 45.3-49.5zm.3 7.6c22-1 40.6 16.1 41.6 38.1s-16.1 40.6-38.1 41.6-40.6-16.1-41.6-38.1c-.9-22.1 16.1-40.7 38.1-41.6z"
            style={style}
          ></path>
        </a.g>
      </svg>
    </div>
  );
};

export default Magnifier;
