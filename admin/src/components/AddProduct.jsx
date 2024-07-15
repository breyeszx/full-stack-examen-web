import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("product", image);

    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.image_url;
  };

  const handleAddProduct = async () => {
    if (!title || !price || !salePrice || !category || !image) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const imageUrl = await handleImageUpload();

    const productData = {
      name: title,
      image: imageUrl,
      category: category,
      new_price: salePrice,
      old_price: price,
    };

    const response = await fetch("http://localhost:4000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const data = await response.json();
    if (data.success) {
      alert("Producto añadido con éxito");
    } else {
      alert("Error al añadir el producto");
    }
  };

  return (
    <div className="p-4">
      <form className="space-y-4">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Precio Oferta
          </label>
          <input
            type="text"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Selecciona una categoría</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="niño">Niño</option>
          </select>
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Imagen
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="button"
          onClick={handleAddProduct}
          className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Añadir Producto
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
