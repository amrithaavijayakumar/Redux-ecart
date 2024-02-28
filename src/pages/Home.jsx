import { MDBRipple } from "mdb-react-ui-kit";
import React from "react";
import useFetch from "../Hooks/useFetch";
import { Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/Slice/wishlistSlice";
import { addToCart } from "../Redux/Slice/cartSlice";

function Home() {
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);



  const dispatch = useDispatch()

  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  //check if the product available in wishlist
const handleAddToWishlist=(item)=>{

  const isItem=wishlistArray.some((wishlistItem)=>wishlistItem.id===item.id)

  if(isItem){
    alert("Product available in whishlist")
  }
  else{
    dispatch(addToWishlist(item))
  }
}
  
  return (
    <div>
      <MDBRipple
        rippleColor="light"
        className="bg-image hover-overlay shadow-1-strong rounded"
      >
        <img
          src="https://jewelwebdesign.net/wp-content/uploads/2022/04/Webdesigner-SanDiego-ecommerce-1.jpg"
          width={"100%"}
          alt=""
        />
      </MDBRipple>

      <Row>
        {data?.length > 0
          ? data.map((item) => (
            <Col>
              <MDBCard className="m-3 shadow" style={{ width: "300px", height: "350px" }}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={item.thumbnail}
                    fluid
                    alt="..."
                  />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    Price : $ {item.price}
                  </MDBCardText>
                  <div className="d-flex justify-content-evenly">
                    <MDBBtn onClick={() => handleAddToWishlist(item)} className="btn"><i className="fa-solid fa-heart text-danger"></i></MDBBtn>
                    <MDBBtn onClick={() => dispatch(addToCart(item))}><i className="fa-solid fa-cart-plus text-success"></i></MDBBtn>
                  </div>

                </MDBCardBody>
              </MDBCard>
            </Col>
          ))
          : "No data found"}
      </Row>
    </div>
  );
}

export default Home;
