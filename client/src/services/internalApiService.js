import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const createBudget = async (data) => {
    const res = await http.post('/budgets', data);
    return res.data;
};

export const getAllBudgets = async (data) => {
    const res = await http.get('/budgets');
    return res.data;
};

export const getBudgetById = async (id) => {
    const res = await http.get(`/budgets/${ id }`);
    return res.data;
};

export const updateBudgetById = async (id, data) => {
    const res = await http.put(`/budgets/${ id }`, data);
    return res.data;
};

export const deleteBudgetById = async (id) => {
    const res = await http.delete(`/budgets/${ id }`);
    return res.data
};

