import React from 'react';

import usImage from '../static/images/bsw.jpg';

import '../static/scss/splitPageContent.scss';

const Home = (): JSX.Element => {
  const imageDimension = 150;
  return <>
    <img src={usImage} width={imageDimension} height={imageDimension} />
    <div>
      <h2>Home Page</h2>
      <p>
        Hi there and welcome to my hobby and job.  I plan to use this as my test place for new ideas
        I have and would like to share with peole like yourself. The picture is of me with my wife
        just incase your wondering :).
      </p>
      <p>
        The login section of the site is for just family members and close friends to view private
        pictures and social items which is only available on request to me <a
          href="mailto:whiting.barry@googlemail.com">whiting.barry@googlemail.com</a>.
      </p>
      <p>
        Take a look at the about page if you would like to know a bit more about me professionaly
        and the things I hope to move onto next in my career.
      </p>
      <p>
        The gallery is to share photographs from my life.  If your a visiting guest you will be able
        to view non-personal images such as trips I&#39;ve made to Goodwood Festival of Speed etc,
        if your a family member or friend you can see everything including images family shots.
      </p>
      <p>
        The games section are just some fun web based playable games such as the old Atari
        classic breakout.  These were built to gain better front end skills and make sure
        I&#39;m still upto date with the growing world of web development.  If you have any ideas of
        games you think would be good on the web please let me know and I&#39;ll see what I can
        achieve for you.
      </p>
    </div>
  </>
  ;
};

export default Home;
