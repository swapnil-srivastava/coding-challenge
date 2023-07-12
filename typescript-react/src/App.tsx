import Header from '@components/Header/Header';
// import PricesHistory from '@containers/PricesHistory/PricesHistory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/containers/Home';
import ListPage from '@/containers/ListPage/ListPage';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/listpage" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
