import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.8;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
  }
`;

export const StyledForm = styled.form`
  width: 60%;
  padding: 5%;
  margin-top: 10%;
  margin-bottom: 10%;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  @media only screen and (max-width: 600px) {
    box-shadow: none;
    width: 80%;
  }
`;

export const StyledLabel = styled.label`
  color: white;
  display: block;
  text-align: center;
  font-size: 1.3em;
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 50px;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  margin: auto;
  border: none;
  border-bottom: 2px solid gray;
  background-color: #f8f9fa;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #b65ce7;
    box-shadow: 10px 5px 5px lightgray;
    transform: scale(1.02);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 90%;
  border-radius: 5px 5px 0px 0px;
  height: 150px;
  display: flex;
  justify-content: center;
  margin: auto;
  border: none;
  border-bottom: 2px solid gray;
  background-color: #f8f9fa;
  resize: none;
  &:focus {
    outline: none;
    border-bottom: 2px solid #b65ce7;
    box-shadow: 10px 5px 5px lightgray;
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  width: 90%;
  border-radius: 5px;
  height: 10%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: none;
  background-color: #b65ce7;
  &:focus {
    outline: none;
    box-shadow: 10px 5px 5px lightgray;
  }
  &::after {
    font-family: "Font Awesome 5 Pro";
    font-weight: 400;
    position: absolute;
    left: 85%;
    top: 31%;
    right: 5%;
    bottom: 0;
    opacity: 0;
  }
`;

export const MainTitleForm = styled.h1`
  text-align: center;
  font-weight: bold;
  color: #b65ce7;
  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

export const SentMessage = styled.p`
  text-align: center;
  margin-top: 10px;
  opacity: 0.4;
`;
