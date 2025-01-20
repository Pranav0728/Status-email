const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const sequelize = require('./config/db');
const recordRoutes = require('./routes/recordRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors({
  origin: 'http://localhost:3000', 
}));

app.use(bodyParser.json());
app.use('/api', recordRoutes);

// Sync DB and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
