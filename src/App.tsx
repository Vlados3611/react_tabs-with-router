import React from 'react';

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { NavigationLink } from './components/NavigationLink';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink
            to="/"
            title="Home"
          />
          <NavigationLink
            to="/tabs"
            title="Tabs"
          />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="title">Home page</h1>
            }
          />
          <Route
            path="/home"
            element={
              <Navigate to="/" replace />
            }
          />

          <Route
            path="/tabs"
            element={
              <TabsPage />
            }
          >
            <Route
              path=":tabId"
              element={
                <TabsPage />
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <NotFoundPage />
            }
          />
        </Routes>

      </div>
    </div>
  </>
);
