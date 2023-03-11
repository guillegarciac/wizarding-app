import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import HomeDetail from './pages/HomeDetail';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/house/:houseId' element={<HomeDetail />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

