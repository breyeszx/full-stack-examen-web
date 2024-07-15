// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:4000/allproducts");
    const data = await response.json();
    setProducts(data);
  };

  const handleDeleteProduct = async (id) => {
    const response = await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Producto eliminado con éxito");
      fetchProducts(); // Actualizar la lista de productos después de eliminar
    } else {
      alert("Error al eliminar el producto");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Lista de Productos
      </h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
            <th className="py-2 px-4 border-b border-gray-200">Imagen</th>
            <th className="py-2 px-4 border-b border-gray-200">Categoría</th>
            <th className="py-2 px-4 border-b border-gray-200">Precio</th>
            <th className="py-2 px-4 border-b border-gray-200">
              Precio Oferta
            </th>
            <th className="py-2 px-4 border-b border-gray-200">Fecha</th>
            <th className="py-2 px-4 border-b border-gray-200">Disponible</th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.id}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-10 w-10 object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.category}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.new_price}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.old_price}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {new Date(product.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.available ? "Sí" : "No"}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
