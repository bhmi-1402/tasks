import { Link } from "react-router-dom";
export default function Thumbnail(prop)
{
    console.log("Prop",prop)
    return <Link to={"/store/products"}>
    <div className="thumbnail">
    <img src={prop.shoe.img} alt="" />
    <div className="tile">
        <h2>{prop.shoe.name}</h2>
        <p>RS. {prop.shoe.price}/-</p>
    </div>
   </div>
    </Link>;
}