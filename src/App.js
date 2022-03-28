import "./App.css";
import TodoListTemplate from "./components/TodoListTemplate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoListTemplate>
        <Header />
        <TodoList></TodoList>
      </TodoListTemplate>
    </div>
  );
}

export default App;
