import React from "react";

export const About = props => {
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        I spent roughly 2 days on this, I am tempted to keep going, but I think
        you will get a good idea of my skill level based on what I have done in
        that time.
      </p>
      <h2>
        What made you choose the approach you were taking when architecting your
        app?
      </h2>
      <p>
        I found the combination of React and Redux to be very powerful, React
        can get very complicated quickly when managing its own state. Redux
        helps to define the flow to be more one directional, and removes most of
        the state from react. This means you can have stateless quick rendering
        React components which helps efficiency. The technical brief for this
        position also asked for these technologies so i though for that reason
        alone its a good idea to use them.
      </p>
      <h2>
        Explain your design decisions: the layout, the styling options etc. What
        was your thought process?
      </h2>
      <p>
        I decided to use a mobile first simple layout. I am not a designer and
        this is not where my strengths are. I made the main navigation move
        depending on the platform. When people hold their phone the buttons at
        the bottom are easiest to reach so this makes is easier to use. When on
        desktop it reverts to the usual top nav position. I used a plugin for
        the date picker to make it easier to enter on mobile. I tested it on
        many mobile devices and tried to avoid scrolling where possible.
      </p>
      <h2>
        Did you encounter any problems or challenges? If so, how did you resolve
        them?
      </h2>
      <p>
        I had a bit of trouble setting up the test suite. I usually do things
        the hard way and set up webpack myself as this gives more control. I
        initially was just going to use jest and enzyme for this but had a
        nightmare getting it working with webpack 4, the testing suite is built
        into create-react-app so to save time I switch build platform. This got
        it all working but I lost time, so could only add basic render testing.
      </p>
      <p>
        I half implemented the bonus feature of historic data, I was going to
        use a charting tool and display the data graphically, but I dont want to
        spend more than 2 days on it. I was passing the currency parameter, and
        picking it up from the Currency component, I started the action and
        reducer also.
      </p>
      <p>
        One of the libraries I used for speed for some reason was breaking one
        of the tests. I think it has to do with an incompatible module syntax,
        or possibly a bug with the implementation of create-react-app. In the
        real world I would have removed these components, but I didn't feel it
        was worth investigating this for this demo.
      </p>
    </div>
  );
};
