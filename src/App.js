import React from 'react';
import Rent from './Rent/Rent';
import Capital from './Capital/Capital';
import Invest from './Invest/Invest';
import Magnifier from './Experiment/Magnifier';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.App}>
      <div className={appStyles.AnimationWrapper}>
        <p>Rent 1</p>
        <Rent />
      </div>
      <div className={appStyles.AnimationWrapper}>
        <p>Capital 1</p>
        <Capital />
      </div>
      <div className={appStyles.AnimationWrapper}>
        <p>Invest</p>
        <Invest />
      </div>
      <div className={appStyles.AnimationWrapper}>
        <p>Test</p>
        <Magnifier />
      </div>
    </div>
  );
}

export default App;
