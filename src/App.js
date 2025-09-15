import "./App.css";
import Goal from "./Conditional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Menunjukkan Kondisi */}
        <div>
          <p>Kondisi :</p>
        </div>
        {/* true = GOAL, false = MISSED */}
        <Goal isGoal={true} />
      </header>
    </div>
  );
}

export default App;
