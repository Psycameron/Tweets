import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const UpBtn = styled.button`
  padding: 10px;

  font-size: 13px;
  border: transparent;
  outline: none;
  border-radius: 50%;
  color: #373737;
  background-color: #5cd3a8;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #52bd97;
  }
`;
