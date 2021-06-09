import "./App.css";
import Control from "./conponents/control";
import TodoList from "./conponents/todo list";
import Options from "./conponents/options/index";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Todos App</h1>
      <Control />
      <Options />
      <TodoList />
    </div>
  );
}

export default App;
