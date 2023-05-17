import logo from './logo.svg';
import './App.css';
import Questao01X from './componentes/Questao01';
import Questao02 from './componentes/Questao02';
import Questao03 from './componentes/Questao03';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Questao01X/>
          <Questao02/>
          <Questao03/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
