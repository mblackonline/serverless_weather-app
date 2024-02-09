# Simple Weather Forecast App

This is a simple web application that provides weather forecast information. It uses the free API from OpenWeatherMap to fetch and display weather data.

## Origin

This project was originally cloned and adapted from Shivang Gupta's open-source project [here](https://github.com/shivang21007/Weather-forcast). 

## Changes Made

#### Below are the main changes made to the original project:

- *Removed the statically coded city:* The original project loaded weather data for a predefined city when the website was first opened. This has been changed to require the user to enter a zip code to fetch weather data.
- *Changed the search key for the weather to use zip code:* Attempted to improve the accuracy of the weather search results, the search key for the weather has been changed to use a zip code instead of a city name.
- *Removed the hardcoded API key from the HTML file:* The original project had the API key hardcoded in the HTML file. This has been changed use a .env file for local development, and a Netlify serverless function with an environment variable for deployment.
- *Removed the About Us and Contact pages:* The original project included About Us and Contact pages. These have been removed from this project to streamline and simplify the application.

## How to Use

To use this application, simply navigate to the deployed website [here](https://serverless-weather-app.netlify.app) and enter a valid US zip code in the search bar. Click the search button or press the Enter key to fetch and display the weather data for that zip code.

## Learning Opportunities

#### Working on this weather app project offers several learning opportunities:

- *Understanding APIs:* You'll get hands-on experience with the OpenWeatherMap API, which is widely used for weather data. You'll learn how to make requests to an API, parse the JSON response, and handle errors.
- *JavaScript Fundamentals:* You'll strengthen your understanding of JavaScript fundamentals such as variables, functions, objects, arrays, and promises. You'll learn how to manipulate DOM elements, handle events, and make asynchronous operations.
- *Fetch API:* You'll learn how to use the Fetch API for making HTTP requests to an external resource. You'll understand how to handle responses, parse JSON, and deal with errors.
- *CSS Styling:* You'll learn how to style your app using CSS. You'll understand how to use selectors, properties, values, and pseudo-classes to style your elements.
- *Deployment:* You'll learn how to deploy your app on Netlify. You'll understand how to configure environment variables, set up serverless functions, and manage your deployment settings.
- *Debugging and Problem Solving:* Working on this project will require you to debug issues and solve problems. You'll learn how to use the browser's developer tools to inspect elements, view console logs, and debug JavaScript code.
- *Version Control with Git:* You'll learn how to use Git for version control. You'll understand how to commit changes, create branches, merge branches, and resolve conflicts.