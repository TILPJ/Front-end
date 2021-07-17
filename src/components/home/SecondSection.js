import styled, { css } from 'styled-components';
import TILExample from '../../assets/home/second-section_til-example.svg';
import AddButton from '../../assets/home/second-section_add-button.svg';
import Asset from '../../assets/home/second-section_asset.svg';

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 1044px;
  background: #fafafa;
`;

const copyStyle = css`
  position: relative;
  z-index: 1;
  font-size: 50px;
  font-family: 'Apple SD Gothic Neo';
`;
const StyledCopy = styled.div`
  position: absolute;
  top: 37%;
  left: 20%;
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
    width: 275px;
    height: 8px;
    background-color: #f1928b;
  }
`;
const StyledTILExample = styled.img`
  position: absolute;
  top: 20%;
  right: 30%;
`;
const StyledAddButton = styled.img`
  position: absolute;
  bottom: 27%;
  right: 28.7%;
`;
const StyledAsset = styled.img`
  position: absolute;
  bottom: 10%;
  right: 0;
`;

const SecondSection = () => {
  return (
    <StyledSection>
      <StyledCopy>
        <div className="upper">당신의 TIL을</div>
        <div className="under">간편하게 등록하세요</div>
        <div className="underline" />
      </StyledCopy>
      <StyledTILExample src={TILExample} />
      <StyledAddButton src={AddButton} />
      <StyledAsset src={Asset} />
    </StyledSection>
  );
};
export default SecondSection;
