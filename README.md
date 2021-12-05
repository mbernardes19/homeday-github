# homeday-github2

Demo: https://mbernardes19.github.io/homeday-github/

## Project setup
```
git clone https://github.com/mbernardes19/homeday-github.git
cd homeday-github
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Project structure

### `src/api`
Contains the api service (responsible for making requests to the GitHub API) and functions to gather specific data from it.

### `src/assets`
Contains the images, icons and fonts used in the project.

### `src/components`
Contains reusable components.

### `src/mixins`
Contains mixins that add common functionality to some components.

### `src/pages`
Contains the pages of the website.

### `src/router`
Contains router configuration

### `src/slides`
Contains slides to be used in the `Slider` component. If you want to add more slides to the current slider or add another slider to the project, feel free to store them here.

### `src/store`
Contains the project's store. Right now it's only being used to keep the form data, but can be extended to keep whatever data might be needed throughtout components. It's also a very good idea to keep business logic in it.

### `src/utils`
Contains any kind of code that doesn't fit in the previous categories but is useful to have in a separate file.

### `tests/mocks`
Contains mocks used in more than one test suite

### `tests/unit`
Contains unit tests for the project

## Future Improvements
These are ideas of what could be done to the project in the future to make it more maintainable. They're also placeholders for conversations, so feel free to suggest different ways to do them:

### Move form validations to the store or to a js file
We only have one form in the project, so it's not a big issue to have the field validations inside the component where the form is. But if we end up needing to make more forms, it'll be much useful to have the validation logic stored in a easily accessible place.

### Decouple router from Slider
Currently the `Slider` component is tightly coupled with the router, that means that if we ever have to make a slider that doesn't change page location when navigating between slides, we'd have to make another one. We could edit the slider to have the router as an option or divide the `Slider` component in a regular `Slider` and a `RouterAwareSlider`.

### Standardize colors and spaces
Colors and spaces used in the project don't follow any pattern or style guide, so it's a really good idea to define a small set of colors and spaces options to prevent too much complexity in the styling.

### Make error handling more specific
Our error handling works well on the API requests, but it sends the same error message to whatever HTTP status that isn't 200. Would be good to have more specific error messages.

## FAQ
### How to add a new slide to the slider
- Create a component using the `slide-base` mixin to be the new slide.
- Add the component to the object in the `slides/index.js` file

### How to create a new slider with new slides
- Create a folder inside the `slides` folder with the name of the new slider
- Create components inside it that use the `slide-base` mixin to be the new slides.
- Create a js file that imports the slides and exports an object containing their order.
- Add `Slider` component to some page and pass that js file to its `slides` prop
