# Koala - Web Engineering Challenge

### Implementation
The way this project was approached was to create a basic countdown timer that renders a theme that gets fetched from the api or a default one as a fallback.  Once the application receives a theme, it renders the timer.  From there, a user can modify the value of the timer and initiate it.  After the timer initiates, it will countdown to zero in 1 second increments unless paused or restarted.  Once it finishes, a browser alert will notify the user that the timer is finished and the user can re-initiate it using the same value as before or a different one if changed.

### Depedencies Used
- React.js
- Typescript for making stronger typed React components
- Moment.js to create complex date objects passed from input
- React-Testing-Library for making unit tests

### Considerations
- Passed defaultTheme as a defaultProp to make unit testing easier.  This is due to the component fetching the theme after mount, which is why its easier to test with a default theme as it reduces some of the async complexities when waiting on the theme to load (Loading the default theme from the project is faster than the provided one over the network)
- Kept the countdown fairly straightforward without too many "bells and whistles" but focused more so on stability on countdown itself, to make sure it runs properly and that a user can manipulate it when needed.  
- Unit tests are also straightforward.  Wanted to test the bare bones of the functionality while at the same time, meet a realistic set of code coverage.  I simply wanted to demonstrate how an app like this can be tested.  Note that I used the testing kit provided from this repo.

### Installation

1. Install [`Yarn`](https://yarnpkg.com/en/) and [`TypeScript`](https://www.typescriptlang.org)

2. Install the project dependencies:

    ```bash
    yarn install
    ```

3. Start the development server:

    ```bash
    yarn start
    ```

4. Once it's done compiling, view the site at: [`http://localhost:3000/`](http://localhost:3000/).

5. To test the application run the following: 

    ```bash
    yarn test
    ```

6. To run test coverage, run the following:

    ```bash
    yarn test -- --coverage
    ```

7. To build the application, perform the following:

    ```bash
    yarn build
    yarn global add serve
    serve -s build
    ```