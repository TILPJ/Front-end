import { bool, func } from 'prop-types';
import styled from 'styled-components';

const StyledTilDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  background-color: #fff;
  width: 440px;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isTilDrawerOpen }) =>
    isTilDrawerOpen ? 'translateX(0)' : 'translateX(100%)'};
`;
const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const TilDrawer = ({ isTilDrawerOpen, handleTilDrawerOpen }) => {
  let content = '';
  content = 'test';
  return (
    <>
      <StyledTilDrawer isTilDrawerOpen={isTilDrawerOpen}>
        {content}
      </StyledTilDrawer>
      {isTilDrawerOpen ? <Dimmed onClick={handleTilDrawerOpen} /> : ''}
    </>
  );
};

TilDrawer.propTypes = {
  isTilDrawerOpen: bool.isRequired,
  handleTilDrawerOpen: func.isRequired,
};

export default TilDrawer;
