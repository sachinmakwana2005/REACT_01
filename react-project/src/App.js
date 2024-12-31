import './App.css';
import Fristclasscomponent from './componets/Fristclasscomponent';
import Fristfuntioncomp from './componets/Fristfunctioncomp';
import { Propsdemoinfun } from './componets/functioncomponent/Propsdemoinfun';

function App() { 
  let name= "Happy"
  return (
    <div className="container">
      <h1 className="text-primary">Hello React</h1>
      {/* <h1>Hello Sachin</h1>
      <h2>Name = {name}</h2>
      <Fristfuntioncomp/>
      <Fristclasscomponent/> */}
      <Propsdemoinfun username="Sachin" address="Makwana"/>
    </div>
  );
}

export default App;
