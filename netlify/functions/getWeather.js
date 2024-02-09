require('dotenv').config();

exports.handler = async (event, context) => {
  const zipCode = event.queryStringParameters && event.queryStringParameters.zip;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!zipCode || !apiKey) {
    return { statusCode:  400, body: 'Missing required parameters.' };
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`);
    const data = await response.json();
    return { statusCode:  200, body: JSON.stringify(data) };
  } catch (error) {
    console.error(error);
    return { statusCode:  500, body: 'An error occurred while retrieving weather data.' };
  }
};