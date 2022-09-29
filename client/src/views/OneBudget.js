import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBudgetById, updateBudgetById } from "../services/internalApiService";

export const OneBudget = (props) => {
    const [budget, setBudget] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    //for expense
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');

    //to get specific budget
    useEffect(() => {
        getBudgetById(id)
            .then((data) => {
                console.log('your budget', data);
                setBudget(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    if (budget === null ) return null;

    const { amount, expenses } = budget;
    let total = 0;

    //creating new expense
    const createExpense = (e) => {
        e.preventDefault();

        const newExpense = {
            name,
            category,
            cost
        };

        updateBudgetById(id, { "expenses" : [...expenses, newExpense]});
        navigate(`/budgets/expense/${ id }`);
        }

    return(
        <div className="w-50 p-4 rounded mx-auto shadow m-5">
            <h1 className="text-center mb-4">{ budget.name } Budget</h1>
            <Link to={'/home'}>Home</Link>
            <div className="d-flex justify-content-center shadow align-items-center" style={{ backgroundColor: 'lightblue', borderRadius: '10px' }}>
                <div className="card bg-light mb-3 m-3">
                    <div className="card-body">
                        <h5 className="card-title">Budget: ${ amount }</h5>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-center m-4">Your current expenses:</h2>
                {expenses.map((expense, id) => {
                    return (
                        <div key={ id } className="card bg-light mb-3 m-1 p-4 text-left">
                            <p>Expense Name: { expense.name }</p>
                            <p>Expense Category: { expense.category }</p>
                            <p>Expense Cost: ${ expense.cost }</p>
                            <p>Total: ${total += expense.cost}</p>
                            <p>Remaining Budget: ${ amount - total}</p>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={ (e) => createExpense(e) }>
                <div className="form-group">
                    <label className="h6">Expense Name:</label>
                    <input onChange={ (e) => {
                        setName(e.target.value);
                    }} type='text' />
                </div>
                <div className="form-group">
                    <label className="h6">Expense Category:</label>
                    <select onChange={ (e) => {
                        setCategory(e.target.value);
                    }}>
                        <option value='null'>Please Select Category</option>
                        <option value='housing'>Housing</option>
                        <option value='food'>Food</option>
                        <option value='transportation'>Transportation</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="h6">Expense Cost:</label>
                    <input onChange={ (e) => {
                        setCost(e.target.value);
                    }} type='number' />
                </div>
                <div className="mt-4">
                    <button className="btn btn-md btn-outline-success">Create</button>
                </div>
            </form>
        </div>
    )
}

export default OneBudget;