import styled from 'styled-components';
import TILExample from '../../assets/home/second-section_til-example.svg';
import AddButton from '../../assets/home/second-section_add-button.svg';
import Asset from '../../assets/home/second-section_asset.svg';

const StyledSecondSection = styled.div`
  position: relative;
  width: 100%;
  height: 1044px;
  min-width: 1910px;
  background: #fafafa;
  overflow: hidden;
`;

const StyledCopy = styled.div`
  position: absolute;
  top: 40%;
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
    <StyledSecondSection>
      <StyledCopy>
        <p>당신의 TIL을</p>
        <p>
          <span className="stress">간편하게 등록</span>하세요
        </p>
      </StyledCopy>
      <StyledTILExample src={TILExample} />
      <StyledAddButton src={AddButton} />
      <StyledAsset src={Asset} />
    </StyledSecondSection>
  );
};
export default SecondSection;
