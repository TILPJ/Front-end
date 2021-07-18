import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openDrawer } from '../../modules/drawer';
import logo from '../../assets/common/header_logo.svg';

const StyledHeaderWrapper = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 80px;
  background: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    height: 100%;
    & > img {
      margin-left: 10px;
    }
  }
`;
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 48px;
    height: 4px;
    background-color: #333333;
  }
  div ~ div {
    margin-top: 8px;
  }
`;
const Spacer = styled.div`
  height: 80px;
`;
const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledHeaderWrapper>
        <div className="header">
          <img src={logo} alt="header-logo" />
          <StyledBurger onClick={() => dispatch(openDrawer())}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </div>
      </StyledHeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
