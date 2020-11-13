# NEW BRASTLEWARK GNOME BROWSER

<img alt="Magic mashroom"
    src="https://github.com/kimbali/new-brastlewark/blob/main/src/images/magic-mashroom-blue.png?raw=true"
    height="100px" />
<img alt="Magic mashroom"
    src="https://github.com/kimbali/new-brastlewark/blob/main/src/images/magic-mashroom-red.png?raw=true"
    height="100px" />
<img alt="Magic mashroom"
    src="https://github.com/kimbali/new-brastlewark/blob/main/src/images/magic-mashroom-blue.png?raw=true"
    height="100px" />


## How was done

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

2. Has 3 pages with its corresponging URL:

   - Landing (Welcoming with an input to enter a name)
   - Browser (Filter gnomes by age, size and trade)
   - GnomeDetail (:neckbeard:)
   - 404 (Redirected here when URL params have no coincidence)

3. The homemade hook "useInitFetch" sotres fetched data into sessionStorage. Same hapens with the hero name. (I thought that it was no enough data to use Redux, but I know how to use it! :grimacing:).

4. Global folder contains global vars and methods that are reused around all app.

5. All pages are sorounded by "Layout" component, which contains the Header and the Dialog Helper, another component made by a Fairy whom guides the user through the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
Uses JEST && @testing-library/react

See documentation here -> [JEST](https://jestjs.io/)
See documentation here -> [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

## Included libraries

### Wouter

wouter is a tiny router for modern React and Preact apps that relies on Hooks.
[wouter documentation](https://www.npmjs.com/package/wouter)

### React Icons

Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
[react icons](https://react-icons.github.io/react-icons/)

