import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeDrawer } from '../../modules/drawer';

const StyledDimmed = styled.div`
  display: ${({ isDrawerOpen }) => (isDrawerOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 199;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Dimmed = () => {
  const dispatch = useDispatch();
  const { isDrawerOpen } = useSelector(({ drawer }) => ({
    isDrawerOpen: drawer.isDrawerOpen,
  }));
  return (
    <StyledDimmed
      isDrawerOpen={isDrawerOpen}
      onClick={() => dispatch(closeDrawer())}
    />
  );
};

export default Dimmed;
