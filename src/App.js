import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FetchingDatas  from './datas/FetchingDatas';

/**
 * @author Mouly Benoît
 * @help https://github.com/benoitMouly/BenoitMouly_12_22082022/blob/main/README.md
 * @repo https://github.com/benoitMouly
 * 
 * @reactApp App
 * @return react app
 */

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
