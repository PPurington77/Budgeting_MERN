const { createBudget, getAllBudgets, getBudgetById, updateBudgetById, deleteBudgetById } = require('../services/budget.service');

const handleCreateBudget = async (req, res) => {
    console.log('controller: handleCreatebudget');

    try {
        const budget = await createBudget(req.body);
        return res.json(budget);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

const handleGetAllBudgets = async (req, res) => {
    try {
        const budgets = await getAllBudgets();
        return res.json(budgets);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

const handleGetBudgetById = async (req, res) => {
    try {
        const budget = await getBudgetById(req.params.id);
        return res.json(budget);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

const handleUpdateBudgetById = async (req, res) => {
    try {
        const budget = await updateBudgetById(req.params.id, req.body);
        return res.json(budget);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

const handleDeleteBudgetById = async (req, res) => {
    try {
        const budget = await deleteBudgetById(req.params.id);
        return res.json(budget);
    }
    catch (error) {
        return res.status(400).json(error);
    };
};

module.exports = { handleCreateBudget, handleGetAllBudgets, handleGetBudgetById, handleUpdateBudgetById, handleDeleteBudgetById };
