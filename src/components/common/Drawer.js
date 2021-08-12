import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import AuthEntry from '../home/auth/AuthEntry';
import Login from '../home/auth/Login';
import FindEmail from '../home/auth/FindEmail';
import NoUserInfo from '../home/auth/NoUserInfo';
import NewPassword from '../home/auth/NewPassword';
import Register from '../home/auth/Register';
import { checkEmail, initUserEmail } from '../../modules/auth/check';
import { switchToAuthEntry } from '../../modules/auth/process';
import { closeDrawer } from '../../modules/drawer';

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  background-color: #fff;
  width: 440px;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isDrawerOpen }) =>
    isDrawerOpen ? 'translateX(0)' : 'translateX(100%)'};
`;

const Drawer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isDrawerOpen, authProcess, userToken } = useSelector(
    ({ drawer, process, user }) => ({
      isDrawerOpen: drawer.isDrawerOpen,
      authProcess: process.authProcess,
      userToken: user.token,
    })
  );
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userToken) {
      dispatch(closeDrawer());
      history.push('/lectures');
    }
  }, [userToken]);

  const handleEmailCheck = e => {
    e.preventDefault();
    dispatch(checkEmail(email));
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      // [이메일 찾기] 이메일 초기화. 적절한 위치는 아닌 것 같음
      dispatch(initUserEmail());
      dispatch(switchToAuthEntry());
    }
  }, [isDrawerOpen]);

  let drawerContent;
  if (authProcess === 'authEntry') {
    drawerContent = (
      <AuthEntry
        email={email}
        setEmail={setEmail}
        handleEmailCheck={handleEmailCheck}
      />
    );
  }
  if (authProcess === 'login') {
    drawerContent = <Login email={email} />;
  }
  if (authProcess === 'findEmail') {
    drawerContent = <FindEmail />;
  }
  if (authProcess === 'noUserInfo') {
    drawerContent = <NoUserInfo />;
  }
  if (authProcess === 'newPassword') {
    drawerContent = <NewPassword />;
  }
  if (authProcess === 'register') {
    drawerContent = <Register email={email} />;
  }

  return (
    <StyledDrawer isDrawerOpen={isDrawerOpen}>{drawerContent}</StyledDrawer>
  );
};

export default Drawer;