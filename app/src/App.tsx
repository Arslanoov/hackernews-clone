import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import StoriesList from 'pages/stories/List';

import 'assets/styles/main.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/stories/top" />} />
      <Route path="/stories/:type" element={<StoriesList />} />
    </Routes>
  </Router>
);

export default App;
