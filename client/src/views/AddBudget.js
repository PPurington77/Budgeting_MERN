import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createBudget } from '../services/internalApiService';

export const AddBudget = (props) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const handleAddBudgetSubmit = (e) => {
        e.preventDefault();

        const newBudget = {
            name,
            amount,
            expenses
        };

        createBudget(newBudget)
            .then((data) => {
                console.log('new budget:', data);
                navigate('/');
            })
            .catch((error) => {
                console.log('error', error);
                setErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div className='w-50 p-4 rounded mx-auto shadow mb-5'>
            <Link to={'/'}>Home</Link>
            <h3>Create your budget:</h3>
            <form onSubmit={ (e) => handleAddBudgetSubmit(e) }>
                <div className='form-group'>
                    <label>Name:</label>
                    { errors?.name && (
                        <p style={{ color: 'red'}}>{ errors?.name?.message }</p>
                    )}
                    <input onChange={ (e) => {
                        setName(e.target.value)
                    }} type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Amount you are budgeting:</label>
                    { errors?.amount && (
                        <p style={{ color: 'red' }}>{ errors?.amount?.message }</p>
                    )}
                    <input onChange={ (e) => {
                        setAmount(e.target.value)
                    }} type='text' className='form-control' />
                </div>
                <div className='mt-4'>
                    <Link to={ '/' } className='btn btn-md btn-outline-success m-3'>Cancel</Link>
                    <button className='btn btn-md btn-outline-success m-3'>Create</button>
                </div>
            </form>
        </div>
    );
};

export default AddBudget;