## Introduction

This is complete boilerplate for every frontend project, that created by [Create React App](https://github.com/facebook/create-react-app) in combination with other 3rd library to manage the state and side effect. These are list of 3rd library used in this project
- [Redux](https://redux.js.org/): state management library.
- [React Redux](https://github.com/reduxjs/react-redux): the libray responsible for bindings react and redux.
- [Redux Dev Tool Extenstion](https://github.com/zalmoxisus/redux-devtools-extension): the developer tools.
- [Saga](https://redux-saga.js.org/): is a library that aims to make application side effects.
- [React Router](https://reactrouter.com/): declarative routing library.
- [Connected React Router](https://github.com/supasate/connected-react-router): Simple bindings library to keep react-router and redux in sync.

## List of avaiable command in this project
In the project directory, you can run:

`npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run storybook`

That will run the storybook for you to start UI developement.


## Code standard
- **Editor config**
  
  This project intend to be used vscode as a prefer code editor so in the repository it contains the **.editorconfig** file. That defined the common setup for the code editor on every machine. So please do not change or modify this file (just in case you really need to update it).
- **Code format**
  
  This project have setup the [prettier](https://prettier.io/) in combination with [eslint](https://eslint.org/) to ensure the code to be consistently on every commit. The code formater will be run automatically everytime developer commit the change to the repository.

## Code quality
- **UI test**
  
  This project have setup the storybook for you to develop the new UI component. The storybook will help you render every single component and interative with it in just someline of code. So that you will easy to create the look and feel of the new UI component and test it before use. Pls note that for every new UI component that intent to be used as the common UI should create a storybook and docs for it.

- **Unit test**
  
  This project is using [React Testing Library](https://testing-library.com/) as [Jest](https://jestjs.io/) as test runner. We should write the test like the user do. 
  
- **Deployement**
  
  This project have setup the CI/CD with Netlify. So that everytime you push your code to the repository. It will deploy automaticall.

