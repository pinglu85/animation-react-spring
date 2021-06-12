import React from 'react';
import { animated as a, useSpring } from 'react-spring';
import delay from 'delay';
import investStyles from './Invest.module.css';

const Numbers = () => {
  const { o0, o20a, x20a, o20b, o22a, x22a, o22b, o4a } = useSpring({
    // Displays 0
    from: {
      o0: 1,
      o20a: 0,
      x20a: 12.9,
      o20b: 0,
      o22a: 0,
      x22a: 12.9,
      o22b: 0,
      o4a: 0,
    },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (1) {
        await delay(1000);
        // Displays 2 of 20
        await next({
          o0: 0,
          o20a: 1,
          x20a: 12.9,
          o20b: 0,
          o22a: 0,
          x22a: 12.9,
          o22b: 0,
          o4a: 0,
        });
        // Displays 20
        await next({
          o0: 0,
          o20a: 1,
          x20a: 0,
          o20b: 1,
          o22a: 0,
          x22a: 12.9,
          o22b: 0,
          o4a: 0,
        });
        await delay(1000);
        // Displays 2 of 22
        await next({
          o0: 0,
          o20a: 0,
          x20a: 0,
          o20b: 0,
          o22a: 1,
          x22a: 12.9,
          o22b: 0,
          o4a: 0,
        });
        // Displays 22
        await next({
          o0: 0,
          o20a: 0,
          x20a: 0,
          o20b: 0,
          o22a: 1,
          x22a: 0,
          o22b: 1,
          o4a: 0,
        });
        await delay(1000);
        // Displays 42
        await next({
          o0: 0,
          o20a: 0,
          x20a: 0,
          o20b: 0,
          o22a: 0,
          x22a: 0,
          o22b: 1,
          o4a: 1,
        });
        await delay(1000);
        // Displays 0
        await next({
          o0: 1,
          o20a: 0,
          x20a: 12.9,
          o20b: 0,
          o22a: 0,
          x22a: 12.9,
          o22b: 0,
          o4a: 0,
        });
      }
    },
  });
  return (
    <React.Fragment>
      <a.path
        d="M1015 529.3c0 3.5-.9 4.5-4.1 4.5h-1.7c-3.2 0-4.1-1-4.1-4.5v-22.2c0-3.5.9-4.5 4.1-4.5h1.7c3.2 0 4.1 1 4.1 4.5v22.2zm-8-.6c0 2.4.2 3.2 2.5 3.2h1.1c2.2 0 2.5-.8 2.5-3.2v-21.1c0-2.4-.2-3.2-2.5-3.2h-1.1c-2.2 0-2.5.8-2.5 3.2v21.1z"
        className={investStyles.st8}
        id="0"
        style={{ willChange: 'opacity', opacity: o0 }}
      ></a.path>
      <g id="20">
        <a.path
          id="0"
          className={investStyles.st8}
          style={{ willChange: 'opacity', opacity: o20b }}
          d="M1015 529.3c0 3.5-.9 4.5-4.1 4.5h-1.7c-3.2 0-4.1-1-4.1-4.5v-22.2c0-3.5.9-4.5 4.1-4.5h1.7c3.2 0 4.1 1 4.1 4.5v22.2zm-8-.6c0 2.4.2 3.2 2.5 3.2h1.1c2.2 0 2.5-.8 2.5-3.2v-21.1c0-2.4-.2-3.2-2.5-3.2h-1.1c-2.2 0-2.5.8-2.5 3.2v21.1z"
        ></a.path>
        <a.path
          id="2"
          className={investStyles.st8}
          style={{
            willChange: 'opacity, transform',
            transformOrigin: '991.8px 502.5px',
            transform: x20a.interpolate((x) => `translate3d(${x}px, 0, 0)`),
            opacity: o20a,
          }}
          d="M1000 507.6c0-2.4-.2-3.2-2.4-3.2h-1.1c-2.2 0-2.5.8-2.5 3.2v6.1h-1.8V507c0-3.5.8-4.5 4-4.5h1.6c3.2 0 4 1 4 4.5v1.4c0 4.4-.7 6-4.3 11.1-3 4.2-3.7 5.8-3.7 9.9v2.2h8.1v1.8h-10.1v-4.2c0-4.4.7-6 4.3-11.1 3-4.2 3.7-5.8 3.7-9.9v-.6z"
        ></a.path>
      </g>
      <g id="22">
        <a.path
          id="2-r"
          className={investStyles.st8}
          style={{ willChange: 'opacity', opacity: o22b }}
          d="M1012.9 507.6c0-2.4-.2-3.2-2.4-3.2h-1.1c-2.2 0-2.5.8-2.5 3.2v6.1h-1.8V507c0-3.5.8-4.5 4-4.5h1.6c3.2 0 4 1 4 4.5v1.4c0 4.4-.7 6-4.3 11.1-3 4.2-3.7 5.8-3.7 9.9v2.2h8.1v1.8h-10.1v-4.2c0-4.4.7-6 4.3-11.1 3-4.2 3.7-5.8 3.7-9.9v-.6z"
        ></a.path>
        <a.path
          id="2-l"
          className={investStyles.st8}
          style={{
            willChange: 'opacity, transform',
            transformOrigin: '991.8px 502.5px',
            transform: x22a.interpolate((x) => `translate3d(${x}px, 0, 0)`),
            opacity: o22a,
          }}
          d="M1000 507.6c0-2.4-.2-3.2-2.4-3.2h-1.1c-2.2 0-2.5.8-2.5 3.2v6.1h-1.8V507c0-3.5.8-4.5 4-4.5h1.6c3.2 0 4 1 4 4.5v1.4c0 4.4-.7 6-4.3 11.1-3 4.2-3.7 5.8-3.7 9.9v2.2h8.1v1.8h-10.1v-4.2c0-4.4.7-6 4.3-11.1 3-4.2 3.7-5.8 3.7-9.9v-.6z"
        ></a.path>
      </g>
      <g id="42">
        <a.path
          id="4"
          className={investStyles.st8}
          style={{ willChange: 'opacity', opacity: o4a }}
          d="M1000.3 502.9v22.9h2.7v1.7h-2.7v6h-1.9v-6h-7.3v-1.7l7.1-22.9h2.1zm-1.9 22.9v-9.1c0-3.8.1-7.1.2-10.8-.9 3.8-1.8 7.1-2.9 10.8l-2.8 9.1h5.5z"
        ></a.path>
      </g>
    </React.Fragment>
  );
};

export default Numbers;
