import Index from './pages/Index';
import './App.css';
import { Route } from 'react-router-dom';
import Main from './pages/Main';

const App = () => (


  <>
  <Route exact path="/" component={Index} />
  <Route path="/home" component={Main} />
  </>
);

export default App;

// <BrowserRouter basename={PUBLIC_URL}>
{/* <Suspense fallback={<Main />}>
<Switch>
  <Route exact path="/" component={Index} />
  <Route path="/about" component={About} />
  <Route path="/projects" component={Projects} />
  <Route path="/contact" component={Contact} />
  <Route path="/resume" component={Resume} />
  <Route component={NotFound} status={404} />
</Switch>
</Suspense>
</BrowserRouter> */}