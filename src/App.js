import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Drawer from './components/common/Drawer';
import Dimmed from './components/common/Dimmed';
import Header from './components/common/Header';
import Home from './pages/Home';
import Lectures from './pages/Lectures';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Dimmed />
      <Drawer />
      <Header />
      <Switch>
        <Route path="/lectures" exactcomponent={Lectures} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default App;
