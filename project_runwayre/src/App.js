import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
