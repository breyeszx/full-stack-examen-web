import React, { useContext } from "react";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row">
        <div className="flex gap-x-2">
          <div className="flex flex-col gap-[5px] flex-wrap">
            <img
              src={product_rt_1}
              alt="product image"
              className="max-h-[99px] xl:max-h-none xl:h-[111px]"
            />
            <img
              src={product_rt_2}
              alt="product image"
              className="max-h-[99px] xl:max-h-none xl:h-[111px]"
            />
            <img
              src={product_rt_3}
              alt="product image"
              className="max-h-[99px] xl:max-h-none xl:h-[111px]"
            />
            <img
              src={product_rt_4}
              alt="product image"
              className="max-h-[99px] xl:max-h-none xl:h-[111px]"
            />
          </div>
          <div>
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="flex-col flex cl:flex-[1.5]">
          <h3 className="h3">{product.name}</h3>
          <div className="flex gap-x-2 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>111</p>
          </div>
          <div className="flex gap-x-6 medium-20 my4">
            <div className="line-through">${product.old_price}</div>
            <div className="text-secondary">${product.new_price}</div>
          </div>
          <div className="mb-4">
            <h4 className="bold-16">Selecciona Talla</h4>
            <div className="flex gap-3 py-3">
              <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                S
              </div>
              <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                M
              </div>
              <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                L
              </div>
              <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                XL
              </div>
              <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                XXl
              </div>
            </div>
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className=" btn_dark_rounded !rounded uppercase regular-14 tracking-widest"
              >
                Añadir al carro
              </button>
              <button className=" btn_dark_outline !rounded uppercase regular-14 tracking-widest">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
