This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Astronomy Picture of the Day!
## Now in React

This is a refactor of my previous project, now entirely in React.

It consists of four React Components within the `App` class.

## [App.js](https://github.com/AbsurdlyEloquent/apod-react/blob/master/src/App.js)
This component contains the basic layout of the document.

The State consists of three `key: value`'s

  - `Data` - An empty array that will contain the data from the fetch request
  - `modalProps` - An object that passes the proper data to the modal
  - `modalHidden` - defaults to 'hidden' until a modal is activated

When the `componentDidMount()`, a `fetch` is started from the [APOD api](https://apod.nasa.gov/apod/astropix.html) to request 20 objects.

## [Item.js](https://github.com/AbsurdlyEloquent/apod-react/blob/master/src/Item.js)
20 instances of this component are created in `App.render()`, one for each APOD object received.

These are passed an event handler function, the index of the reference object, and the url of the image it represents.

## [Modal.js](https://github.com/AbsurdlyEloquent/apod-react/blob/master/src/Modal.js)
One instance of this is always rendered. By default it is styled `display: none;`

When the setModal handler is called, either by a form or a grid item, it is passed an object containing the title of the APOD post, the high resolution image url and the explanation. It is also passed an event handler method to reset the modal to default values.
