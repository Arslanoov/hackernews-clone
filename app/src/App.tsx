import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import 'assets/styles/main.css';
import MainLayout from './layouts/main/MainLayout';

const StoriesList = React.lazy(() => import('pages/stories'));
const Story = React.lazy(() => import('pages/story'));
const User = React.lazy(() => import('pages/user'));

const App = () => (
  <Router>
    <Suspense fallback={<MainLayout />}>
      <Routes>
        <Route path="/" element={<Navigate to="/stories/top" />} />
        <Route path="/stories/:type" element={<StoriesList />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
