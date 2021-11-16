import React from 'react';

import passionledbyus from '../static/images/passionledbyus.jpg';

import '../static/scss/splitPageContent.scss';

const About = (): JSX.Element => {
  const imageWidth = 150;
  const imageHeight = 122;
  return <>
    <img src={passionledbyus} width={imageWidth} height={imageHeight} />
    <div>
      <h2>About Me</h2>
      <p>
        I left school at 16 and got an apprentership as a blacksmith welder in London.  This
        meant I worked 4 days a week in my workplace and spent 12 hours once a week in college
        gaining my City &amp; Guilds.  This I did for 5 years until I finished my apprentership
        and changed companies to work freelance on stage and tv sets building things such as the
        <span> </span><a href="https://www.gladiatorstv.com/gladiators/">Gladiators</a> atlasphere balls and building the staircase in
        <span> </span><a href="https://www.andrewlloydwebber.com/">Andrew Loyd Webber&#39;s</a> 13th touring
        set of <a href="https://www.catsthemusical.com/">Cats</a>.
      </p>
      <p>
        Life was pretty good I was building things that millions of people could see at any time
        but then a recession happened in the early 90&#39;s which caused British Steel to be sold
        off.  This caused alot of companies I worked for as a freelance contractor to go bust
        because they could no longer get the steel in at a reasonable price.  I knew I had to find
        something else to give me the same enjoyment.
      </p>
      <p>
        At this time I meet my wife.  With her help I found a solution by going back to school to
        take some courses on web development.  I enjoyed the studying and learning a whole new set
        of skills to use.  I carried on studying until 1999 and decided that it was time to see if I
        could make it in the web development arena as a front end developer.
      </p>
      <p>
        I managed to get my first position with a company called at the time as
        <span> </span><a href="https://blenheimchalcot.com/ventures/netdecisions/">Netdecisions</a>.
        Here I managed to home my skills as a front end developer working on some big clients such
        as <a href="https://www.alliance-healthcare.co.uk/">Alliance Unichem</a>,
        <span> </span><a href="https://www.theaa.com/">AA</a>, <a href="https://www.sky.com/">Sky</a>
        <span> </span>and <a href="https://www.mcdonalds.com/gb/en-gb.html">McDonald&#39;s</a>. It was my first encounter
        with XML, XSLT as well to work on some of these sites.
      </p>
      <p>
        From <a href="https://blenheimchalcot.com/ventures/netdecisions/">Netdecisions</a> I then moved onto
        a mobile commerce company called <a href="https://www.linkedin.com/company/buongiorno/">Buongiorno</a>.
        With them I was creating new XML schema&#39;s to give the data required to render the mobile
        websites for <a href="https://www.o2.co.uk">O2</a>, <a href="https://www.vodafone.co.uk">Vodafone</a>
        , <a href="https://www.t-mobile.com/">T-Mobile</a> and <a href="https://www.orange.com/en">Orange</a>.
        The parts of these websites I created were for products such as wallpapers, tones and games
        for the appropriate device.
      </p>
      <p>
        By this time I had grown as a front end developer with strong XML and XSLT skills and was
        looking for a new challenge and found this with a company called <a href="http://www.londontown.com">LondonTown.com</a>
        . For this company I re-wrote the entire website from php4 to php5 then moved
        onto re-witing all the XSLT to generate new html to bring it upto date with the new and
        better ways to bring the pages back faster for the customer. It made the code more readable
        also by removing all the unnecessary nested tables.  Whilst doing this I wrote XSLT fop
        templates to generate the pages into PDF format.  This gave the customer the ability to
        print and view the pages in a nicer richer format.
      </p>
      <p>
        I then received a phone call from an agent explaining they had seen my details on <a href="https://www.linkedin.com">linedin</a>
        <span> </span>and would like to pass my details to <a href="https://en.wikipedia.org/wiki/LoveFilm">Lovefilm</a> and would this be ok.
        The next thing I know I was starting work in the new <a href="https://www.amazon.co.uk">Amazon</a> streaming video service
        offices in London. <a href="https://en.wikipedia.org/wiki/LoveFilm">Lovefilm</a> had hired me but by the time I had finished my 3
        month notice period <a href="https://www.amazon.co.uk">Amazon</a> had merged us all together in 1 office.  I actually started by
        working on new changes and improving existing functionality on the U.S <a href="https://www.amazon.com">Amazon.com</a> website.
        I&#39;m still with them today but working on <a href="https://www.amazon.com">Amazon.com</a>,<span> </span><a href="https://www.amazon.co.uk">Amazon.co.uk</a>
        ,<span> </span><a href="https://www.amazon.de">Amazon.de</a>,<span> </span><a href="https://www.amazon.jp">Amazon.jp</a> and the wordwide <a href="https://www.primevideo.com">Prime Video</a>.
      </p>
    </div>
  </>;
};

export default About;
