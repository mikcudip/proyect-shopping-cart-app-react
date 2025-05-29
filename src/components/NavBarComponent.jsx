import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "../styles/NavBarComponent.css";

const NavBarComponent = () => {
  const { shoppingList } = useContext(ShoppingCartContext);
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            ShoppingStore
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Productos
              </NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/cart">
                Carrito
              </NavLink>
            </div>
          </div>
          <NavLink className="cart-icon" to="/cart">
            <Badge badgeContent={shoppingList.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
