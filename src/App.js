import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <Card 
          max={'max'}
          min={'min'}
          name={'name'}
          img={'image'}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
