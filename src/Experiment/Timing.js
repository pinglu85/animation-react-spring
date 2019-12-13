import React from 'react';
import { animated as a, Keyframes } from 'react-spring/renderprops';

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color: '#247BA0' },
      to: { radians: 2 * Math.PI }
    });
  }
});

const Timing = () => {
  const Content = ({ radians }) => (
    <a.svg
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
          willChange: 'transform',
          transformOrigin: '512px 384px',
          transform: radians.interpolate(
            r => `translate3d(0, ${50 * Math.sin(r + (2 * Math.PI) / 5)}px, 0)`
          )
        }}
        d="M314.915 164.623h406.55v422.293h-406.55V164.623z"
      ></a.path>
    </a.svg>
  );

  const base = 2 * Math.PI;
  const base2 = 0;
  const value = Math.sin(base + (2 * Math.PI) / 5);
  const value2 = Math.sin(base2 + (2 * Math.PI) / 5);
  const value3 = base + (2 * Math.PI) / 5;
  const value4 = base2 + (2 * Math.PI) / 5;

  console.log('value 1 sin:', value);
  console.log('value 2 sin:', value2);
  console.log('value 3:', value3);
  console.log('value 4:', value4);

  return (
    <div>
      <Container
        reset
        native
        //impl={TimingAnimation}
        config={{ duration: 2000 /*, easing: Easing.linear*/ }}
      >
        {Content}
      </Container>
    </div>
  );
};

export default Timing;
