# create-react-app-stylus

Enhances [create-react-app](https://github.com/facebookincubator/create-react-app) to include support for [stylus](http://stylus-lang.com/).

### Installation

```
npm install create-react-app-stylus --save-dev
```

### Usage

Replace your `start` and `build` scripts in your `package.json`.

```
"scripts": {
  "start": "react-scripts-with-stylus start path/to/main.styl",
  "build": "react-scripts-with-stylus build path/to/main.styl",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
},
```

This is configured to work off of one `.styl` file that will use `@import` to import all the rest of your css. As an example, if you have `src/styles/app.styl`, your start command will be `react-scripts-with-stylus start src/styles/app.styl`. Then in your `index.js` you will need to `import './styles/app.css'` to have `create-react-app` pull in your css. Make sure to add `*.css` to your `.gitignore` as it is now a build artifact.
