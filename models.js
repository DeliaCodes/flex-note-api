'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const uuid = require('uuid');

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  templates: [{
    id: {
      type: String,
      default: uuid.v4()
    },
    name: String,
    templateString: String,
  }],
  notes: [{
    id: {
      type: String,
      default: uuid.v4()
    },
    text: {
      type: String,
      required: true
    },
  }]
});

UserSchema.methods.serialize = function () {
  return {
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || ''
  };
};

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);

module.exports = { User };
