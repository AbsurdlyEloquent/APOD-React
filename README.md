This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Astronomy Picture of the Day!
## Now in React

This is a refactor of my previous project, now entirely in React.

It consists of four React Components within the `App` class.

## [App.js](https://github.com/AbsurdlyEloquent/apod-react/blob/master/src/App.js)
This component contains the basic layout of the document.

The State consists of three `key: value`'s

  - `Data` - An empty array that will contain the data from the fetch request
  - `modalProps` - An object 

When the `componentDidMount()`,
