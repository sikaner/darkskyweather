## Description
This is a simple weather reporting application which retrieves data according to zip code.
### `INSTRUCTIONS`
1. Create a .env in the root project folder.
   Copy the contents of the .env.example file and paste them in .env file and replace the PLACEHOLDER value with
   your own google maps api key (can be generated from here for free, https://developers.google.com/maps/documentation/embed/get-api-key)
   Make sure you DO NOT commit the .env file.
2. Run `yarn i` to install all the dependencies, If yarn has not been downloaded prior, it can be downloaded and installed by
   following instructions from here, https://classic.yarnpkg.com/lang/en/docs/install/
3. Running `yarn start` will start the application.
4. Running `yarn cypress` will run the end to end test suite.

### `TODO`
1. Build a jenkins pipeline to run the cypress tests on any commit into `pipeline` branch. The `pipeline` branch is 
   already present in the repository. You can do any number of test commits into `pipeline` branch to test your pipeline.
2. The build and deployment should be auto-trigerred whenever the `pipeline` branch has any new commit.
3. Once run successfully, you can deploy on any cloud provider of your choice. 
4. Once the setup is completed, you can email back with the url generated and a step by step guide detailing
   the implementation.
5. Please make sure to spend not more than 2-3 hours on this.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This will also start the node server to handle the network calls

### `yarn cypress`

Launches the cypress test suites

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


