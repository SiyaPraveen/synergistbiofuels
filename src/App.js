import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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


    <div className="container d-flex flex-column flex-md-row menuOuterWrapper"  ref={header}>
      <div className="col-5 d-flex">
      <div className="col-6 menuLogoWrapper pt-2">
        <img src={process.env.PUBLIC_URL+"/logo.png"} alt="Synergist" />
      </div>
      <div className="col-6 fssaiWrapper">
        <img src={process.env.PUBLIC_URL+"/fssai.png"} alt="fssai" />
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
                Our Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Our Vision
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
    <div className="d-flex mt-1">
      <div className="col-3 mediaWrapper">
        <ul>
          <li>
          <svg class="svg-inline--fa fa-facebook-f" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
          </li>
        </ul>
      </div>
      <p className="col-9 quates">If you are concerned about your environmental footprint and want a more
         <br/> eco friendly option then <span>Bio Diesel</span> is an excellent option for you</p>
    </div>
     <h3>About Us</h3>
     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <div className="col-12 overflow-hidden videoWrapper">
     <p>Let us enhanse the energy security for India by creating <br/>
     <span>A Biofuel economy</span> 
     </p>
     <video autoplay="autoplay" muted loop id="myVideo">
        <source src="biodeisel.mp4" type="video/mp4" />
      </video>
     
     </div>
     
     
      <form ref={form} onSubmit={sendMail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required></textarea>
          <input type="submit" value="send"/>
      </form>
      <br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/>
      <br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/><br/>fsfd<br/>
      
    </div>
  );
}

export default App;
