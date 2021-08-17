/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Til from './Til';

const StyledDailyTils = styled.div`
  & > .date {
    margin-top: 50px;
    margin-bottom: 25px;
    font-family: 'Apple SD Gothic Neo';
    font-weight: 700;
    font-size: 32px;
  }
`;

const DailyTils = ({ dailyTils }) => {
  let content = '';
  content = dailyTils.tils.map(til => {
    return <Til key={`${til.date.replace(/-/g, '')}${til.id}`} til={til} />;
  });
  return (
    <StyledDailyTils>
      <div className="date">{dailyTils.date}</div>
      <div className="tils">{content}</div>
    </StyledDailyTils>
  );
};

export default DailyTils;
