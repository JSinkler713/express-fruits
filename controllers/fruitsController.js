const express = require('express');
const router = express.Router();
// This is without the database  
//let Fruits = require('../models/Fruit.js')

// Database
const db = require('../models');

console.log(db)

router.get('/', (req, res)=> {
  db.Fruit.find({}, (err, response) => {
    if (err) {
      return console.log(err);
    }
    res.render('index', {
      fruits: response,
    })
  })
});


// GET New form
router.get('/new', (req, res)=> {
  res.render('new');
});

// POST Create from the form
router.post('/', (req, res)=> {
  console.log(req.body);
  //set property correctly
  if(req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  //change to database query
  //Fruits = [...Fruits, req.body]
  db.Fruit.create(req.body, (error, newFruit)=> {
    if (error) {
      return console.log(error);
    } 
    res.redirect('/fruits')
  })
});

// Fruits Show
router.get('/:id', (req, res)=> {
  //
  db.Fruit.findById(req.params.id, (err, foundFruit) => {
    if (err) {
      return console.log(err);
    }
    res.render('show', {
      fruit: foundFruit,
    })
  })
});

// DELETE
router.delete('/:id', (req, res)=> {
  db.Fruit.findByIdAndDelete(req.params.id, (err, item) => {
    if (err) {
      return console.log(err)
    }
    res.redirect('/fruits');
  })
});

// Edit
router.get('/:id/edit', (req, res)=> {
  db.Fruit.findById(req.params.id, (err, foundItem)=> {
    if (err) {
      return console.log(err);
    }
    res.render('edit', {
     fruit: foundItem,
   })
  })
})

// Update
router.put('/:id', (req, res)=> {
  if (req.body.readyToEat) {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  db.Fruit.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}, // get updated back
    (err, updated) => {
      if (err) {
        return console.log(err);
      }
    res.redirect(`/fruits/${req.params.id}`)
    }
  )
})

module.exports = router;
