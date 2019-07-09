const express = require('express');
const app = express();

app.get('/testdata', (req, res) => {
  res.send({
      'name': 'priyanka',
      'id': 1
  });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});