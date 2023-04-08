import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="text-blue-500">
        Test tailwind <div className="App__here">here</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="bg-slate-50">Click here to get weather</button>
      </header>
    </div>
  );
}

export default App;
