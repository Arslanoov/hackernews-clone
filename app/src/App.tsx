import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import TopStories from 'pages/stories/top';
import NewStories from 'pages/stories/new';

import 'assets/styles/main.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/stories/top" />} />
      <Route path="/stories/top" element={<TopStories />} />
      <Route path="/stories/new" element={<NewStories />} />
    </Routes>
  </Router>
);

export default App;
