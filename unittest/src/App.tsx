import "./App.css";
import { Form } from "./Form/Form";

function App() {
  return (
    <div className="App">
      <Form name="naerim" onSubmit={() => console.log("naerim")} />
    </div>
  );
}

export default App;
