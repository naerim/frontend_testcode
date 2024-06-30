import "./App.css";
import { Form } from "./01-first-test/Form";

function App() {
  return (
    <div className="App">
      <Form name="naerim" onSubmit={() => console.log("naerim")} />
    </div>
  );
}

export default App;
