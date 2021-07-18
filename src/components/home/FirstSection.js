import styled from 'styled-components';
import CenterObject from '../../assets/home/first-section_center-object.svg';
import RightObject from '../../assets/home/first-section_right-object.svg';
import Illustration from '../../assets/home/first-section_illustration.svg';
import IllustrationPart from '../../assets/home/first-section_illustration-part.svg';
import BeginButton from '../../assets/home/first-section_begin-button.svg';
import leftTopObject from '../../assets/home/first-section_left-top-object.svg';
import rightTopObject from '../../assets/home/first-section_right-top-object.svg';
import PinWheel from '../../assets/home/first-section_pinwheel.svg';

const StyledFirstSection = styled.div`
  position: relative;
  width: 100%;
  height: 529px;
  min-width: 1910px;
  overflow: hidden;
  & > .smallObjects {
    position: relative;
    width: 100%;
    height: 100%;
    & > .leftTopUpperObject {
      position: absolute;
      top: 5%;
      left: 9%;
    }
    & > .leftTopUnderObject {
      position: absolute;
      top: 20%;
      left: 2%;
    }
    & > .rightTopObject {
      position: absolute;
      top: 20%;
      right: 5%;
    }
    & > .pinwheel {
      position: absolute;
      right: 15%;
      bottom: 29%;
    }
  }
  & > .centerObject {
    position: absolute;
    right: 77%;
    bottom: -15%;
    left: 23%;
  }
  & > .rightObject {
    position: absolute;
    right: -23%;
  }
  & > .beginButton {
    position: absolute;
    bottom: 29%;
    left: 20%;
  }
  & > .illustrationWrapper {
    position: absolute;
    top: 10%;
    right: 55%;
    left: 45%;
    & > .illustration {
      position: absolute;
    }
    & > .illustrationPart {
      position: absolute;
    }
  }
`;
const StyledCopy = styled.div`
  position: absolute;
  top: 29%;
  left: 20%;
  color: #20160f;
  & > p {
    font-size: 50px;
    font-family: 'Apple SD Gothic Neo';
    font-weight: 500;
    margin-bottom: 15px;
    & > .stress {
      font-weight: 700;
    }
  }
`;

const FirstSection = () => {
  return (
    <StyledFirstSection>
      <div className="smallObjects">
        <img
          src={leftTopObject}
          className="leftTopUpperObject"
          alt="left top object"
        />
        <img
          src={leftTopObject}
          className="leftTopUnderObject"
          alt="left top object"
        />
        <img
          src={rightTopObject}
          className="rightTopObject"
          alt="right top object"
        />
        <img src={PinWheel} className="pinwheel" alt="pinwheel" />
      </div>
      <img src={CenterObject} className="centerObject" alt="center object" />
      <img src={RightObject} className="rightObject" alt="right object" />
      <StyledCopy>
        <p>당신의 기록을 이곳에</p>
        <p>
          <span className="stress">오늘도 TILUP 하세요</span>
        </p>
      </StyledCopy>
      <img src={BeginButton} className="beginButton" alt="begin button" />
      <div className="illustrationWrapper">
        <img src={Illustration} className="illustration" alt="illustration" />
        <img
          src={IllustrationPart}
          className="illustrationPart"
          alt="illustration part"
        />
      </div>
    </StyledFirstSection>
  );
};
export default FirstSection;
