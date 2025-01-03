import './App.css';
import Fristclasscomponent from './componets/Fristclasscomponent';
import Fristfuntioncomp from './componets/Fristfunctioncomp';
import { ConditionalRendering } from './componets/functioncomponent/ConditionalRendering';
import { CounterApp } from './componets/functioncomponent/CounterApp';
import Eventfundemo from './componets/functioncomponent/Eventfundemo';
import Propsdemo01 from './componets/functioncomponent/Propsdemo01';
import { Propsdemoinfun } from './componets/functioncomponent/Propsdemoinfun';
import { Statedemo } from './componets/functioncomponent/Statedemo';

function App() { 
  let name= "Happy"
  return (
    <div className="container">
      <h1 className="text-primary">Hello React</h1>
      {/* <h1>Hello Sachin</h1>
      <h2>Name = {name}</h2>
      <Fristfuntioncomp/>
      <Fristclasscomponent/> */}
      {/* <Propsdemoinfun username="Sachin" address="Makwana"/> */}
      {/* <Propsdemo01  mobileno={9913727487} isMarried={true}/>

      <Propsdemo01 username="Sachin" mobileno={9913727487} isMarried={true}> <h1>Hello bro</h1>
      <ConditionalRendering mobileno={9913727487} isMarried={true}/>
      </Propsdemo01>
      <br/> 
      <ConditionalRendering username="Sachin" mobileno={9913727487} isMarried={false}/> 
      <Eventfundemo/>
       <CounterApp/> */}
       <Statedemo/>
    </div> 
  ); 
}

export default App;
