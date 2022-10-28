
import './App.css';
import InputTodo from './component/InputTodo';
import TodoList from './component/TodoList';

function App() {

  return (
    <div className="App" >
     <h1>todo list</h1>
     <InputTodo />
    
     <TodoList />
    
    </div>
  );
}

export default App;
