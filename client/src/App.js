import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
