const express = require('express');
const { validateCreateShoppingList } = require('../validators/shoppingListValidators');
const { isAuthorized } = require('../middleware/auth');
const ShoppingList = require('../models/ShoppingList');

const router = express.Router();

// Create Shopping List
router.post('/', isAuthorized(['Owner']), async (req, res, next) => {
  try {
    const { error } = validateCreateShoppingList(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const shoppingList = new ShoppingList({
      name: req.body.name,
      ownerId: req.user.id,
      memberIds: req.body.memberIds,
    });

    await shoppingList.save();
    res.status(201).json(shoppingList);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
