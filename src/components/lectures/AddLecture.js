import { func } from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import OptionArrow from '../../assets/lectures/option-arrow.svg';
import {
  getSitesList,
  getLecturesList,
  registerMyNewLecture,
} from '../../modules/lectures/lectures';

const StyledAddLecture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  padding: 37px 80px 73px;
  width: 527px;
  height: 525px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  transform: translate(-50%, -50%);
  & > .introduction {
    margin-bottom: 50px;
    font-size: 34px;
  }
  & > .content {
    position: relative;
    margin-bottom: 18px;
    width: 100%;
    font-size: 26px;
    & > .label {
      margin-bottom: 18px;
    }
    & > .selectBox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 21px;
      height: 52px;
      border-radius: 10px;
      box-sizing: border-box;
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
      & > img {
        width: 9px;
        height: 18px;
      }
    }
    & > .selectOptions {
      position: absolute;
      top: 97px;
      z-index: 10;
      width: 100%;
      max-height: 160px;
      border-radius: 10px;
      background: #fff;
      box-sizing: border-box;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
      font-weight: 500;
      font-size: 20px;
      overflow-y: scroll;
      & > li {
        padding: 14px 21px;
        cursor: pointer;
        &:hover {
          background: rgba(0, 0, 0, 0.16);
        }
      }
    }
  }
  & > .site {
  }
  & > .lecture {
  }
  & > .buttonWrapper {
    margin-top: 65px;
    & > button {
      width: 174px;
      height: 40px;
      border: 0;
      border-radius: 5px;
      background: #f1928b;
      color: #fff;
      cursor: pointer;
    }
  }
`;

const AddLecture = ({ handleAddLectureMount }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { sitesList, lecturesList, lecturesError } = useSelector(
    ({ lectures }) => ({
      sitesList: lectures.sites.list,
      lecturesList: lectures.lectures.list,
      lecturesError: lectures.lectures.error,
    })
  );
  const [isSitesOptionsOpen, setIsSitesOptionsOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState({
    id: null,
    name: '선택해주세요',
  });
  const [isLecturesOptionsOpen, setIsLecturesOptionsOpen] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState({
    id: null,
    name: '선택해주세요',
  });

  const handleOptionsOpen = target => {
    if (target === 'sites') {
      setIsSitesOptionsOpen(!isSitesOptionsOpen);
      setIsLecturesOptionsOpen(false);
    }
    if (target === 'lectures') {
      setIsLecturesOptionsOpen(!isLecturesOptionsOpen);
      setIsSitesOptionsOpen(false);
    }
  };
  const handleOptionSelect = (category, id, name) => {
    if (category === 'sites') {
      setSelectedSite({
        id,
        name,
      });
      setIsSitesOptionsOpen(!isSitesOptionsOpen);
    }
    if (category === 'lectures') {
      setSelectedLecture({
        id,
        name,
      });
      setIsLecturesOptionsOpen(!isLecturesOptionsOpen);
    }
  };
  const handleLectureRegister = () => {
    handleAddLectureMount(false);
    dispatch(registerMyNewLecture(selectedSite.id, selectedLecture.id));
    history.go(0);
  };

  useEffect(() => {
    dispatch(getSitesList());
  }, []);
  useEffect(() => {
    dispatch(getLecturesList(selectedSite.name));
    setSelectedLecture({
      id: null,
      name: '선택해주세요',
    });
  }, [selectedSite]);

  const isLecturesNotReady = lecturesError || !lecturesList;
  let sitesOptions = '';
  let lecturesOptions = '';
  if (sitesList.length !== 0) {
    sitesOptions = sitesList.map(site => (
      <li
        key={`${site.id}${site.name}`}
        onClick={() => handleOptionSelect('sites', site.id, site.name)}
        onKeyDown={() => handleOptionSelect('sites', site.id, site.name)}
      >
        {site.name}
      </li>
    ));
  }
  if (isLecturesNotReady) {
    lecturesOptions = <li>사이트를 먼저 선택해주세요</li>;
  } else if (lecturesList.length !== 0) {
    lecturesOptions = lecturesList.map(lecture => (
      <li
        key={`${lecture.id}${lecture.title}`}
        onClick={() =>
          handleOptionSelect('lectures', lecture.id, lecture.title)
        }
        onKeyDown={() =>
          handleOptionSelect('lectures', lecture.id, lecture.title)
        }
      >
        {lecture.title}
      </li>
    ));
  }
  return (
    <StyledAddLecture>
      <div className="introduction">학습 강의를 등록해주세요</div>
      <div className="site content">
        <div className="label">학습 사이트 선택</div>
        <div
          className="selectBox"
          onClick={() => handleOptionsOpen('sites')}
          onKeyDown={() => handleOptionsOpen('sites')}
          role="button"
          tabIndex={0}
        >
          <div className="selected">{selectedSite.name}</div>
          <img src={OptionArrow} alt="option arrow" className="arrow" />
        </div>
        <ul
          className="selectOptions"
          style={{ display: isSitesOptionsOpen ? 'block' : 'none' }}
        >
          {sitesOptions}
        </ul>
      </div>
      <div className="lecture content">
        <div className="label">강의명 선택</div>
        <div
          className="selectBox"
          onClick={() => handleOptionsOpen('lectures')}
          onKeyDown={() => handleOptionsOpen('lectures')}
          role="button"
          tabIndex={0}
        >
          <div className="selected">{selectedLecture.name}</div>
          <img src={OptionArrow} alt="option arrow" className="arrow" />
        </div>
        <ul
          className="selectOptions"
          style={{ display: isLecturesOptionsOpen ? 'block' : 'none' }}
        >
          {lecturesOptions}
        </ul>
      </div>
      <div className="buttonWrapper">
        <button type="button" onClick={handleLectureRegister}>
          등록하기
        </button>
      </div>
    </StyledAddLecture>
  );
};

AddLecture.propTypes = {
  handleAddLectureMount: func.isRequired,
};
export default AddLecture;
