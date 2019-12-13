import React from 'react';
import { useSpring, animated as a } from 'react-spring';

const Basic = () => {
  const { x } = useSpring({
    from: { x: 0 },
    // for looping
    to: async next => {
      while (1) {
        await next({ x: 1 });
      }
    },
    config: { mass: 1, tension: 120, friction: 40 },
    reset: true
  });

  return (
    <div style={{ width: '400px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipRule="evenodd"
        viewBox="0 0 1024 768"
      >
        <a.path
          style={{
            fill: '#3f4041',
            stroke: '#3f4041',
            strokeWidth: 1.464,
            transformOrigin: '512px 384px',
            transform: x
              .interpolate({ range: [0.2, 0.6, 1], output: [0, 90, 0] })
              .interpolate(x => `rotate(${x}deg)`)
          }}
          d="M314.915 164.623h406.55v422.293h-406.55V164.623z"
        ></a.path>
      </svg>
    </div>
  );
};

export default Basic;
