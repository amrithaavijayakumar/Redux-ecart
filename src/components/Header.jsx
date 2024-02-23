import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBCollapse,
} from "mdb-react-ui-kit";
import './header.css'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header() {
  const [openBasic, setOpenBasic] = useState(false);

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const cartArray = useSelector((state) => state.cartReducer)
  return (
    <div>
      <MDBNavbar expand="lg" bgColor="light" className="custom-navbar">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <i class="fa-solid text-white fa-cart-shopping fa-fade fs-1 m-3"></i>
            <h3 className="text-white">Shopee</h3>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0"></MDBNavbarNav>
            <form className="d-flex  w-auto">

              <Link to={'/wishlist'}>
                <a>
                  <i className="fa-solid fa-heart fs-2 text-danger me-4"></i>
                </a>
                <Badge bg="secondary">{wishlistArray.length}</Badge>
              </Link>

              <Link to={'/cart'}>
                <a>
                  <i className="fa-solid fa-cart-plus fs-2 text-success me-4"></i>
                </a>
                <Badge bg="secondary">{cartArray.length}</Badge>
              </Link>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
