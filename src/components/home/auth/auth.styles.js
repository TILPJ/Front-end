import styled, { css } from 'styled-components';

export const StyledTitle = styled.div`
  padding-top: 93px;
  padding-left: 47px;
  background-color: #fff;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 41px;
  & > p {
    line-height: 1.3;
  }
  & > p > .stress {
    font-weight: 700;
  }
`;

export const StyledContent = styled.div`
  padding-top: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
`;
export const StyledInput = styled.div`
  position: relative;
  margin-bottom: 15.2px;
  width: 340px;
  overflow: hidden;
  & > label {
    display: block;
    font-weight: 300;
    font-size: 14px;
    color: #20160f;
  }
  & > input {
    padding-left: 15px;
    width: 100%;
    height: 36.5px;
    border: 0;
    border-bottom: 0.5px solid #333;
    font-weight: 300;
    font-size: 16px;
    color: #333;
    outline: none;
    ${props =>
      props.disabled &&
      css`
        background: #dfdfdf;
        cursor: default;
      `}
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #c9c9c9;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #c9c9c9;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #c9c9c9;
    }
  }
  & > .verified {
    position: absolute;
    bottom: 14px;
    right: 5px;
  }
`;
export const StyledButton = styled.button`
  width: 312px;
  height: 48px;
  background-color: #f1928b;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-top: 33px;
  ${props =>
    props.disabled &&
    css`
      background: #dfdfdf;
      cursor: default;
    `}
`;
