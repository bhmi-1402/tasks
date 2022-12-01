import './Contact.css';
import chris from './christiano.jpg';
import iker from './ikercasillas.jpg' ;
import james from './james.jpg';
import linkedin from './linkedin.png';
import nba from './nba.png';
import toni from './tonikroos.jpg';
import facebook from './facebook.png';
import twitter  from './twitter.png';
import zidane from './zidane.jpg';
import medium from './medium.png';



export default function Contact(){
  return (<>
  <h3 className="heading">Without bonding and coordination,every project is a failure.Look at who makes KICKSUP great.;)</h3>
    <div className="box">
        <div className="simple">
            <img src={zidane} width="200px"height="220px"/>
            <h2>Zidane</h2>
                <h4>Leadership & management</h4>
                <div className="row">
                    <img src={linkedin} width="30px"/>
                    <img src={medium} width="30px"/>
                    <img src={facebook} width="30px"/>
                </div>
        </div>
        <div className="simple">
            <img src={toni} width="200px"height="220px"/>
            <h2>Toni Kroos</h2>
                <h4 className="h">Product developer</h4>
                <div className="row">
                    <img src={linkedin} width="30px"/>
                    <img src={medium} width="30px"/>
                    <img src={facebook}/>
                </div>
        </div>
        <div className="simple">
            <img src={iker} width="200px"height="220px"/>
            <h2 >Iker Casillas</h2>
                <h4 className="h" >Marketing strategy</h4>
                <div className="row">
          
                    <img src={medium} width="30px"/>
                    {/* <!-- <img src="facebook.png"> --> */}
                </div>
        </div>
        <div className="simple">
            <img src={james} width="200px"height="220px"/>
            <h2 >James</h2>
                <h4 className="h">Product designer</h4>
                <div className="row">
                  
                    <img src={medium} width="30px"/>
                    <img src={nba} width="50px"/>
                    {/* <!-- <img src=".png"> --> */}
                </div>
        </div>
        <div className="simple">
            <img src={chris} width="200px"height="220px"/>
            <h2 >Cristiano</h2>
                <h4 className="h"> Financial operations</h4>
                <div className="row">
                    <img src={linkedin} width="30px"/>
                    {/* <!-- <img src="medium.png"> --> */}
                    <img src={facebook} width="30px"/>
                </div>
        </div>
        <h2 className="you">and You! ;)</h2>
    </div>
  </>
  )
}
