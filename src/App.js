import logo from './logo.svg';
import './App.css';

function App() {
  const Click=()=>
  {
    alert("LOGGED IN")
  }
  return (
<div>
<button onClick={window['alertMsg']}>Click Me</button>
    </div>
    
  );
}

export default App;