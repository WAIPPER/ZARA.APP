'use strict';

const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email address.',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
},{
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;