const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// middleware
app.use(cors());
app.use(express.json());




app.get('/', async (req, res) => {
    res.send('airbnb server is running');
  });
  
  app.listen(port, () => console.log(`airbnb running on ${port}`));