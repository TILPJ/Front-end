import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import styled from 'styled-components';
import DailyTils from './DailyTils';
import AddIcon from '../../assets/lectures/add-icon.svg';

const StyledTilsList = styled.div`
  position: relative;
  width: 100%;
  & > .addIconWrapper {
    position: fixed;
    right: 266px;
    bottom: 138px;
    width: 84px;
    height: 84px;
    cursor: pointer;
    & > img {
      width: 100%;
    }
  }
`;

const TilsList = ({ handleTilDrawerOpen, isAddIconActivate, tilList }) => {
  let content = '';

  const dailyTilsList = [];
  if (tilList.length !== 0) {
    let currentDate = '';
    tilList.forEach(til => {
      const targetIndex = dailyTilsList.length;
      if (til.date !== currentDate) {
        dailyTilsList.push({
          key: Math.ceil(Math.random() * 100000),
          date: til.date,
          tils: [],
        });
        dailyTilsList[targetIndex].tils.push(til);
      } else if (til.date === currentDate) {
        dailyTilsList[targetIndex - 1].tils.push(til);
      }
      currentDate = til.date;
    });
    content = dailyTilsList.map(dailyTils => {
      return (
        <DailyTils
          key={dailyTils.key}
          handleTilDrawerOpen={handleTilDrawerOpen}
          dailyTils={dailyTils}
        />
      );
    });
  }
  return (
    <StyledTilsList>
      {content}
      {isAddIconActivate ? (
        <div className="addIconWrapper">
          <img
            src={AddIcon}
            alt="add-icon"
            onClick={handleTilDrawerOpen}
            onKeyDown={handleTilDrawerOpen}
          />
        </div>
      ) : (
        ''
      )}
    </StyledTilsList>
  );
};

TilsList.propTypes = {
  handleTilDrawerOpen: func.isRequired,
  isAddIconActivate: bool.isRequired,
  tilList: arrayOf(
    shape({
      id: number,
      owner: string,
      site_info: shape({
        id: number,
        name: string,
      }),
      course_info: shape({
        id: number,
        title: string,
        instructor: string,
        thumbnail_link: string,
        description: string,
        course_link: string,
      }),
    })
  ),
};
TilsList.defaultProps = {
  tilList: arrayOf(
    shape({
      id: 0,
      owner: '',
      site_info: shape({
        id: 0,
        name: '',
      }),
      course_info: shape({
        id: 0,
        title: '',
        instructor: '',
        thumbnail_link: '',
        description: '',
        course_link: '',
      }),
    })
  ),
};

export default TilsList;
