const { Budget } = require('../models/budget.model')

//CRUD
//Create

const createBudget = async (data) => {
    console.log('service: createBudget');

    const budget = Budget.create(data);

    return budget;
};

//READ ALL

const getAllBudgets = async () => {
    const budgets = await Budget.find();

    return budgets;
};

//READ ONE

const getBudgetById = async (id) => {
    const budget = await Budget.findById(id);

    return budget;
};

//UPDATE

const updateBudgetById = async (id, data) => {
    const budget = await Budget.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });

    return budget;
};

//DELETE

const deleteBudgetById = async (id) => {
    const budget = await Budget.findByIdAndDelete(id);

    return budget;
}

module.exports = { createBudget, getAllBudgets, getBudgetById, updateBudgetById, deleteBudgetById };