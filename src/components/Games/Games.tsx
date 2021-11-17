import React from 'react';

import games from '../static/images/games.jpg';

import '../static/scss/splitPageContent.scss';

const Games = (): JSX.Element => {
  const imageWidth = 150;
  const imageHeight = 113;
  return <>
    <img src={games} width={imageWidth} height={imageHeight} />
    <div>
      <h2>Games</h2>
    </div>
  </>;
};

export default Games;
