import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import "./sass/style.scss"
import Layout from './Layout/Layout';
import Index from './Pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
