const express = require('express');
const { handleCreateBudget, handleGetAllBudgets, handleGetBudgetById, handleUpdateBudgetById, handleDeleteBudgetById } = require('../controllers/budget.controller');
const router = express.Router();

//api/budgets will be added in server.js

router.post('/', handleCreateBudget);
router.get('/', handleGetAllBudgets);
router.get('/:id', handleGetBudgetById);
router.put('/:id', handleUpdateBudgetById);
router.delete('/:id', handleDeleteBudgetById);

module.exports = { budgetRouter : router };
