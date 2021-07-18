import styled, { css } from 'styled-components';

const StyledFloatedSection = styled.div`
  position: absolute;
  z-index: 10;
  top: 135px;
  left: 50%;
  width: 1340px;
  height: 600px;
  border-radius: 40px;
  /* background-image: url(${BackgroundImg}); */
  background-size: 100%;
  transform: translateX(-50%);
`;
const copyStyle = css`
  font-size: 50px;
  font-family: 'Apple SD Gothic Neo';
`;
const StyledCopy = styled.div`
  position: absolute;
  top: 150px;
  left: 150px;
  .upper {
    ${copyStyle}
    font-weight: 500;
    margin-bottom: 15px;
  }
  .under {
    ${copyStyle}
    font-weight: 700;
  }
  .underline {
    position: absolute;
    bottom: 8px;
    left: -2px;
    z-index: -1;
    width: 275px;
    height: 8px;
    background-color: #f1928b;
  }
`;
const StyledBeginButton = styled.button`
  position: absolute;
  left: 150px;
  bottom: 250px;
  width: 168px;
  height: 48px;
  border: 3px solid #20160f;
  background-color: #f1928b;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;
const StyledPinwheel = styled.img`
  position: absolute;
  left: 150px;
  bottom: 150px;
`;
const exampleBoxStyle = css`
  position: absolute;
  width: 318px;
  height: 318px;
  border: 2px solid #000000;
`;
const StyledCardExample = styled.div`
  position: absolute;
  width: 318px;
  height: 318px;
  top: 165px;
  right: 370px;
  .front {
    ${exampleBoxStyle}
  }
  .middle {
    ${exampleBoxStyle}
    top: 15px;
    left: 15px;
    border-color: #ff8d8d;
    background-color: #ff8d8d;
  }
  .behind {
    ${exampleBoxStyle}
    top: 30px;
    left: 30px;
  }
`;
// const StyledCardContent = styled.div``;

const FloatedSection = () => {
  return (
    <StyledFloatedSection>
      <StyledCopy>
        <div className="upper">당신의 기록을 이곳에</div>
        <div className="under">오늘도 TILUP 하세요</div>
        <div className="underline" />
      </StyledCopy>
      <StyledBeginButton>시작하기</StyledBeginButton>
      {/* <StyledPinwheel src={Pinwheel} /> */}
      <StyledCardExample>
        <div className="behind" />
        <div className="middle">예시 콘텐츠</div>
        <div className="front" />
      </StyledCardExample>
    </StyledFloatedSection>
  );
};
export default FloatedSection;
