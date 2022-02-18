import logo from './logo.svg';
import './App.css';
import Primeiro from './components/primeiro'
import CompPadrao, {Component1, Component2} from './components/Multi.js'

function App() {
  return (
    <div className="App">
      <Primeiro></Primeiro>
    <h2>Primeiro Componente pasta app.</h2>  
    </div>
  );
}

export default App;

//FuncãoAnonima e exportando direto
//export default function(){
  //return <h3>Primeiro Componente</h3>
//}

//Usando Arrow Function
//export defaut () => {
  //return <h2>Primeiro Componente</h2>
//}

//Usando arrow Function com o return Implicito
//export defaut () => <h2>Primeiro Componente</h2>

