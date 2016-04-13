var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here

router.all('/upload', function (req, res) {
  res.render('upload/index', { 'form_action' : '/upload/progress' });
});

router.all('/upload/progress', function (req, res) {
  res.render('upload/progress');
});

router.all('/upload/success', function (req, res) {
  res.render('upload/success', { 'form_action' : '/update' });
});

router.all('/upload/failure', function (req, res) {
  res.render('upload/failure', { 'form_action' : '/upload-file' });
});

router.all('/update', function (req, res) {
  res.render('update/index');
});

router.all('/update/success', function (req, res) {
  res.render('update/success', { 'form_action' : '/upload' });
});

router.all('/visit-types', function (req, res) {
  res.render('visit-types/index', { 'form_action' : '/visit-types/create-visit-type' });
});

router.all('/visit-types/change-type-example', function (req, res) {
  res.render('visit-types/change-type-example', { 'form_action' : '/visit-types/change-confirmation' });
});

router.all('/visit-types/change-confirmation', function (req, res) {
  res.render('visit-types/change-confirmation', { 'form_action' : '/visit-types' });
});

router.all('/visit-types/create-visit-type', function (req, res) {
  res.render('visit-types/create-visit-type', { 'form_action' : '/visit-types/add-confirmation' });
});

router.all('/visit-types/add-confirmation', function (req, res) {
  res.render('visit-types/add-confirmation', { 'form_action' : '/visit-types' });
});

router.all('/visit-types/delete', function (req, res) {
  res.render('visit-types/delete-confirmation', { 'form_action' : '/visit-types' });
});


module.exports = router;
