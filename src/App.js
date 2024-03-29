import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from 'react-lazy-load';
import { faEnvelopesBulk, faGear, faHandshakeAngle, faLeaf, faMapLocationDot, faPenNib, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  const form = useRef();
  const header = useRef();
  const sendMail = (e)=>{
    e.preventDefault();
    emailjs.sendForm(
      "service_jrraleh",
      "template_j2mf8ty",
      form.current,
      "ycKqWWDhL3gVt6Rlv",

    ).then(
      result=>console.log(result),
      error=>console.log(error)
    )
  }
   
  let [location, setLocation] = useState(window.location.hash);
  
  useEffect(() => {
    setTimeout(function(){
      const offset= header.current.offsetTop;
     
      window.addEventListener(
        'scroll',
        function() {
          if (window.pageYOffset > offset) { 
            header.current.classList.add('fixedHeader');
          } else{ 
            header.current.classList.remove('fixedHeader'); 
          } 
        }
      )
    },1000)
    
  }, []);
  window.addEventListener(
    'hashchange',
    function () { 
        setLocation(window.location.hash)
    },
    false
);

  return (
    <div className="App container p-0 position-relative">
      <div className="pageWrapper">
      <img src={process.env.PUBLIC_URL+"/flower.png"} alt="flower" className="position-absolute  flowerImg"/>
      <div className="App-header   p-0 mt-0 mb-3 overflow-hidden"> 
          <div className="col-12 position-relative">
            <div className="overflow-hidden">
            <img src={process.env.PUBLIC_URL+"/logo.png"} alt="synergist" className="position-absolute logo"/>
            <img src={process.env.PUBLIC_URL+"/building2.png"} alt="building2" className="position-absolute building2"/>
            <img src={process.env.PUBLIC_URL+"/building3.png"} alt="building3" className="position-absolute building3"/>
            <img src={process.env.PUBLIC_URL+"/building4.png"} alt="building4" className="position-absolute building4"/>
            <img src={process.env.PUBLIC_URL+"/building1.png"} alt="building1" className="position-absolute mainBuilding"/>
            <img src={process.env.PUBLIC_URL+"/hand.png"} alt="hand" className="position-absolute handImg"/>
            <img src={process.env.PUBLIC_URL+"/car.png"} alt="car" className="position-absolute carImg "/>
            <img src={process.env.PUBLIC_URL+"/building2.png"} alt="building2" className="position-relative"/>
            </div>
          </div>
        </div>

    <div className="outer">
    <div className="container d-flex flex-column flex-md-row menuOuterWrapper"  ref={header}>
      <div className="col-5 d-flex">
      <div className="col-6 menuLogoWrapper">
        <img src={process.env.PUBLIC_URL+"/logo.png"} alt="Synergist" />
      </div>
      <div className="col-6 mediaWrapper mt-1">
        <ul className="d-flex">
          <li>
          <FontAwesomeIcon icon={faEnvelopesBulk} />
         </li>
         <li>
          <FontAwesomeIcon icon={faPhoneSquare} />
         </li>
         <li>
          <FontAwesomeIcon icon={faMapLocationDot} />
         </li>
        </ul>
      </div>
     
      
      </div>
      <div className="col-7 d-flex  flex-row-reverse ">
      <Navbar  expand="lg">
      <Container> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"   >
          <div className="hoverEffetWrapper position-relative">
            <Nav.Link href="/" className={ (location === "" ?" active" : "")} >Home</Nav.Link>
            </div>
            <div className="hoverEffetWrapper position-relative">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Who we are</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Biodiesel Overview
              </NavDropdown.Item> 
            </NavDropdown>
            </div>
            <div className="hoverEffetWrapper position-relative">
            <Nav.Link href="#services" className={ (location === "#services" ?" active" : "")}>Services</Nav.Link>
            </div>
            <div className="hoverEffetWrapper position-relative">
            <Nav.Link href="#career" className={ (location === "#career" ?" active" : "")}>Career</Nav.Link>
            </div>
            <Nav.Link href="#contact" className={ (location === "#contact" ?" active" : "")}>Contact US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
    </div>
    <div className="d-flex mt-1">
    <div className="col-2 gasPump"> 
      <img src="beaker.png" alt="beaker" />
      </div>
      <div className="col-8">
      <p className="col-12 quates">If you are concerned about your environmental footprint and want a more
         <br/> eco friendly option then we are here with <span>Bio Diesel</span> which is an excellent option for you
         
      </p>
      </div>
      <div className="col-2 fssaiWrapper">
        <img src={process.env.PUBLIC_URL+"/fssai.png"} alt="fssai" />
      </div>
    </div>
    </div>




    <LazyLoad>
    <div>
     <h3>
      <FontAwesomeIcon icon={faPenNib} />
      About Us
      <FontAwesomeIcon icon={faLeaf}/>
      </h3>
     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <div className="col-12 overflow-hidden videoWrapper">
     <p>Join with us <br/> Let us enhanse the energy security for India by creating <br/>
     <span>A Biofuel economy</span><br/><br/>
     <a class="button" href="#contact">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Contact Us
      </a>
     </p>
     <LazyLoad offset={100}>
     <video autoplay="autoplay" muted loop id="myVideo">
        <source src="biodeisel.mp4" type="video/mp4" />
      </video>
     </LazyLoad>
     </div>
     <div className="missionOuter">
      <div className="missionWrapper">
        <div><img src="diesel1.jpg" alt="diesel" />
        <div>
          <h4>Biodiesel Overview?</h4>
          <p>
          Biodiesel is a form of renewable and biodegradable diesel fuel derived from plants, animals or recycled restaurant grease.
          It is a cleaner-burning replacement for petroleum-based diesel fuel. Our biodiesel team is focused on providing quality fuel solution that intelligently address the growing demand for bio based environment friently diesel.
          <h5>Biodiesel Production Process</h5>
          This is the process of producing the biodiesel, through the chemical reactions of transesterification and esterification. This involves vegetable or animal fats and oils being reacted with short-chain alcohols. 
          
          </p>
        </div>
        </div>
        </div>
        <div className="vissionWrapper">
          <div className="d-flex">
            <div className="rightPading">
          <div>
            <h4>Biodiesel Advantages</h4>
          <ul>
            <li>Easy to use</li>
            <li>Superior Lubricity</li>
            <li>Better Engine Performance</li>
            <li>Longer Engine life</li>
            <li>Increases energy security, improves air quality and the environment</li>
          </ul>
          </div>
          <img src="diesel3.jpg" alt="diesel" />
            </div>
            <div>
              <div>
              <h4>Blending Ratio of Biodiesel</h4>
              <p>Biodiesel can be used in any diesel engine and can be mixed with petroleum diesel in any blend including pure biodiesel (B100).
                The most commonly used blend B20 is a higher-level blend containing up to 20 percent of bio diesel. 
              </p>
              </div>
              <img src="category.jpg" alt="diesel" />
            </div>
          </div> 
      </div>
     </div> 
    </div>
    </LazyLoad>

     <LazyLoad offset={100}>
      <div>
     <h3>
      <FontAwesomeIcon icon={faGear}/>
      Services
      <FontAwesomeIcon icon={faLeaf}/>
     </h3>
      <div className="d-flex">
        <div className="col-3 p-1">
          <div className="card">
            <img src="boat.png" alt="boat"/>
            <hr className="mb-0"/>
            <p className="p-2 mb-0">We provide quality bio fuel for marine requirments</p>
          </div>
        </div>
        <div className="col-3 p-1">
          <div className="card">
            <img src="truck.png" alt="truck"/>
            <hr className="mb-0"/>
            <p className="p-2 mb-0">We provide all types of bio diesel blends for heavy vehicles</p>
          </div>
        </div>
        <div className="col-3 p-1">
        <div className="card">
            <img src="light-car.png" alt="car"/>
            <hr className="mb-0"/>
            <p className="p-2 mb-0">We distribute bio diesel for all types light vehicles with diesel engine</p>
          </div>
        </div>
        <div className="col-3 p-1">
        <div className="card">
            <img src="machine.png" alt="machine"/>
            <hr className="mb-0"/>
            <p className="p-2 mb-0">We supply bio diesel for heavy machineries and generators</p>
          </div>
        </div>
      </div>
      <div className="col-12 serviceBanner position-relative">
        <img src="serviceBg.jpg" alt="serviceBanner" />
        <p>Biodiesel can reduce carbon emmissions and <br/>allow people to burn a cleaner form of energy</p>
      </div>
      </div>
      </LazyLoad>


    <LazyLoad>
      <div>
    <h3>
      <FontAwesomeIcon icon={faHandshakeAngle}/>
      Career
      <FontAwesomeIcon icon={faLeaf}/>
     </h3> 
     <div className="careerWrapper d-flex overflow-hidden">
     <div className="col-5">
<img src="career.jpg" alt="career" />
     </div>
     <div className="col-7 position-relative">
     <p className="quates2"> or whatsapp us on <br/> <span>XXX-XXX-XXXX </span></p>
      <p className="quates2"><span>praveendas@synergistbiofuels.com </span></p>
      <p>
        Currently no open position is available.<br/>
         If you are interested to work with us,<br/> feel free to send your resume to 
      </p>
     </div>
     </div>
     </div>
     </LazyLoad>



      <form ref={form} onSubmit={sendMail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required></textarea>
          <input type="submit" value="send"/>
      </form>
     </div>
  );
}

export default App;
