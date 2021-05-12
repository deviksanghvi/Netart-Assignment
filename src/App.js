import './App.css';
import logo1 from './asserts/logo.png';
import img1 from './asserts/1.png'
import img2 from './asserts/2.png'
import img3 from './asserts/3.png'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
       <div id="grad1">
        <Row className="c1">
          <Col> <img src={logo1} className="App-logo" alt="logo1"  /></Col>
        </Row>
       
        <Row className="c2">
        <Col lg="4" xl="4" md="4" sm="4" xs="4"><img src={img1} className="App-img" alt="img1" /></Col>
        <Col lg="8" xl="8" md="8" sm="8" xs="8">
          <p className="h4">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul className="" >
              <li className="ul" > C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li className="li">C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            
          <img src={img2} className="App-img1" alt="img2" />
          <p className="t">
	Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
  </Col>
      </Row>
      <h5 className="t1 c3">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h5>
      <Row className="c3">
          <Col> <img src={img3} className="App-img2" alt="img3"  /></Col>
        </Row>
        <p className="t2 c3">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <hr className="new4" />
        <h5 className="t3 c3">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <p className="t4 c3">CHEMICALS & PROCESS<span style={{color:"red"}}> |</span> POWER<span style={{color:"red"}}> |</span> WATER & WASTE WATER<span style={{color:"red"}}> |</span> OILS & GAS<span style={{color:"red"}}> |</span> PHARMA<span style={{color:"red"}}> |</span> SUGARS & DISTILLERIES<span style={{color:"red"}}> |</span> PAPER & PULP<span style={{color:"red"}}> |</span> MARINE & DEFENCE<span style={{color:"red"}}> |</span> METAL & MINING<span style={{color:"red"}}> | </span>FOOD & BEVERAGE PETROCHEMICAL & REFINERIES<span style={{color:"red"}}> |</span> SOLAR<span style={{color:"red"}}> |</span> BUILDING<span style={{color:"red"}}> |</span> HVAC<span style={{color:"red"}}> |</span> FIRE FIGHTING<span style={{color:"red"}}> |</span> AGRICULTURE & RESIDENTIAL</p>
        </div>
      <footer className="footer">
      
        <Row className="foot">
        <Col xs="4" sm="4" md="4" lg="4" xl="4"><i className="fa fa-phone"></i><span style={{color:"white"}}> Toll free 1800 200 1234</span></Col>
        <Col  xs="4" sm="4"  md="4" lg="4" xl="4"><i className="fa fa-facebook"></i><span style={{color:"white"}}> www.facebook.com/cripumps</span></Col>
        <Col xs="4" sm="4"  md="4" lg="4" xl="4"><i className="fa fa-globe"></i><span style={{color:"white"}}> www.crigroups.com</span></Col>
      </Row>
        
      </footer>
    </div>
   
  );
}

export default App;

