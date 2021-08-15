import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Drawer from './components/common/Drawer';
import Dimmed from './components/common/Dimmed';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Lectures from './pages/Lectures';
import { logout, maintainLogin } from './modules/auth/user';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userToken } = useSelector(({ user }) => ({
    userToken: user.token,
  }));
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userToken');
  };
  const savedToken = localStorage.getItem('userToken');
  if (savedToken && !userToken) {
    dispatch(maintainLogin(savedToken));
  }

  return (
    <>
      <GlobalStyles />
      <Dimmed />
      <Drawer />
      {location.pathname === '/' ? (
        <Header />
      ) : (
        <Sidebar
          handleLogout={handleLogout}
          userToken={userToken}
          savedToken={savedToken}
        />
      )}
      <Switch>
        <Route path="/lectures" exact component={Lectures} />
        <Route
          path="/"
          exact
          render={() => <Home userToken={userToken} savedToken={savedToken} />}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
