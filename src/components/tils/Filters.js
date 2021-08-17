import { arrayOf, string, func } from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';

const StyledFilters = styled.div`
  display: flex;
`;

const Filters = ({ selectedFilter, mySitesList, handleFilterSelect }) => {
  const filters = mySitesList.map((siteName, index) => (
    <Filter
      key={`${index + 1}${siteName}`}
      selectedFilter={selectedFilter}
      siteName={siteName}
      handleFilterSelect={handleFilterSelect}
    />
  ));
  return (
    <StyledFilters>
      {filters}
      <Filter
        selectedFilter={selectedFilter}
        siteName="전체"
        handleFilterSelect={handleFilterSelect}
      />
    </StyledFilters>
  );
};
Filters.propTypes = {
  selectedFilter: string.isRequired,
  mySitesList: arrayOf(string).isRequired,
  handleFilterSelect: func.isRequired,
};
export default Filters;
