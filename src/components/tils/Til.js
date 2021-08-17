import { shape, number, string, bool } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Inflearn } from '../../assets/tils/inflearn-logo.svg';

const StyledTil = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  height: 116px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 22px;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  & > .logo {
    width: 102px;
    text-align: center;
  }
  & > .title {
    padding: 0 14px;
    width: 395px;
  }
  & > .section {
    padding: 0 14px;
    width: 280px;
  }
  & > .date {
    padding: 0 14px;
    width: 200px;
  }
  & > .memo {
    width: 210px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & > .more {
    position: absolute;
    right: 20px;
    bottom: 16px;
    font-size: 14px;
    color: #989898;
    cursor: pointer;
  }
`;

const Til = ({ til }) => {
  return (
    <StyledTil>
      <div className="logo">
        <Inflearn />
      </div>
      <div className="title">{til.course_title}</div>
      <div className="section">{til.section_name}</div>
      <div className="date">{til.date}</div>
      <div className="memo">{til.memo}</div>
      <div className="more">더보기</div>
    </StyledTil>
  );
};

Til.propTypes = {
  til: shape({
    id: number.isRequired,
    owner: string.isRequired,
    date: string.isRequired,
    star: bool.isRequired,
    memo: string.isRequired,
    course_title: string.isRequired,
    section_name: string.isRequired,
  }).isRequired,
};

export default Til;
