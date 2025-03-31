const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.post('/get-horoscope', async (req, res) => {
  try {
    const { sign, day } = req.body;

    // Validate sign and day (optional, but recommended)
    const allowedSigns = [
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius',
      'capricorn',
      'aquarius',
      'pisces'
    ];
    const allowedDays = ['yesterday', 'today', 'tomorrow'];

    if (
      !sign ||
      !day ||
      !allowedSigns.includes(sign.toLowerCase()) ||
      !allowedDays.includes(day.toLowerCase())
    ) {
      return res.status(400).json({ error: 'Invalid sign or day provided.' });
    }

    const apiUrl = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${day}`;

    const response = await axios.get(apiUrl);
    res.json(response.data); // Send the API's response back to the client
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    res.status(500).json({ error: 'Failed to fetch horoscope data.' });
  }
});

app.post('/get-horoscope-weekly', async (req, res) => {
  try {
    const { sign } = req.body;

    // Validate sign and day (optional, but recommended)
    const allowedSigns = [
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius',
      'capricorn',
      'aquarius',
      'pisces'
    ];

    if (!sign || !allowedSigns.includes(sign.toLowerCase())) {
      return res.status(400).json({ error: 'Invalid sign provided.' });
    }

    const apiUrl = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/weekly?sign=${sign}`;

    const response = await axios.get(apiUrl);
    res.json(response.data); // Send the API's response back to the client
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    res.status(500).json({ error: 'Failed to fetch horoscope data.' });
  }
});

app.post('/get-horoscope-monthly', async (req, res) => {
  try {
    const { sign } = req.body;

    // Validate sign and day (optional, but recommended)
    const allowedSigns = [
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius',
      'capricorn',
      'aquarius',
      'pisces'
    ];

    if (!sign || !allowedSigns.includes(sign.toLowerCase())) {
      return res.status(400).json({ error: 'Invalid sign provided.' });
    }

    const apiUrl = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/monthly?sign=${sign}`;

    const response = await axios.get(apiUrl);
    res.json(response.data); // Send the API's response back to the client
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    res.status(500).json({ error: 'Failed to fetch horoscope data.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
