const express = require('express');
const router = express.Router();

// Simple paragraphs for typing test
const paragraphs = [
  'Practice makes progress. Type this sentence as quickly and accurately as you can.',
  'JavaScript is a versatile language used for both frontend and backend development.',
  'Fast typing can greatly improve your productivity when working on a computer.',
  'Stay relaxed and focus on accuracy first, then try to increase your speed over time.'
];

function getRandomParagraph() {
  const index = Math.floor(Math.random() * paragraphs.length);
  return paragraphs[index];
}

// Home page
router.get('/', (req, res) => {
  res.render('index', { title: 'SpeedLab - Home' });
});

// Typing speed test
router.get('/typing', (req, res) => {
  const paragraph = getRandomParagraph();
  res.render('typing', {
    title: 'Typing Speed Test',
    paragraph
  });
});

// Reaction time test
router.get('/reaction', (req, res) => {
  res.render('reaction', { title: 'Mouse Reaction Test' });
});

module.exports = router;

