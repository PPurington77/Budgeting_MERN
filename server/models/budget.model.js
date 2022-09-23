const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name of the budget is required'],
            minLength: [3, 'Must be at least 3 characters long']
        },

        amount: {
            type: Number,
            required: [true, 'Amount is required']
        },

        expenses: [
            {
                name: {
                    type: String,
                    required: false
                },

                category: {
                    type: String,
                    required: false
                },

                cost: {
                    type: Number,
                    required: false
                }
            }
        ]
    },
    {timestamps: true}
);

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = { Budget : Budget };