import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <Card 
          max={'25*'}
          min={'12*'}
          name={'italia'}
          img={'image'}
          onClose={()=> alert('cerrar')}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
