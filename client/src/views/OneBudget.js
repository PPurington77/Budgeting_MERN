import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getBudgetById, deleteBudgetById } from "../services/internalApiService";

export const OneBudget = (props) => {
    const [budget, setBudget] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

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

    const { name, amount, expenses } = budget;

    return(
        <div className="w-50 p-4 rounded mx-auto shadow m-5">
            <h1 className="text-center mb-4">{ name } Budget</h1>
            <div className="d-flex justify-content-center shadow" style={{ backgroundColor: 'lightblue', borderRadius: '10px' }}>
                <div className="card bg-light mb-3 m-3">
                    <div className="card-body">
                        <h5 className="card-title">Budget: ${ amount }</h5>
                    </div>
                </div>
                <div className="card bg-light mb-3 m-3">
                    <div className="card-body">
                        <h5 className="card-title">Spent: ${ amount }</h5>
                    </div>
                </div>
                <div className="card bg-light mb-3 m-3">
                    <div className="card-body">
                        <h5 className="card-title">Remaining: ${ amount }</h5>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-center m-4">Your current expenses:</h2>
            </div>
        </div>
    )
}