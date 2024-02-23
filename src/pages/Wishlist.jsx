import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { deleteFromWishlist } from '../Redux/Slice/wishlistSlice';
import { addToCart } from '../Redux/Slice/cartSlice';


function Wishlist() {
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state) => state.wishlistReducer) //from store
  const handleCart = (item) => {
    //add to cart
    dispatch(addToCart(item))

    //remove from wishlist
    dispatch(deleteFromWishlist(item.id))
  }
  return (
    <div>
      <Row>
        {
          wishlistArray.length > 0 ? wishlistArray.map((item) => (
            <Col>
              <MDBCard className='m-3 ' style={{ width: '300px', height: '350px' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={item.thumbnail} fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    Price : ${item.price}
                  </MDBCardText>
                  <div className='d-flex justify-content-center'>
                    <MDBBtn onClick={() => dispatch(deleteFromWishlist(item.id))} ><i className='fa-solid fa-trash text-danger'></i>
                    </MDBBtn>
                    <MDBBtn onClick={() => handleCart(item)}><i className='fa-solid fa-cart-plus text-success'></i></MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </Col>
          )) :
            <div className='text-center'>
              <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" className='mt-4' alt="" />
              <h4>
                Back to Home
              </h4>
              <button className='btn m-4'> Home</button>
            </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist