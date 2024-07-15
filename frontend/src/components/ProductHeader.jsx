import React from "react";
import { TbArrowRight } from "react-icons/tb";

const ProductHeader = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
      Inicio <TbArrowRight /> Tienda <TbArrowRight />
      {product.category}
      <TbArrowRight /> {product.name}
      Tb
    </div>
  );
};

export default ProductHeader;
