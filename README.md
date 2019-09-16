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

### `npm run lint`

Runs Eslint to the root folder and fix all the issues that can be handled automatically.

## Linter

This project is extending the [Airbnb Style Guide](https://github.com/airbnb/javascript) eslint rules, and applying custom rules to improve code quality.

Any custom rules needs to be added to the section below

### Custom rules

- [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) - allows utilization of JSX inside of a .js file;

- [global-require](https://eslint.org/docs/rules/global-require) - disable global require, so we could use global variable as `document` without having to use `global.document`;

## Folder structure

This folder structure is a mix of patterns but it takes some reference from entando-pwa project

- ./src
  - ./assets `--> place to store our assets like images, fonts, custom icons, etc.`
    - ./imgs
  - ./components `--> All components and containers`
    - ./App `--> example of component that could have container`
      - App.js `--> keep the same name as component folder so we can find it easily when doing a file search`
      - App.test.js `--> the idea is keep the test files together with the source, to make our life easier`
      - AppContainer.js `--> container for the App component`
      - App.css or styles.js `--> styles file that could be either .css, .sass, or even JSS`
      - index.js `--> default file to handle import`
    - ./common `--> folder to put common components`
      - ./ComponentExample
        - ComponentExample.js
        - ComponentExample.test.js
        - index.js
  - ./services `--> api calls, auth services, i18n`
    - ./api
    - ./auth
    - ./i18n
  - ./state `--> all logic behind the application organized by feature`
    - ./feature-example `--> folders organized by feature`
      - feature-example.actions.js
      - feature-example.reducer.js
      - feature-example.selectors.js
      - feature-example.types.js
    - store.js `--> configure redux store`
  - index.js `--> entry point`
