/* crediting github: briancodex for to do functionality used his components
from https://github.com/briancodex/react-todo-app-v1 for to do section of this
react app */
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import ReviewState from './components/ReviewState';
import NavBar from './components/NavBar';

function App() {
  return (
        <Router>
          <Routes>
              <Route path = "/" element={<TodoList/>} exact />
              <Route path = '/review' element={<ReviewState/>} exact />
            </Routes>
        </Router>
  );
}

export default App;