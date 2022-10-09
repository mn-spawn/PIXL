/* crediting github: briancodex for to do functionality used his components
from https://github.com/briancodex/react-todo-app-v1 for to do section of this
react app */
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import ReviewState from './components/ReviewState';
import NavBar from './components/NavBar';
import IntroPage from './components/IntroPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
        <Router>
          <header><NavBar/></header>
          <Routes>
            <Route path = "/aboutUs" element={<AboutUs/>} exact /> 
              <Route path = "/" element={<IntroPage/>} exact />
              <Route path = "/linklist" element={<TodoList className="todolist"/>} exact />
              <Route path = '/review' element={<ReviewState/>} exact />
            </Routes>
        </Router>
  );
}

export default App;