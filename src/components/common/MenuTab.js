import styled from 'styled-components';
import { func, string } from 'prop-types';
import Lectures from '../../assets/common/sidebar_lectures-icon.svg';
import TIL from '../../assets/common/sidebar_til-icon.svg';

const StyledMenuTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 246px;
  height: 64px;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  & > img {
    margin-right: 8px;
    width: 25px;
  }
`;

const MenuTab = ({ menu, handleMenuLink }) => {
  return (
    <StyledMenuTab onClick={() => handleMenuLink(menu)}>
      {menu === '내강의목록' ? (
        <img src={Lectures} alt="lectures-icon" />
      ) : (
        <img src={TIL} alt="til-icon" />
      )}
      {menu}
    </StyledMenuTab>
  );
};

MenuTab.propTypes = {
  menu: string.isRequired,
  handleMenuLink: func.isRequired,
};

export default MenuTab;
