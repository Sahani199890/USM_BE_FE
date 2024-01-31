import React from "react";
import LoginComponent from "./component/LoginComponent";
import UserComponent from "./component/UserComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/user-management" element={<UserComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
