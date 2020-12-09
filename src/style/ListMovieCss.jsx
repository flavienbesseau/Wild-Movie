import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-right: 10px;
  margin-left: 10px;
`;

export const ButtonPlus = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0px 70px 70px 0px;
  height: auto;
  width: auto;
  height: 240px;
  padding: 0px 20px;
  background-c#b65ce7nsparent;
  font-size: 8em;
  color: #b65ce7;
  &:hover {
    color: #b65ce7;
    font-size: 9em;
  }
`;

export const ButtonLess = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 70px 0px 0px 70px;
  height: auto;
  width: auto;
  height: 240px;
  padding: 0px 20px;
  background-color: transparent;
  font-size: 8em;
  color: #b65ce7;
  &:hover {
    color: #b65ce7;
    font-size: 9em;
  }
`;

export const Arrow = styled.div`
  margin: 0px;
  padding: 0px;
`;
