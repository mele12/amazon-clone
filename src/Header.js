import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () =>{
    if (user) {
      auth.signOut();    }
  };
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
    </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearlink">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionaLineOne">
            Hello {!user ? 'Guest': user.email}</span>
          <span className="header__optionLineTwo">
           {user ? 'Sign out' : 'Sign In'}
            </span>
        </div>
        </Link>
         <Link to='/orders' className="header__clearlink">
        <div className="header__option">
          <span className="header__optionaLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>
       </Link>
        <div className="header__option">
          <span className="header__optionaLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/Checkout" className="header__clearlink">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
  <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

