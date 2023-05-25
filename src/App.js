// import de biblioteca
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';



//import de arquivos/paginas internas
import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'

import Customers from './pages/Customers';
import Home from './pages/Home';

const App = () => {
  return (
    <TemplateDefault>
      <BrowserRouter>
        <Switch>
        <Route path='/Customers'>
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>
          <Route path='/'>
          <TemplatePage title="Pagina Inicial" Component={Home} />
          </Route>
        </Switch>
      </BrowserRouter>
    </TemplateDefault>
  );
}

export default App;
