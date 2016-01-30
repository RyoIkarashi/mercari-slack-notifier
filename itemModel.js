'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  price: Number,
  link: String,
  img: String
});

module.exports = mongoose.model('item', ItemSchema);
