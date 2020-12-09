import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 40%;
  margin: auto;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10%;
  }
`;

export const Search = styled.input`
  width: 70%;
  margin: 10% 0;
  padding-left: 7%;
  padding-top: 2%;
  padding-bottom: 2%;

  transition: transform 250ms ease-in-out;
  font-size: 1em;
  font-weight: bold;
  line-height: 25px;

  background-color: transparent;
  color: white;
  border-radius: 50px;
  border: 1px solid #b65ce7;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &:hover,
  &:focus {
    padding: 12px 0;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #b65ce7;
    border-radius: 0;
    background-position: 100% center;
  }
  ::placeholder {
    color: white;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    width: 70%;
    margin-bottom: 5%;
  }
`;

export const Button = styled.button`
  width: 20%;
  margin: 10% 5%;
  border-radius: 50px;
  border: none;
  :focus {
    outline: none;
    border: 1px solid #b65ce7;
  }
  @media only screen and (max-width: 600px) {
    width: 20%;
  }
`;
