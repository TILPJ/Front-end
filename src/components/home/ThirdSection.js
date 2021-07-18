import styled from 'styled-components';
import Phone from '../../assets/home/third-section-phone.png';

const StyledThirdSection = styled.div`
  position: relative;
  width: 100%;
  height: 940px;
  min-width: 1910px;
  background-color: #f8e9e8;
`;
const StyledPhone = styled.img`
  position: absolute;
  top: 15%;
  left: 29%;
  width: 428px;
  height: 800px;
`;
const StyledCopy = styled.div`
  position: absolute;
  top: 43%;
  right: 20%;
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
const ThirdSection = () => {
  return (
    <StyledThirdSection>
      <StyledPhone src={Phone} />
      <StyledCopy>
        <p>당신이 학습하는 모든 것,</p>
        <p>이젠 기록과 복습을</p>
        <p>
          <span className="stress">TILUP에서 한번에</span>
        </p>
      </StyledCopy>
    </StyledThirdSection>
  );
};

export default ThirdSection;
