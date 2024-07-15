// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ setPage }) => {
  return (
    <div className="bg-gray-900 text-white w-64 p-4">
      <ul>
        <li className="p-2 cursor-pointer" onClick={() => setPage("products")}>
          Productos
        </li>
        <li
          className="p-2 cursor-pointer"
          onClick={() => setPage("addProduct")}
        >
          Agregar Producto
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
