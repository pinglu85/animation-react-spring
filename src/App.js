import React from 'react';
import Rent from './Rent/Rent';
import Capital from './Capital/Capital';
import Invest from './Invest/Invest';
import Numbers from './Invest/Numbers';
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
    </div>
  );
}

export default App;
