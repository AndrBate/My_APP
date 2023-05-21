// import de biblioteca
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

//import de arquivos/paginas internas
import Home from './pages/Page';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
