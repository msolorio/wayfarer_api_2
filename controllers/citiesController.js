const { City } = require('../models');


function index(req, res) {
  console.log('Hit cities Index controller');
  
  // Get all city data populated with post data
  City.find()
    .populate('posts')
    .exec()
    .then((allCities) => {
      res.send(allCities);
    });
}

async function create(req, res) {
  const newCity = { name, cityImg } = req.body;
  newCity.posts = [];

  const createdCity = await City.create(newCity);

  res.send(createdCity);
}

module.exports = {
  index,
  create
};