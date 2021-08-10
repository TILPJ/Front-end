import styled from 'styled-components';
import Logo from '../../assets/common/sidebar_logo.svg';
import Logout from '../../assets/common/sidebar_logout.svg';
import MenuTab from './MenuTab';

const StyledSidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
    }
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebarWrapper>
      <div className="sidebar">
        <div className="logo-wrapper">
          <img src={Logo} alt="sidebar-logo" />
        </div>
        <div className="menus">
          <MenuTab menu="내강의목록" />
          <MenuTab menu="TodayILearned" />
        </div>
        <div className="logout-wrapper">
          <img src={Logout} alt="sidebar-logout" />
        </div>
      </div>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
