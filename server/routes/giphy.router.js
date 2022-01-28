require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/', (req, res) => {
    console.log('in router get')
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            // Need to figure out how to input the search here
            q: req.query.q,
            offset: req.query.offset,
            limit: 10
        }
    })
        .then((apiRes) => {
            console.log('************************', apiRes.data)
            res.send(apiRes.data);
        })
        .catch((error) => {
            console.log('error getting', error);
            res.sendStatus(500);
        })
})

module.exports = router;