import React from "react";

const Newsletter = () => {
  return (
    <section className="max_padd_container py-12 xl:py-28 bg-white">
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
        <h3 className="h3">Obten ofertas exclusivas en tu Correo</h3>
        <h4 className="uppercase bold-18">
          {" "}
          Suscribete a nuestro Newsletter y mantente actualizado
        </h4>
        <div className="flexBetween rounded-full ring-1 ring-slate-900/5 hover:ring-slate-900/10 bg-primary w-full max-w-[588px]">
          <input
            type="email"
            placeholder="ingresa tu mail"
            className="w-full bg-transparent ml-7 border-none outline-none regular-16"
          />
          <button className="btn_dark_rounded">Suscribete</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
