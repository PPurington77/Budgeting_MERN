import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import AddBudget from './views/AddBudget';
import { OneBudget } from './views/OneBudget';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <Navigate to="/home" replace />} />
          <Route path="/home" element={ <Home />} />
          <Route path='/budgets/create' element={ <AddBudget />} />
          <Route path='/budgets/:id' element={ <OneBudget /> } />
        </Routes>
    </div>
  );
}

export default App;
