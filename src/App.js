// import logo from './logo.svg';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FetchingDatas  from './datas/FetchingDatas';

const App = () => {
const data = FetchingDatas();

if (!data) {
  return <pre>Loading...</pre>;
}
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
