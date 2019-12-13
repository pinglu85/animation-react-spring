import React from 'react';
import { animated as a, Keyframes } from 'react-spring/renderprops';
import * as easings from 'd3-ease';
import capitalStyles from './Capital.module.css';

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, dashOffset: 100 },
      to: { radians: 2 * Math.PI, dashOffset: 0 }
    });
  }
});

const Capital = () => {
  return (
    <div className={capitalStyles.Capital}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1352 1034">
        <path
          d="M498.3 281l-20.8-15-21.1 17.4-42.6-19.8-40.9 21L293 260l-79.8 24.6-40.9-21-42.3 19.8-21.4-17.4-20.8 15c-4.6 15.9-7.1 33.2-7 52 0 6.4.4 12.6 1.2 18.7l19.3-16.1 29.9 15.3 37.3-16.5 49.5 19.9 75.2-21 75.4 21 49.5-19.9 37.3 16.5 29.9-15.3 18.9 16.1c.8-6.1 1.2-12.3 1.3-18.7.3-18.8-2.1-36.1-6.6-52h-.6z"
          className={capitalStyles.st0}
        ></path>
        <path
          d="M372.4 549.5c46.7-62.8 131.4-117.9 132.8-216.4 1.9-124.7-113.2-185-183.8-192.1-22.5-2.3-35.4-2.3-56.8 0-70.6 7.4-184.2 67.3-183.8 192 .3 96.3 86.2 153.6 132.8 216.4h158.8z"
          className={capitalStyles.st1}
        ></path>
        <path
          d="M213.6 549.5l17.6 110.4m-3 85.8v43.1h129.7V681.1H228.2v50.4m-7.8-71.7h145.2v21.3H220.4zM275.2 140c-39.2 20.4-76.9 103.9-56.3 220.1 11.4 64.3 43.7 141 49.5 189.4m43-409.5c39.2 20.4 76.9 103.9 56.3 220.1-11.4 64.3-43.7 141-49.5 189.4"
          className={capitalStyles.st2}
        ></path>
        <path
          d="M229.6 148.1c-106.1 41.2-108.1 162-97.4 207.9 11.1 47.7 29.2 81.7 56.6 120.3 15.3 21.6 31.2 44.8 44.9 73.2m123.1-401.4c106.1 41.2 108.1 162 97.4 207.9-11.1 47.7-29.2 81.7-56.6 120.3-15.3 21.6-31.2 44.8-44.9 73.2"
          className={capitalStyles.st2}
        ></path>
        <path
          d="M372.4 549.5c-10 13-18.4 26.9-24 42.6H237.6c-5.6-15.7-14-29.6-24-42.6h158.8z"
          className={capitalStyles.st0}
        ></path>
        <ellipse
          cx="453.3"
          cy="746.3"
          className={capitalStyles.st1}
          rx="21.2"
          ry="61.8"
          transform="rotate(-47.687 453.32 746.33)"
        ></ellipse>
        <ellipse
          cx="432.3"
          cy="724.3"
          className={capitalStyles.st3}
          rx="4.9"
          ry="14.3"
          transform="rotate(-47.687 432.318 724.328)"
        ></ellipse>
        <ellipse
          cx="605"
          cy="866.8"
          className={capitalStyles.st1}
          rx="10.2"
          ry="26.9"
          transform="rotate(-18.006 604.965 866.82)"
        ></ellipse>
        <ellipse
          cx="602.2"
          cy="853.5"
          className={capitalStyles.st4}
          rx="1.4"
          ry="3.5"
          transform="rotate(-16.903 602.268 853.556)"
        ></ellipse>
        <ellipse
          cx="599"
          cy="860"
          className={capitalStyles.st4}
          rx="1.4"
          ry="3.5"
          transform="rotate(-16.903 599.013 860.06)"
        ></ellipse>
        <ellipse
          cx="608.5"
          cy="861.3"
          className={capitalStyles.st4}
          rx="1.4"
          ry="3.5"
          transform="rotate(-16.903 608.573 861.368)"
        ></ellipse>
        <ellipse
          cx="605.7"
          cy="866.1"
          className={capitalStyles.st4}
          rx="1.4"
          ry="3.5"
          transform="rotate(-16.903 605.73 866.177)"
        ></ellipse>
        <ellipse
          cx="609.4"
          cy="878.9"
          className={capitalStyles.st4}
          rx="1.4"
          ry="3.5"
          transform="rotate(-16.903 609.388 879.03)"
        ></ellipse>
        <ellipse
          cx="602.8"
          cy="872.2"
          className={capitalStyles.st4}
          rx="1.4"
          ry="3.5"
          transform="rotate(-16.903 602.852 872.268)"
        ></ellipse>
        <ellipse
          cx="611.8"
          cy="872.9"
          className={capitalStyles.st4}
          rx="1.4"
          ry="3.5"
          transform="rotate(-16.903 611.783 873.004)"
        ></ellipse>
        <path
          d="M335.4 772.9l72.2-68.1c-7.9 8.6 6.2 34.3 31.4 57.2 25.2 22.9 52.1 34.6 59.9 25.9l-61 78.3c-9.8 10.7-40.7-1.5-69-27.3-28.2-25.7-43.2-55.3-33.5-66zm136 51L576.7 849l20-7.8c-5.3 1.7-6 14.6-1.4 28.7 3.1 9.6 7.9 17.3 12.3 20.8l-30.2-26.1L452 848.2l19.4-24.3z"
          className={capitalStyles.st3}
        ></path>
        <path
          d="M489.8 790.7c30.3-46.4 22.4-78.2-4.4-102.6-32-29.2-84.4-24.1-115.5 10.1-16.6 18.2-22.1 39.6-20.8 61.6l-13 12.2c.7-34.1 8.9-57.9 27.9-78.9 34.5-38.1 91.6-43.6 126.1-11.2 34.9 32.8 33.2 66.7 8.8 105.9-1.9 2.3-5.1 3.2-9.1 2.9z"
          className={capitalStyles.st3}
        ></path>
        <g>
          <path
            d="M438.7 581.8c-.9 2.1-2.1 5.1-2.9 7.2-.3 1-2.7 10.1-3.1 10-.4-.2-4-2.6-4-2.6s-2.9 3.6-8.6 5.6c-3.3 1.2-7.4-1.8-8.9-8 0 0-2.5-1.1-7.3 5.3"
            className={capitalStyles.st2}
          ></path>
          <path
            d="M354.6 659.8c17.8-20.2 35.4-30.9 42.5-37l2 2.8c0 5.6-3.1 9.8-6.4 13.1-3.3 3.3-10.4 5.5-13.5 6.7-8.1 3.2-13.9 12-16.7 14.5h-7.9v-.1z"
            className={capitalStyles.st5}
          ></path>
          <path
            d="M369.6 653.1c1.2.9 3.5 2.6 4.3 4.6.8 2.4 2.3 6.7.6 9.5-3.4 5.9-8.1 1.9-8.9 1"
            className={capitalStyles.st1}
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            stroke="#4d4f51"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.5"
            d="M463 664.2c2.1 0 5.6 1.5 8.4 2.1 6.4 1.3 12.8 2.2 14.6 9.3 1.7 6.8-6.9 7.7-11.4 5.4-2.6-1.3-4.3-2.9-6.5-4.4-2.8-1.9-12-5.3-10.4-6.8 2.2-2 3.9-5.6 5.3-5.6z"
            clipRule="evenodd"
          ></path>
          <path
            d="M325 659.8l.9-1.8c11.1-20.8 32.5-59.3 71.4-70 2.7 3.2 9.4 14.1 10.4 21.5 28.6 43.1 54.5 50.5 56.7 52.7.5.5-6.5 8.8-8.1 8.1-3.5-1.4-25.4-3.8-59.1-47.5v-.1c-7.1 6.2-24.7 16.9-42.5 37l-29.7.1z"
            className={capitalStyles.st7}
          ></path>
          <path
            d="M404.5 604.6c1.1 1.7 2.1 3.4 3.2 5m-10.5 13.3c-1.1-1.4-2.2-2.9-3.3-4.4"
            className={capitalStyles.st8}
          ></path>
          <path
            d="M417.2 580.6s2.1.2 3.2.3c4.4.3 14.7-1.9 17-4.2 1.5-1.5 1.6 6.3 1.6 6.3s7.4-13-1.4-20.8c-9.4-8.3-21.5.9-29 6.5-5 3.8-9.3 2.5-14.9 3.2-2.9.4-6.3 1.7-8.1 4.3-1.1 1.6-1.6 4.1-2.6 5.3-.8 1-1.6.9-3.3 2-1.9 1.2-5.3 4.3-4.1 9.2 2.3 9.3 12.8 17.7 22.3 11.4 4-2.7 5.9-10.9 7.7-13.7.7-1.1 1.8-2.3 2.8-2.8.9-.4 2.4-.6 3.2-1 1.9-1 5.6-3.8 5.6-6z"
            className={capitalStyles.st5}
          ></path>
          <path
            d="M372.4 548.8l-17.6 110.4"
            className={capitalStyles.st2}
          ></path>
        </g>
        <g>
          <path
            d="M716.6 370.1h286.8v304.6H716.6z"
            className={capitalStyles.st1}
          ></path>
          <path
            d="M754.8 410.7h56v195h-56zm254.4-69.8v-24.2h-7.3"
            className={capitalStyles.st1}
          ></path>
          <path
            d="M1016.9 366.2c.3.9.1 1.9-.5 2.7-.6.8-1.5 1.2-2.4 1.2H706.7c-1.1 0-2.1-.5-2.8-1.4s-.9-2-.5-3.1c3.8-12.5 14.3-47.4 17-56.4.4-1.3 1.5-2.1 2.9-2.1h273.6c1.3 0 2.5.9 2.9 2.1 2.6 9.2 13.5 45.1 17.1 57z"
            className={capitalStyles.st3}
          ></path>
          <path d="M754.8 508.2h56" className={capitalStyles.st2}></path>
        </g>
        <g>
          <path
            d="M634.9 775.5s-3 17.1 18.3 48.8c22.7 33.8 63.5 58.1 63.5 58.1 2-2.7 1-45.8-24.7-74-24.9-27.2-57.1-32.9-57.1-32.9zm164.3-90.8C778.1 778.1 725.4 800 709 923.9m97.7-235.2c-6.9 28.6-16.2 50.4-26.2 70.2m-15.2 28.5c-20.9 38.3-41.6 78.4-49.1 160"
            className={capitalStyles.st1}
          ></path>
          <path
            d="M761.5 786.7s43.9-79.9 136.1-113c108.4-38.9 170.7-8.5 170.7-8.5s-13 58.7-131.2 112.8c-67.8 31.1-175.6 8.7-175.6 8.7z"
            className={capitalStyles.st1}
          ></path>
          <path
            d="M1107.1 432c-1.1 3.8-3.4 17.5 5 19.5 8.8 2.2 12.7-13.8 12.9-15.4-.3 1.3-4.6 1.5-9.5.4-5-1.2-8.7-3.2-8.4-4.5z"
            className={capitalStyles.st9}
          ></path>
          <path
            d="M747.4 908.6c7.9-30.8 21.3-72.8 69-139.2 34.7-48.3 84.5-82.6 134.5-117.2 83-57.5 119.7-73.3 157.7-202.6.9.9 2 1.6 3.4 1.9 1.7.4 3.2.2 4.5-.5-40 142.2-99.7 163.6-155.4 202.9-49.7 35.1-99.8 68-134.5 116.2-45.5 63.2-62.6 110.6-71 140.1"
            className={capitalStyles.st10}
          ></path>
          <path
            fill="#d4f0c6"
            fillRule="evenodd"
            stroke="#4d4f51"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.5"
            d="M755.7 910.2c-1.7 6.1-3.1 11.4-4.3 16"
            clipRule="evenodd"
          ></path>
          <path
            d="M1115.7 454c-1.3.7-3 .9-4.6.5-1.4-.3-2.4-1-3.3-1.9l.9-3c.9.9 2 1.6 3.4 1.9 1.7.4 3.2.2 4.5-.5l-.9 3z"
            className={capitalStyles.st3}
          ></path>
          <path
            d="M1100.5 376.8c11.4 8 11.6 42.5 7.6 55.8m38.5-44.7c-12.5 11-17.7 29.8-22.5 49.1m-48.4-70c-3.3.2-37.2 1.3-20.4-45.8 7.9-22 24.7-23 33.1-20.8 14.6 3.9 23.8 18.1 23.8 18.1s-26.5-42.6 24.5-40.1c69.8 3.3 25.8 49.3 25.8 49.3s34.4-26.3 50.1-5.5c5.5 7.3 7.1 15.2 7 22.6-.5 31.9-16.5 29.3-24.5 28"
            className={capitalStyles.st1}
          ></path>
          <path
            d="M1119.9 340.7c1.1-4.3 8.8-6.3 17.3-4.5 8.3 1.8 14.3 6.7 13.8 11-3.3 1.3-6.6 2.6-9.6 3.3-6.5 1.6-9.3-.6-15-5.7-1.5-1.3-3.8-2.8-6.5-4.1z"
            className={capitalStyles.st3}
          ></path>
          <path
            d="M1133.9 362.8c5.4 1.7.3 16.4 6.8 20.4 7.9 4.9 19.3 6.6 27.8 4.7 8.1-1.8 20.4-7 25.5-13.9 2.1-2.9 1-10.1-3.2-19.8-1.6-3.6-6.5-15-30.5-10.1-2.3.5-4.7 1.3-7.1 2.2-4 1.5-8.2 3.3-11.8 4.2-6.5 1.6-9.3-.6-15-5.7-3.6-3.2-11.1-6.7-17.2-8.3-6.9-1.8-14.9-4.1-24.4-2.6-10.6 1.7-18.2 19.5-17.2 25.9 1 6.5 16.1 9.3 23.1 12.9 31.5 16.3 39-11.2 43.2-9.9zm-18.3-41.2c4 3.8 6.6 9.1 8.4 15m16.6-24.7c-2 7.8-2.4 18.9-2.6 24.5m-10-23.5c2.4 5.8 3.8 16 3 22.5m23.2-18.5c-3.2 3.2-9.7 9.5-10.7 21.4m4.8 3.2c2-2.4 6.1-7.1 10.9-8.6"
            className={capitalStyles.st1}
          ></path>
          <path
            d="M1030.6 718.5l1.2-.4c17.5 0 26.8 5.1 31.9 8.1-74.3 126.5-245.7 80.5-258 77.7 1.6-2.9 4.9-8.6 10.4-11C852 795.7 900 795 937 778.1c44.4-20.3 74-41.3 93.6-59.6zm-27.2-64.5v20.7c34.8-10.9 54.3-9.5 64.8-9.5 0 0-22.5-11.1-64.8-11.2zm-.5-49c-6.4-11.1-17.4-35.6-13.9-77.1 1.4-16.5 7.2-31.1 14-43.1l-.1 120.2z"
            className={capitalStyles.st3}
          ></path>
          <path
            d="M1003 484.7c11.7-20.7 26.5-33.4 26.5-33.4s22.7 33.9 16.2 83.6c-6.2 47.7-38.5 77.1-38.5 77.1s-1.5-2.4-4.2-7.1V484.7zm-247.4 190c.4 15-1.1 23.5-1.1 23.5S641.3 644 593.9 571.6c-51-78-46.1-151.2-46.1-151.2s105.4 12.1 168.4 122.1v132.2h39.4z"
            className={capitalStyles.st1}
          ></path>
          <path
            d="M702.8 521.4c4.6 6.6 9.1 13.6 13.4 21.1v132.2h39.4c.4 15-1.1 23.5-1.1 23.5s-16.8-8.1-40.2-22.1c.7-31.9-10.6-146.4-11.5-154.7z"
            className={capitalStyles.st3}
          ></path>
        </g>
        <g>
          <path
            d="M240.4 745.7c-26.9.4-160.3 0-160.3 0s-3 .3-2.2-3.8c1.8-10.3 16.7-38.8 41.7-37.1 18.6 1.3 26.3 23.7 42.7 26.2 15.4 2.3 23.2-6 39-6.2 17.3-.2 33.7 8 40.1 18.6 1 1.7-.1 2.3-1 2.3zm133.4 180.6c-26.3.4-156.5 0-156.5 0s-2.9.3-2.2-3.7c1.8-9.9 19.7-37.9 44.2-36.2 18.2 1.3 24 22.6 39.2 25 15 2.4 20.8-4.7 36.3-4.8 16.9-.2 33.7 7.4 40 17.6.9 1.4-.1 2.1-1 2.1zm906.1-50.8c-27.6.4-164.3 0-164.3 0s-3 .3-2.3-3.8c1.9-10.3 15.2-34.8 41-34.4 25.4.4 30.6 21.1 47.4 23.6 15.8 2.3 20.8-6.2 37-6.4 17.7-.2 35.6 8.1 42.2 18.7 1 1.6-.1 2.3-1 2.3z"
            className={capitalStyles.st1}
          ></path>
        </g>
        <Container
          reset
          native
          config={{ duration: 2300, easing: easings.easeLinear }}
        >
          {({ radians }) => (
            <g>
              <a.path
                style={{
                  willChange: 'transform',
                  transformOrigin: '1030.8px 607.8px',
                  transform: radians.interpolate(
                    r => `rotate(${6 * Math.sin(r + (1 * 2 * Math.PI) / 5)}deg)`
                  )
                }}
                d="M1030.8 605s32.8-44.5 84.9-68.8c28.1-13.2 63.3-24.2 97.5-10.3.3.1-13.5 36.5-62.8 59.6-71 33.2-119.6 19.5-119.6 19.5z"
                className={capitalStyles.st10}
                id="leaf1"
              ></a.path>
              <a.path
                style={{
                  willChange: 'transform',
                  transformOrigin: '782.6px 734.2px',
                  transform: radians.interpolate(
                    r =>
                      `rotate(${7 * Math.sin(r + (2.5 * 2 * Math.PI) / 5)}deg)`
                  )
                }}
                d="M753.1 628.3s-6.2 13.7.5 44.5c7.2 32.8 29 61.3 29 61.3 2-1.8 11.9-38.2 1.3-67-10.3-27.6-30.8-38.8-30.8-38.8z"
                className={capitalStyles.st7}
                id="leaf2"
              ></a.path>
              <a.path
                style={{
                  willChange: 'transform',
                  transformOrigin: '720.6px 914.5px',
                  transform: radians.interpolate(
                    r => `rotate(${6 * Math.sin(r + (3 * 2 * Math.PI) / 5)}deg)`
                  )
                }}
                d="M720.6 914.5s25-40.7 57.6-58.9c36.7-20.5 60.4-13.1 60.4-13.1s-10.4 28.4-34.5 45.9c-40.1 29-83.5 26.1-83.5 26.1z"
                className={capitalStyles.st12}
                id="leaf3"
              ></a.path>
              <a.g
                style={{
                  willChange: 'transform',
                  transformOrigin: '700.4px 316.7px',
                  transform: radians.interpolate(
                    r =>
                      `rotate(${12 * Math.sin(r + (1.5 * 2 * Math.PI) / 5)}deg) 
                      translate3d(${5 *
                        Math.sin(r + (2 * Math.PI) / 5)}px, 0, 0)`
                  )
                }}
                id="leaf4"
              >
                <path
                  d="M693.2 295.3c2.6 5.2 5.7 16 7.2 21.4"
                  className={capitalStyles.st1}
                ></path>
                <path
                  d="M659.7 225.2s-3.6 13.7 6.2 35.8c14 31.5 27.3 34.3 27.3 34.3-.8-11-3.2-25.9-15-49-5.5-10.6-18.5-21.1-18.5-21.1z"
                  className={capitalStyles.st12}
                ></path>
                <path
                  d="M712.4 266.4c-7.1 17.4-19.3 28.9-19.3 28.9s.6-21.3 9.5-42.6c3.9-9.3 11.4-15.2 11.4-15.2s5.1 12.6-1.6 28.9z"
                  className={capitalStyles.st9}
                ></path>
                <path
                  d="M693.2 295.3c-.6-8.3-2.6-21.3-8.7-37.1-2.3-13.3-.3-20.7-.3-20.7s10.4 11.2 11.6 27c.3 3.6.2 7.6-.2 11.7-2.2 11.1-2.4 19.1-2.4 19.1z"
                  className={capitalStyles.st1}
                ></path>
              </a.g>
            </g>
          )}
        </Container>
        <Container
          reset
          native
          config={{ duration: 1900, easing: easings.easeLinear }}
        >
          {({ dashOffset }) => (
            <a.g
              id="water"
              fill="none"
              stroke="#4d4f51"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              strokeWidth="1.5"
              strokeDashoffset={dashOffset}
            >
              <path
                strokeDasharray="4.32,8.63,0,0"
                d="M619.6 854.2c25 6.7 74.9 20.2 88.7 96.2"
              ></path>
              <path
                strokeDasharray="4.84,9.68,0,0"
                d="M624.6 864.2s61.8 11.6 73.3 84.2"
              ></path>
              <path
                strokeDasharray="5.09,10.18,0,0"
                d="M627.1 873.2c19 8.2 57 24.5 63.2 93.6"
              ></path>
              <path
                strokeDasharray="5.4,10.8,0,0"
                d="M627.1 882.3c14.7 7.4 44.2 22.2 48.9 74.1"
              ></path>
            </a.g>
          )}
        </Container>
      </svg>
    </div>
  );
};

export default Capital;
