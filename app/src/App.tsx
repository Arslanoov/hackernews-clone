import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import StoriesList from 'pages/stories';
import Story from 'pages/story';

import 'assets/styles/main.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/stories/top" />} />
      <Route path="/stories/:type" element={<StoriesList />} />
      <Route path="/story/:id" element={<Story />} />
    </Routes>
  </Router>
);

export default App;
