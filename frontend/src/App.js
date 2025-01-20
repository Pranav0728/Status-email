import React from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Status Management System</h1>
        <Table />
      </div>
    </div>
  );
};

export default App;
