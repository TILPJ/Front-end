import styled, { css } from 'styled-components';

export const StyledTitle = styled.div`
  padding-top: 40px;
  padding-left: 47px;
  background-color: #fff;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 34px;
  & > p {
    line-height: 1.3;
  }
  & > p > .stress {
    font-weight: 700;
  }
`;

export const StyledContent = styled.div`
  padding: 37px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  & > .content {
    position: relative;
    margin-bottom: 18px;
    width: 100%;
    font-size: 26px;
    & > .label {
      margin-bottom: 18px;
      font-weight: 700;
    }
    & > input {
      outline: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 21px;
      width: 100%;
      height: 52px;
      border: 0;
      border-radius: 10px;
      box-sizing: border-box;
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
      font-weight: 500;
      font-size: 20px;
    }
    & > textarea {
      resize: none;
      outline: none;
      padding: 14px 21px;
      width: 100%;
      height: 270px;
      border: 0;
      border-radius: 10px;
      box-sizing: border-box;
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
      font-family: 'Apple SD Gothic Neo';

      font-weight: 500;
      font-size: 20px;
      &::placeholder {
        color: #c9c9c9;
        opacity: 1;
      }

      &:-ms-input-placeholder {
        color: #c9c9c9;
      }

      &::-ms-input-placeholder {
        color: #c9c9c9;
      }
    }
    & > .selectBox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 21px;
      height: 52px;
      border-radius: 10px;
      box-sizing: border-box;
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
      & > img {
        width: 9px;
        height: 18px;
      }
    }
    & > .selectOptions {
      position: absolute;
      top: 97px;
      z-index: 10;
      width: 100%;
      max-height: 160px;
      border-radius: 10px;
      background: #fff;
      box-sizing: border-box;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
      font-weight: 500;
      font-size: 20px;
      overflow-y: scroll;
      & > li {
        padding: 14px 21px;
        cursor: pointer;
        &:hover {
          background: rgba(0, 0, 0, 0.16);
        }
      }
    }
  }
  & > .buttonWrapper {
    margin-top: 23px;
    & > button {
      width: 174px;
      height: 40px;
      border: 0;
      border-radius: 5px;
      background: #f1928b;
      color: #fff;
      cursor: pointer;
    }
  }
`;
export const StyledInput = styled.div`
  & > label {
    font-family: 'Apple SD Gothic Neo';
    font-weight: 700;
    font-size: 26px;
  }
  & > input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 21px;
    height: 52px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    & > img {
      width: 9px;
      height: 18px;
    }
  }
  /* position: relative;
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
      color: #c9c9c9;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: #c9c9c9;
    }

    &::-ms-input-placeholder {
      color: #c9c9c9;
    }
  }
  & > .verified {
    position: absolute;
    bottom: 14px;
    right: 5px;
  } */
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
