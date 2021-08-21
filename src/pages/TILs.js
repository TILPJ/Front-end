import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { getTilList, getMySitesList } from '../modules/tils/tils';
import EmptyList from '../components/common/EmptyList';
import Filters from '../components/tils/Filters';
import TilsList from '../components/tils/TilsList';
import TilDrawer from '../components/tils/TilDrawer';

const StyledTils = styled.div`
  position: relative;
  padding: 80px 282px 100px 320px;
  height: 100%;
  min-height: 100vh;
  background: #f4f7fc;
`;

const Tils = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { tilList, mySitesList } = useSelector(({ tils }) => ({
    tilList: tils.tils.list,
    mySitesList: tils.mySites.list,
  }));
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [isTilDrawerOpen, setIsTilDrawerOpen] = useState(false);

  const [tilDrawerContent, setTilDrawerContent] = useState('');

  const handleFilterSelect = siteName => {
    setSelectedFilter(siteName);
  };
  const handleTilDrawerOpen = content => {
    setTilDrawerContent(content);
    setIsTilDrawerOpen(!isTilDrawerOpen);
  };
  const handleLectureAdd = () => {
    return history.push({ pathname: '/lectures' });
  };

  useEffect(() => {
    dispatch(getMySitesList());
  }, []);
  useEffect(() => {
    dispatch(getTilList(selectedFilter));
  }, [selectedFilter]);

  let content = '';
  content = 'test';
  if (!mySitesList || mySitesList.length === 0) {
    content = <EmptyList handleLectureAdd={handleLectureAdd} />;
  } else {
    content = (
      <>
        <Filters
          selectedFilter={selectedFilter}
          mySitesList={mySitesList}
          handleFilterSelect={handleFilterSelect}
        />
        <TilsList
          handleTilDrawerOpen={handleTilDrawerOpen}
          // eslint-disable-next-line no-unneeded-ternary
          isAddIconActivate={selectedFilter !== '전체'}
          tilList={tilList}
        />
        <TilDrawer
          selectedFilter={selectedFilter}
          tilDrawerContent={tilDrawerContent}
          isTilDrawerOpen={isTilDrawerOpen}
          handleTilDrawerOpen={handleTilDrawerOpen}
        />
      </>
    );
  }
  return <StyledTils>{content}</StyledTils>;
};
export default Tils;
