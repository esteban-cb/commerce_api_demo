# Coinbase Commerce Demo App

This React application is designed to showcase various interactions with the Coinbase Commerce API. It demonstrates creating charges, listing charges, and retrieving detailed information about charges and events, highlighting the API's functionality in a simulated real-world e-commerce environment.

## Overview

The primary goal of this app is to demonstrate how to get the Coinbase Commerce API working and to display all the data you can interact with via the API. This includes handling cryptocurrency payments, monitoring payment statuses, and managing webhooks.

## Features

- **Create Charges**: Generate new payment requests with fixed prices.
- **List Charges**: View a list of all created charges with their statuses.
- **View Charge Details**: Get detailed information about each charge, including payment status.
- **Simulate Payments**: Experience the payment process with a "Pay with Crypto" button.
- **Event Logging**: Monitor and display events related to the payment lifecycle.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Below are the instructions on how to set up and run the application on your local machine.

### Prerequisites

- Node.js
- npm
- Git

### Installation

1. Clone the repository:
   ```
   git clone https://your-repository-url-here
   cd your-project-folder 

1.  Install the dependencies:

    `npm install`

2.  Set up environment variables:

    -   Create a `.env` file in the root directory of your project.
    -   Add your Coinbase Commerce API key:

        `REACT_APP_COMMERCE_API_KEY=your_coinbase_commerce_api_key_here`

### Running the Application

-   Development mode:

    `npm start`

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000/) to view it in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

-   Production Build:

    `npm run build`

    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.

### Usage

After starting the app, you can interact with the Coinbase Commerce API:

-   Create Charges: Use the UI to enter product details and create a new charge.
-   List Charges: View a list of all created charges.
-   Show Charge Details: Retrieve and display details of a specific charge.

Deployment
----------

Refer to the [deployment section](https://facebook.github.io/create-react-app/docs/deployment) of the Create React App documentation for more information on how to deploy the app on various hosting platforms such as Vercel, Netlify, or AWS.

Contributing
------------

Contributions are welcome! Please feel free to submit a pull request or create an issue if you have suggestions for improvements or have identified bugs.

License
-------

This project is licensed under the MIT License - see the LICENSE.md file for details.

Learn More
----------

For more information on React, you can visit the [React documentation](https://reactjs.org/).

* * * * *

Note: This application is a demo intended solely for demonstrating the capabilities of the Coinbase Commerce API. It is not intended for use in production environments without further modifications and security enhancements.


 `This README.md file provides a complete guide for anyone who wants to clone, set up, and run your project. It also highlights the project's purpose, ensuring clarity for potential contributors or users exploring your GitHub repository. Copy and paste this content into your project's `README.md` file to enhance its documentation.`