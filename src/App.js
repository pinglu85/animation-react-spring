import React from 'react';
import Rent from './Rent/Rent';
import Capital from './Capital/Capital';
import Invest from './Invest/Invest';
import Features from './Features/Features';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.App}>
      <section className={appStyles.Section1}>
        <div className={appStyles.AnimationWrapper}>
          <Rent />
        </div>
        <div className={appStyles.AnimationWrapper}>
          <Capital />
        </div>
        <div className={appStyles.AnimationWrapper}>
          <Invest />
        </div>
      </section>
      <section>
        <Features />
      </section>
    </div>
  );
}

export default App;
