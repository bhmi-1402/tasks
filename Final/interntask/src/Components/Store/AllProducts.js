import './AllProducts.css';
import shoe from './shoe.jpg';
import shoe2 from './shoe2.png';
import Thumbnail from './Thumbnail';

const allProducts = [
    {
        img: shoe2,
        name: "KSL 01",
        price: 2000
    },
    {
        img: shoe,
        name: "KSW 01",
        price: 2500
    },
    {
        img: shoe2,
        name: "KSL 01",
        price: 2000
    },
    {
        img: shoe,
        name: "KSW 01",
        price: 2500
    }, {
        img: shoe2,
        name: "KSL 01",
        price: 2000
    },
    {
        img: shoe,
        name: "KSW 01",
        price: 2500
    }
]




export default function AllProduct() {
    return <>
        <div className="container" id='AllProduct'>
            <div className="top">
                <p>Shoes</p>
                <div className="icons">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>Sort<i class="fa-solid fa-arrow-up-short-wide"></i> </p>
                </div>
            </div>

            <div className="mainWindow">
              {allProducts.map((ele)=><Thumbnail shoe={ele}></Thumbnail>)}
            </div>
        </div>
    </>;
}
