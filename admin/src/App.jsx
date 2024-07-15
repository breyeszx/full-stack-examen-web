// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

const App = () => {
  const [page, setPage] = useState("products");

  return (
    <div className="flex h-screen">
      <Sidebar setPage={setPage} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        {page === "products" && <ProductList />}
        {page === "addProduct" && <AddProduct />}
      </div>
    </div>
  );
};

export default App;
