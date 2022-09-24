import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBudgets } from '../services/internalApiService';

export const Home = (props) => {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        getAllBudgets()
            .then((data) => {
                console.log(data);
                setBudgets(data);
            })
            .catch ((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
				<h1 className="navbar-brand mb-0">Welcome</h1>
			</nav>
            <div className="row">
				<div className="col-sm-6 mx-auto">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Current Budgets</h5>
							{budgets.map((budget) =>{
								return (
									<div key={budget._id}>
										<Link to={`/budgets/${ budget._id }`}>
											<h4>{budget.name}</h4>
										</Link>
									</div>
								)
							})}

							<Link to={"/budgets/create"} className="btn btn-sm btn-outline-success">Create a new budget</Link>
                        </div>
                    </div>
                </div>
			</div>
        </div>
    )
};

export default Home;