import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import FakePage from './component/FakePage/FakePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<FakePage />} />
      </Routes>

    </div>
  );
}

export default App;
