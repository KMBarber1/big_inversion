
import './App.css';
import PersonCard from "./components/PersonCard";
import FunctionPersonCard from "./components/FunctionPersonCard"

function App() {
  return (
    <div className="App">

      <FunctionPersonCard firstname="Jane" lastname="Doe" age={45} haircolor="Black"/>
      <FunctionPersonCard firstname={"John"} lastname={"Smith"} age={88} haircolor={"Blonde"}/>
      <FunctionPersonCard firstname={"Millard"} lastname={"Fillmore"} age={50} haircolor={"Brown"}/>
      <FunctionPersonCard firstname={"Maria"} lastname={"Smith"} age={62} haircolor={"Red"}/> 

      <PersonCard firstname={"Jane"} lastname={"Doe"} age={45} haircolor={"Black"}/>
      <PersonCard firstname={"John"} lastname={"Smith"} age={88} haircolor={"Blonde"}/>
      <PersonCard firstname={"Millard"} lastname={"Fillmore"} age={50} haircolor={"Brown"}/>
      <PersonCard firstname={"Maria"} lastname={"Smith"} age={62} haircolor={"Red"}/>

    </div>
  );
}

export default App;
