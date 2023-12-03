var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/faqs', function(req, res, next) {
    var faqs = [{
        question:"question1",
        answer:"answer1"
    },
    {
      question:"question2",
      answer:"answer2"
  }]
    res.json(faqs);
});

module.exports = router;
