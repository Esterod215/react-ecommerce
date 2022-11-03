# Comfy Sloth React Project

This is an e-commerce project where you can browse different home decor products. You can sort and filter through products, add them to your cart and checkout (Test Card Provided). You can only checkout once you login but you can still browse and add products when logged out.

## Technologies Used

The site's frontend is built using React 18 and utilize some of the latest react features like hooks. I manage state with a combination of the react context API and useReducer hook which allowed me to easily use various pieces of state throughout my application to add functionality.

I used Auth0 to handle login functionality and I am using the test version of Stripe to handle payments (So don't worry you are not actually buying anything lol). I used Netlify to host my site and Netlify functions as my mock backend to communicate with Stripe API for security reasons.

You can find the full site [here](https://comfy-estevan.netlify.app/)

## Available Scripts

In the project directory, you can run (Keep in mind, you will need to have your own Auth0 and Stripe accounts with developer keys to get the full experience of the app):

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
