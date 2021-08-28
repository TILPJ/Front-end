import { func, string } from 'prop-types';
import { Redirect, useHistory } from 'react-router';
import styled from 'styled-components';
import Logo from '../../assets/common/sidebar_logo.svg';
import Logout from '../../assets/common/sidebar_logout.svg';
import MenuTab from './MenuTab';

const StyledSidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 285px;
  height: 100%;
  background: #f1928b;
  & > .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    & > .logo-wrapper {
      padding-top: 28px;
    }
    & > .menus {
      margin-top: 30px;
    }
    & > .logout-wrapper {
      position: absolute;
      bottom: 40px;
      & > img {
        cursor: pointer;
      }
    }
  }
`;

const Sidebar = ({ userToken, savedToken, handleLogout }) => {
  const history = useHistory();
  if (!userToken && !savedToken) {
    return <Redirect to="/" />;
  }
  const handleMenuLink = menu => {
    if (menu === '내강의목록') {
      history.push('/lectures');
    } else if (menu === 'TodayILearned') {
      history.push('/tils');
    }
  };
  return (
    <StyledSidebarWrapper>
      <div className="sidebar">
        <div className="logo-wrapper">
          <img src={Logo} alt="sidebar-logo" />
        </div>
        <div className="menus">
          <MenuTab menu="내강의목록" handleMenuLink={handleMenuLink} />
          <MenuTab menu="TodayILearned" handleMenuLink={handleMenuLink} />
        </div>
        <div className="logout-wrapper">
          <img
            src={Logout}
            alt="sidebar-logout"
            onClick={handleLogout}
            onKeyDown={handleLogout}
          />
        </div>
      </div>
    </StyledSidebarWrapper>
  );
};

Sidebar.propTypes = {
  userToken: string,
  savedToken: string,
  handleLogout: func.isRequired,
};
Sidebar.defaultProps = {
  userToken: '',
  savedToken: '',
};

export default Sidebar;
