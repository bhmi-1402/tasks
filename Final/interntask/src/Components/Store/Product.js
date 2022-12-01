import blankStar from './blank-star.png';
import icon from './icons8-chevron-left-30.png';
import shoe from './shoe2.png';
import yellowStar from './yellow-star.png';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Product(props) {

    const product={
        name: "KSL 01",
        provider: "By Kicksup and You",
        price: 2000,
        img: shoe
                  }

    const ProductArray = [...props.det,product];              

    return <>
        <div className="container" id='product'>
            <div className="top">
                <Link to={"/store"}><img src={icon} /></Link>
                <h4> your design space</h4>
            </div>
            <div className="common" id='common'>
                <div className="images">
                    <img src={shoe} width="250px" />
                    <div className="box">
                        <h4>Rate product </h4>
                        <div className="stars">
                            <img src={blankStar} className="stare" />
                            <img src={blankStar} className="stare" />
                            <img src={blankStar} className="stare" />
                            <img src={blankStar} className="stare" />
                            <img src={blankStar} className="stare" />
                        </div>
                    </div>
                </div>
                <div className="smallim resim" id='varient'>
                    <img src={shoe} className="img1" width="100px" />
                    <img src={shoe} className="img1" width="100px" />
                    <img src={shoe} className="img1" width="100px" />
                </div>
                <div className="column">
                    <h2>{product.name}</h2>
                    <h5>{product.provider}</h5>
                    <div className="stars">
                        <img src={yellowStar} className="star" />
                        <img src={yellowStar} className="star" />
                        <img src={yellowStar} className="star" />
                        <img src={yellowStar} className="star" />
                        <img src={yellowStar} className="star" />
                    </div>
                    <h6>80 reviews</h6>
                    <h3>Rs. {product.price}/-</h3>
                    <h5 id="a">Get an exclusive 20% off shopping with HDFC bank</h5>
                    <button className='button' onClick={()=>{props.func(ProductArray)}}>Add to Cart</button>
                </div>

            </div>
        </div>

    </>
}