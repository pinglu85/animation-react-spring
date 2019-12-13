// Performance issue when combining with other useSpring async animation scripts

import React, { useState } from 'react';
import { animated as a, Spring } from 'react-spring/renderprops';
import { interpolate } from 'flubber';

const paths = [
  'M1110.4 324.9c14.6-4.1 33.1-10.1 45.8-15.9 12.1-5.6 24.9-13.8 34.3-20.8.7-.5 2.6-1 3.4-1.4 2-.8 3.9-1.8 5.4-2.9 2.2-1.6 3.6-3.5 3.8-5.4.1-1.4.2-4.1-.5-6.4-.4-1.7-1.2-3.2-2.5-4.2-1-.7-2.4-1.1-4.3-.8-1.4.2-2.5 1-3.4 2.1-1.8 2-3 5.2-4.4 8.1-1 2-2.2 3.9-3.8 5.1-3.9 2.9-21.8 13.4-33.7 17.8-11.9 4.5-28.1 7.3-43.9 9.5l3.8 15.2z',
  'M1110.8 323.6c11.7.3 30.5-.4 45-3.3 13.1-2.6 26-6.4 36.6-11.3.8-.4 2.7-.5 3.6-.7 2.3-.4 4.4-1.1 6.2-2 2.3-1.1 3.9-2.6 4.4-4.4.4-1.2.8-3.2.8-5.3 0-1.8-.3-3.7-1.2-5.1-.9-1.3-2.3-2.2-4.5-2.2-1.4 0-2.6.5-3.7 1.3-1.9 1.4-3.5 3.7-5.1 5.9-1.7 2.2-3.4 4.4-5.6 5.4-4.4 2-18.2 5.3-34 7.1-13.9 1.6-33.6 1.5-45.2-.7l2.7 15.3z'
];

const interpolators = [];
for (let i = 0; i < paths.length; i++) {
  interpolators.push(
    interpolate(paths[i], paths[i + 1] || paths[0], { maxSegmentLength: 0.1 })
  );
}

const SVGMorph = () => {
  const [pathInterpolators] = useState(interpolators);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex(index + 1 >= pathInterpolators.length ? 0 : index + 1);
  };

  const interpolator = pathInterpolators[index];
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Spring reset native from={{ t: 0 }} to={{ t: 1 }} onRest={goNext}>
        {({ t }) => (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1352 1034">
            <a.path
              fill="none"
              stroke="#4d4f51"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              strokeWidth="1.5"
              d={t.interpolate(interpolator)}
              clipRule="evenodd"
            ></a.path>
          </svg>
        )}
      </Spring>
    </div>
  );
};

export default SVGMorph;
