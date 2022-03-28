import "./App.css";
import TodoListTemplate from "./components/TodoListTemplate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import PlusButton from "./components/PlusButton";

function App() {
  return (
    <div>
      <TodoListTemplate>
        <Header />
        <TodoList></TodoList>
        <Form />
      </TodoListTemplate>
      <PlusButton />
    </div>
  );
}

export default App;
