import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IssueRead from './IssueRead';
import IssueCreate from './IssueCreate';
import IssueUpdate from './IssueUpdate';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Issues</Link> | <Link to="/create">Create</Link>
      </nav>
      <Routes>
        <Route path="/" element={<IssueRead />} />
        <Route path="/:id" element={<IssueUpdate />} />
        <Route path="/create" element={<IssueCreate />} />
      </Routes>      
    </Router>
  );
}

export default App;
