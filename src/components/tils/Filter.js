import { string, func } from 'prop-types';
import styled from 'styled-components';

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 14px;
  width: auto;
  height: 35px;
  border-radius: 11px;
  background-color: ${({ isActive }) => (isActive ? '#F1928B' : '#afafaf')};
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  & ~ & {
    margin-left: 11px;
  }
`;

const Filter = ({ selectedFilter, siteName, handleFilterSelect }) => {
  return (
    <StyledFilter
      isActive={selectedFilter === siteName}
      onClick={() => handleFilterSelect(siteName)}
    >
      {siteName}
    </StyledFilter>
  );
};

Filter.propTypes = {
  selectedFilter: string.isRequired,
  siteName: string.isRequired,
  handleFilterSelect: func.isRequired,
};
export default Filter;
