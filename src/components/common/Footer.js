import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  color: #999999;
  & > .teamName {
    margin-bottom: 18px;
    font-size: 20px;
  }
  & > .detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    width: 350px;
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="teamName">team TOPPING</div>
      <div className="detail">
        <span>이용약관</span>
        <span>개인정보처리방침</span>
        <span>© tilup Corp.</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
