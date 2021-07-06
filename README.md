# Smart Brain

A fun React app that allows users to sign up and begin detecting faces in the images they provide. Smart Brain will track the number of entries from a user and store their credentials in a database. AI face detection is provided and processed by [Clarifai API](https://www.clarifai.com/models/ai-face-detection).

<br />

![Screenshot](./screenshot.png)

<br />

## This project uses the following front-end packages and libraries:

- [React.js](https://reactjs.org/) (UI library allowing the creation of resusable components while providing fast DOM manipulation)
- [Redux](https://redux.js.org/) (state manager that holds all state in a centralised store)
- [Redux-Saga](https://redux-saga.js.org/) (to handle asynchronous actions and and side effects)
- [Redux Persist](https://www.npmjs.com/package/redux-persist) (to implement user sessions by storing user reducer state in local storage)
- [Reselect](https://github.com/reduxjs/reselect) (to create memoized state selectors)
- [React Router DOM](https://reactrouter.com/) (to simplify page routing and page redirects)
- [Particles.js](https://vincentgarreau.com/particles.js/) (for background animations)
- [Tachyons](https://tachyons.io/) (for pre-made CSS class styles)

<br />

## This project uses the following back-end packages, libraries, and technologies:

- [Node.js](https://nodejs.org/en/) (JavaScript runtime)
- [Express](https://expressjs.com/) (back-end web framework making it easier to handle HTTP requests)
- [PostGreSQL](https://www.postgresql.org/) (SQL database for storing user data)
- [Knex.js](http://knexjs.org/) (SQL query builder for creating asynchronous database queries)
- [Clarifai](https://www.clarifai.com/) (for their AI face detection)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (to hash passwords and improve user security)
- [dotenv](https://www.npmjs.com/package/dotenv) (to hide environment variables and secret keys)
- [compression](https://www.npmjs.com/package/compression) (to reduce the size of files sent to the client and therefore imporve load times)
