import React from 'react'
import './Cart.css';

export default function cartProduct(prop){
    console.log(prop.list)
    return <>
        <div className="cartProduct">
            <div className="logoCart">
                <img src={prop.list.img} alt="" />
            </div>
            <div className="detailCart">
                <h3>{prop.list.name}</h3>
                <h4>by KICKSUP and you</h4>
                <div className='cartPrice'>RS 2000/-</div>
            </div>
                {/* <button className='Remove'>Remove</button> */}
        </div>
    </>
}
