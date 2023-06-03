import styled from "styled-components";

export const BackBtn = styled.button`
  padding: 7px 10px;
  margin-bottom: 20px;

  font-family: "Montserrat";
  font-size: 13px;
  font-weight: 500;
  border: transparent;
  outline: none;
  border-radius: 6px;
  color: #373737;
  background-color: #5cd3a8;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #52bd97;
  }
`;

export const LoadMoreBtn = styled(BackBtn)`
  display: block;

  width: 150px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;

  font-size: 16px;
`;
