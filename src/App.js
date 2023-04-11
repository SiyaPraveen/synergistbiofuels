
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL+'/logo.png'} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
