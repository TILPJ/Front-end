import { Route, Switch, useLocation } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Drawer from './components/common/Drawer';
import Dimmed from './components/common/Dimmed';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Lectures from './pages/Lectures';

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <Dimmed />
      <Drawer />
      {location.pathname === '/' ? <Header /> : <Sidebar />}
      <Switch>
        <Route path="/lectures" exact component={Lectures} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
