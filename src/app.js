
const express = require('express');
const app = express()


// Your code goes here
db.myCollection.find({ age: { $not: { $lt: 18 } } });
```

This will return all documents where the **`age`** field is not less than 18.





















module.exports = app;
