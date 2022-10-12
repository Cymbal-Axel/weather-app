import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import data, {Cairns} from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <Card 
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={()=> alert('cerrar')}
        />
      </div>
      <hr />

      <div>
        <Cards cities={data}/>
      </div>
      <hr/>
    </div>
  );
}

export default App;
