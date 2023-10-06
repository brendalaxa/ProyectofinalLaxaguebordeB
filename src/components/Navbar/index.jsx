import Brand from "./Brand";
import CartWidget from "./CartWidget";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Brand />
      <div className="buttons">
        <button className="button">Inicio</button>
        <button className="button">Cuidado personal</button>
        <button className="button">Bazar</button>
        <button className="button">Jugueteria</button>
        <button className="button">Libreria</button>
      </div>
      <CartWidget />
    </nav>
  );
}
export default Navbar;
