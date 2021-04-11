import "./App.css";
import "antd/dist/antd.css";
import Control from "./conponents/control";
import TodoList from "./conponents/todo list";
import Options from "./conponents/options/index";
import {Pagination} from "antd";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Todos App</h1>
      <Control />
      <Options />
      <TodoList />
      <Pagination defaultCurrent={3} total={100} />
    </div>
  );
}

export default App;
