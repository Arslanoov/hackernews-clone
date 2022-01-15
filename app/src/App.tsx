import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import StoriesList from 'pages/stories';
import Story from 'pages/story';
import User from 'pages/user';

import 'assets/styles/main.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/stories/top" />} />
      <Route path="/stories/:type" element={<StoriesList />} />
      <Route path="/story/:id" element={<Story />} />
      <Route path="/user/:username" element={<User />} />
    </Routes>
  </Router>
);

export default App;
