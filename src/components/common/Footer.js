import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100px;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  color: #999999;
  & > .teamName {
    font-size: 20px;
  }
  & > .detail {
    display: flex;
    justify-content: space-between;
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
