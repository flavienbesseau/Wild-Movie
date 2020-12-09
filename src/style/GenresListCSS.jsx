import styled from "styled-components";

export const Categories = styled.button`
  display:flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 1em 1.5em 0;
  border-radius:0.5em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  color: black;
  text-align:center;
  transition: all 0.2s;
    &:focus {
      outline: 0;
      border: 1px solid transparent;
    }
    &:hover {
      color:white;
      background-color:black;}
    &.active {color:white;
      background-color:black;}}
  @media only screen and (max-width: 600px) {
    width : 100%;
    display: flex;
    align-items: center;
    font-weight: 1;
    margin: 2%;
  }
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5%;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
