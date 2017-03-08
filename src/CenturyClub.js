import React from 'react';
import Waves from './Waves';

import './CenturyClub.scss';

const CenturyClub = (
  {
    percent,
    drinks,
    seconds,
    shouldFlash,
    onStart
  }
) => (
  <div class={`wrap ${shouldFlash && 'flash'}`}>
    <Waves value={percent} />
    <div class="content">
      <div class="percent">
        <div class="ticker">{seconds}</div>
        <div class="drinks">Drink #{drinks}</div>
      </div>
      <button
        onClick={onStart}
        style={{
          display: drinks ? 'none' : ''
        }}
      >
        Start
      </button>
    </div>
  </div>
);

export default CenturyClub;
