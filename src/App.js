import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn'; // Adjust the path accordingly
// import Home from './path/to/Home'; // Assuming you have a Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
