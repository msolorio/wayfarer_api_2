const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const {
  citiesRoutes,
  postsRoutes
} = require('./routes');

// MIDDLEWARE
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// ROUTES
app.use('/cities', citiesRoutes);
app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.send('A response');
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT: ${PORT}`);
});
