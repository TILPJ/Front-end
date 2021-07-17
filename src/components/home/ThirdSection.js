import styled from 'styled-components';
import Phone from '../../assets/home/third-section-phone.png';

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 940px;
  background-color: #f8e9e8;
`;
const StyledPhone = styled.img`
  position: absolute;
  top: 15%;
  left: 29%;
  width: 428px;
  height: 800px;
`;

const ThirdSection = () => {
  return (
    <StyledSection>
      <StyledPhone src={Phone} />
    </StyledSection>
  );
};

export default ThirdSection;
