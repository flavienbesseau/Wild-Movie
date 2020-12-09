import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 5% 10%;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-left: 9%;
    margin-right: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RightContainer = styled.div`
  flex-direction: column;
  background-color: #464646;
  margin: 0 10%;
  padding: 3%;
  opacity: 0.8;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10% auto;
    width: 100%;
  }
`;

export const P = styled.p`
  color: white;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: #fafafa;
  box-shadow: 2px 2px 8px #aaa;
  font: bold 13px Arial;
  border-radius: 50%;
  color: #555;
  :focus {
    outline: none;
    border: 2px solid #b65ce7;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  margin-bottom: 10%;
  @media only screen and (max-width: 600px) {
    width: 70%;
    height: 94%;
  }
`;

export const Para = styled.p`
  font-size: 1.5rem;
`;
