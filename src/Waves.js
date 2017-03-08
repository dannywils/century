import React from 'react';
import './Waves.scss';

const Waves = ({ value = 1 }) => (
  <div
    class="waves"
    style={{
      transform: `scale(1, ${value})`
    }}
  >
    <div class="wave wave--back">
      <div class="water">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 350 32"
        >
          <title>wave2</title>
          <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
        </svg>
      </div>
      {' '}
      <div class="water">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 350 32"
        >
          <title>wave2</title>
          <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
        </svg>
      </div>
    </div>
    {' '}
    <div class="wave wave--front">
      <div class="water">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 350 32"
        >
          <title>wave2</title>
          <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
        </svg>
      </div>
      {' '}
      <div class="water">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 350 32"
        >
          <title>wave2</title>
          <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
        </svg>
      </div>
    </div>
  </div>
);

export default Waves;
