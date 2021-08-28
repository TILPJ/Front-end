import styled from 'styled-components';
import Phone from '../../assets/home/third-section-phone.png';
import Inflearn from '../../assets/home/third-section-inflearn.png';
import Coloso from '../../assets/home/third-section-coloso.png';
import Nomadcoders from '../../assets/home/third-section-nomadcoders.png';
import Tilup from '../../assets/home/third-section-tilup.png';

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

const StyledVertical = styled.div`
  position: absolute;
  top: 33%;
  left: 32.5%;
  height: 413px;
  overflow-y: hidden;
  & > .slideBox {
    display: flex;
    flex-direction: column;
    bottom: 0;
    & > img {
      margin-bottom: 37px;
      width: 250px;
    }
  }
`;
const StyledHorizontal = styled.div`
  position: absolute;
  top: 50%;
  left: 1%;
  height: 413px;
  overflow-y: hidden;
  & > .slideBox {
    bottom: 0;
    & > img {
      margin-right: 37px;
      width: 250px;
    }
  }
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
      <StyledHorizontal>
        <div className="slideBox">
          <img src={Nomadcoders} alt="site" />
          <img src={Tilup} alt="site" />
        </div>
      </StyledHorizontal>
      <StyledPhone src={Phone} />
      <StyledVertical>
        <div className="slideBox">
          <img src={Inflearn} alt="site" />
          <img src={Coloso} alt="site" />
        </div>
      </StyledVertical>
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
