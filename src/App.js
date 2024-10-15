import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Login from './components/Login';
import StartHere from './components/StartHere';
import LearningModules from './components/LearningModules';
import Rewards from './components/Rewards';
import Feedback from './components/Feedback';
import Faq from './components/Faq';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#dddd" }}>
        <Routes>
          {/* Login Route */}
          <Route
            path="/"
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
          />
          
          {/* Protected Routes: Only accessible if authenticated */}
          {isAuthenticated && (
            <>
              {/* Dashboard Route */}
              <Route
                path="/dashboard"
                element={
                  <>
                    <ProfileCard />
                    <Sidebar />
                    <Dashboard />
                    <LearningModules />
                    <Rewards />
                    <Faq />
                    <Feedback />
                  </>
                }
              />
              
              {/* Transactions Route */}
              <Route
                path="/transactions"
                element={
                  <>
                    <ProfileCard />
                    <Sidebar />
                    <Transactions />
                    <LearningModules />
                    <Rewards />
                    <Faq />
                    <Feedback />
                  </>
                }
              />
              
              {/* Start Here Route */}
              <Route
                path="/starthere"
                element={
                  <>
                    <ProfileCard />
                    <Sidebar />
                    <StartHere />
                    <LearningModules />
                    <Rewards />
                    <Faq />
                    <Feedback />
                  </>
                }
              />


<Route
                path="/learningmodules"
                element={
                  <>
                    <ProfileCard />
                    <Sidebar />
                    <StartHere />
                    <LearningModules />
                    <Rewards />
                    <Faq />
                    <Feedback />
                  </>
                }
              />
              <Route
                path="/rewards"
                element={
                  <>
                    <ProfileCard />
                    <Sidebar />
                    <StartHere />
                    <LearningModules />
                    <Rewards />
                    <Faq />
                    <Feedback />
                  </>
                }
              />
              <Route
                path="/Faq"
                element={
                  <>
                    <ProfileCard />
                    <Sidebar />
                    <StartHere />
                    <LearningModules />
                    <Rewards />
                    <Faq />
                    <Feedback />
                  </>
                }
              />
              <Route
                path="/feedback"
                element={
                  <>
                    <ProfileCard />
                    <Sidebar />
                    <StartHere />
                    <LearningModules />
                    <Rewards />
                    <Faq />
                    <Feedback />
                  </>
                }
              />
            </>
          )}

          {/* Redirect to login if not authenticated */}
          {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
