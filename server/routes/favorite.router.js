const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const qt = 'SELECT * FROM favorites;'
  pool.query(qt)
    .then(dbres => {
      console.log('GOT FAV', dbres);
      res.send(dbres.data)
    }).catch(err => {
      console.error('NO GET FAV', err);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  pool.query
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
