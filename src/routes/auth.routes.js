const User = require('../models/user.model');
const express = require('express');

const jwt = require('jsonwebtoken');


const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
  };