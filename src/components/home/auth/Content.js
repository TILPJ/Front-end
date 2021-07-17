import { useState } from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  padding-top: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  & > .button {
    cursor: pointer;
  }
  & > .button > img {
    margin-left: 15px;
    transition: transform 0.5s ease-in-out;

    transform: ${({ isFormOpen }) =>
      isFormOpen ? 'rotateX(180deg)' : 'rotateX(0)'};
  }
`;
const Content = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <StyledContent
      isFormOpen={isFormOpen}
      onClick={() => setIsFormOpen(!isFormOpen)}
    >
      <div className="button">이메일로 시작하기</div>
    </StyledContent>
  );
};

export default Content;
