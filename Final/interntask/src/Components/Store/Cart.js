import './Cart.css';
import CartProduct  from './CartProduct';
export default function Cart(data) {

    console.log(data.data);

    

    return <div className='cart' id='cart'>
        <div className="headingCart">
            <h1>CART</h1>
            <i class="fa-solid fa-2x fa-bag-shopping"></i>
        </div>
        <div className="mainCart"> 
        {data.data.length>0?data.data.map((ele)=><CartProduct list={ele}></CartProduct>):"Nothing in Cart"}       
        </div>
        <div className="footerCart">
            <button className='button'>Order Now</button>
        </div>
    </div>;
}