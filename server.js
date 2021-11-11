require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();

// const port = 5000;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
})
//$ npm run dev -> käima panemiseks, ctrl+C asbil kinni kui vaja