import emailjs from "emailjs-com";
import { useRef } from "react";
import './App.css';

function App() {
  const form = useRef();
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
  return (
    <div className="App">
      
      <header className="App-header container"> 
        <p>
             Something Big is Coming Your Way
        </p>
        <span
          className="App-link" 
          rel="noopener noreferrer" 
        >
         Drop By Again Soon
        </span>
      </header>

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
