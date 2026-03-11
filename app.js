const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Port configuration
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`SpeedLab running at http://localhost:${PORT}`);
});

