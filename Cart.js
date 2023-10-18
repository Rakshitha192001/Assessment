import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './cart.css'

function Cart() {
  const cart = useSelector(state=>state)
  console.log(cart)
  const dispatch=useDispatch()
  const location = useLocation()
  
  return (
    <>
      <div>
      <table border={1} className="tab">
        <thead>
          <tr>
            <th>Title</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{
            cart?.map((carts,index)=>(
                <tr>
            <td>{cart.title}</td>
            <td>{cart.price}</td>
            </tr>

            ))}
            
          {/* {
         cart?.map((carts, index) => (
              <tr key={index}>
              <td>{carts.title}</td>
              <td>{carts.price}</td>  
              <td>{abc+=Number(carts.price)}</td>
              
            
            </tr>
          ))} */}
          
        </tbody>
      </table>
      {/* <div className='total'>Total {abc}</div> */}
      </div>
    </>
  )
}

export default Cart