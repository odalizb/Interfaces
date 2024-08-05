import React from "react";
import logo from '../componentes/imagenes/logo.png';

function Header() {
  return (
    <header>
      <img
        src={logo}
        className='logo-epn'
        alt="logo"
        width='100px'
        height='100px'
      />
      <div className="aplicacion-tareas">
      <Header />
    </div>

    </header>
  );
}
export default Header;