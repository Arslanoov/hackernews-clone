import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/home/Home';

import 'styles/main.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
