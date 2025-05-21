const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'dbs_update/site')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
