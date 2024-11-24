const express = require('express');
const mongoose = require('mongoose');
const shoppingListRoutes = require('./routes/shoppingListRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/shoppingApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/shoppingLists', shoppingListRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
