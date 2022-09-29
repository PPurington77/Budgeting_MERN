import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBudgetById } from "../services/internalApiService";

export const OneBudget = (props) => {
    const [budget, setBudget] = useState(null);
    const { id } = useParams();

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

    return(
        <div className="w-50 p-4 rounded mx-auto shadow m-5">
            <h1 className="text-center mb-4">{ budget.name } Budget</h1>
            <div className="d-flex justify-content-center shadow align-items-center" style={{ backgroundColor: 'lightblue', borderRadius: '10px' }}>
                <Link to={'/home'} className="btn btn-md btn-outline-primary mt-2">Home</Link>
                <div className="card bg-light mb-3 m-3">
                    <div className="card-body">
                        <h5 className="card-title">Budget: ${ amount }</h5>
                    </div>
                </div>
                <Link to={'/create/expense'} className="btn btn-md btn-outline-primary mt-2">New Expense</Link>
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

        </div>
    )
}