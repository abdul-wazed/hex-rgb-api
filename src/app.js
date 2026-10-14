const express = require('express');
const { hexToRgb } = require('./hexToRgb');
const app = express();
app.get('/api/hex-to-rgb', (req, res) => {
  try {
    res.json({ hex: req.query.hex, rgb: hexToRgb(req.query.hex) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = app;
