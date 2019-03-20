I spent roughly 2 days on this, I am tempted to keep going, but I think you will get a good idea of my skill level based on what I have done in that time.

##What made you choose the approach you were taking when architecting your app?
I found the combination of React and Redux to be very powerful, React can get very complicated quickly when managing its own state. Redux helps to define the flow to be more one directional, and removes most of the state from react. This means you can have stateless quick rendering React components which helps efficiency. The technical brief for this position also asked for these technologies so i though for that reason alone its a good idea to use them.

##Explain your design decisions: the layout, the styling options etc. What was your thought process?
I decided to use a mobile first simple layout. I am not a designer and this is not where my strengths are. I made the main navigation move depending on the platform. When people hold their phone the buttons at the bottom are easiest to reach so this makes is easier to use. When on desktop it reverts to the usual top nav position. I used a plugin for the date picker to make it easier to enter on mobile. I tested it on many mobile devices and tried to avoid scrolling where possible.

##Did you encounter any problems or challenges? If so, how did you resolve them?
I had a bit of trouble setting up the test suite. I usually do things the hard way and set up webpack myself as this gives more control. I initially was just going to use jest and enzyme for this but had a nightmare getting it working with webpack 4, the testing suite is built into create-react-app so to save time I switch build platform. This got it all working but I lost time, so could only add basic render testing.

I half implemented the bonus feature of historic data, I was going to use a charting tool and display the data graphically, but I don't want to spend more than 2 days on it. I was passing the currency parameter, and picking it up from the Currency component, I started the action and reducer also.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
