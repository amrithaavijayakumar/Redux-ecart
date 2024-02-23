import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart,emptyCart } from '../Redux/Slice/cartSlice';
import { useNavigate } from 'react-router-dom';
function Cart() {

 const navigate=useNavigate()

  const dispatch = useDispatch()
  const cartArray = useSelector((state) => state.cartReducer)

  //to hold total price of products

  const [total,setTotal]=useState(0)

  const getCartTotal=()=>{
    if(cartArray.length>0) {
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  const emptyCartList=()=>{
    dispatch(emptyCart())
    alert("Order placed succefully")
    navigate("/")
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  


  return (
    <div>
      <Row>
        <Col>
        <table className='m-5 border border-2'>
          <thead>
            <tr>
              <th className='m-5 border border-2'>Id</th>
              <th className='m-5 border border-2'>Name</th>
              <th className='m-5 border border-2'>Image</th>
              <th className='m-5 border border-2'>Price</th>
              <th className='m-5 border border-2'>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                cartArray.length>0?cartArray.map((item,index)=>(
                  <tr>
                    <td className='m-5 border border-2'>{index+1}</td>
                    <td className='m-5 border border-2'>{item.title}</td>
                    <td className='m-5 border border-2'>{
                      <img src={item.thumbnail} height={'100px'} width={'100px'} alt="" />
                      }</td>
                    <td className='m-5 border border-2'>{item.price}</td>
                    <td className='m-5 border border-2'><i onClick={() => dispatch(deleteFromCart(item.id))} className='fa-solid fa-trash text-danger'></i></td>
                  </tr>
                )):"empty cart"
              }
          </tbody>
        </table>
        </Col>
        <Col>
        <div className="card shadow m-5">
          <h3 className='text-center m-3'>Cart Summary</h3>
          <h6 className='m-3'>Total Cart Item : {cartArray.length} </h6>
          <h6 className='m-3'>Total Price :{total}  </h6>
          <div className="text-center m-4">
            <button onClick={emptyCartList} className='btn btn-success'>CheckOut</button>
          </div>
        </div>
        
        </Col>
      </Row>
    </div>
  )
}

export default Cart