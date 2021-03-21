const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  imgUrl: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

const City = mongoose.model('City', citySchema);

module.exports = City;
