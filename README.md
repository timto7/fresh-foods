# Fresh Foods

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the application in development mode.<br>

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the dist folder.

### `npm run lint`

Checks the application for errors.

### `npm run preview`

Starts a local web server that serves the built solution from the dist folder.

### `npm run test`

Runs the Button tests.

## Project Overview

This application sources external food product data and displays the products as cards. The cards have image placeholders to make the product listing more indicative of a genuine shopping application. Products can added/removed from the basket, and additional information can be viewed by clicking on the item title or image placeholder thumbnail. The basket lists all selected items and tallies the total price.<br>

The application uses Axios as the HTTP client and is combined with React Query to perform the request, cache the response and manage loading, error and data state. The useProducts hook provides a convenient and reusable abstraction for elements that require access to the product state.<br>

The Product List, Product Detail and the Basket are all implemented as pages managed by React Router. The Header component and its associated components are within the routing folder alongside the routing configuration and the master Layout component.<br>

Given the project scope, Zustand has been selected as the state management solution as it provides all the required functionality with minimal boilerplate code and configuration. The basket store is easily updatable via the exported reducers, and selectors reduce component renders when adding or removing items from the basket. Zustand middleware facilitates basket persistence in local storage to maintain the state between page refreshes.<br>

Styling the components is done using styled-components. A ThemeContext is used to propagate styles and manage theme state as both light and dark modes are available. The application is fully responsive.<br>

Unit tests are available for the Button component (within Button.spec.tsx). The libraries used for testing are Jest and React Testing Library.<br>
