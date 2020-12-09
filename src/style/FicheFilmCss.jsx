import styled from "styled-components";

export const ContainerGlobal = styled.div`
  width: 85%;
  margin: 5% auto;
  border: solid 1px black;
  height: auto;
  background-color: #343a40;
  color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const DetailsMovies = styled.div`
  display: flex;
  margin: 3%;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const DetailImage = styled.div`
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const LeftDetails = styled.div`
  width: 70%;
  @media only screen and (max-width: 600px) {
    text-align: center;
    width: 100%;
  }
`;

export const Synopsis = styled.div`
  width: 85%;
  text-align: justify;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const H3 = styled.h3`
  margin-bottom: 5%;
`;

export const DetailsRight = styled.div`
  text-decoration: underline;
  font-size: 1.3em;
  margin-bottom: 4%;
  margin-top: 4%;
`;

export const LiDetails = styled.div`
  list-style: none;
  margin: 5px 0px 0px 10px;
`;

export const Infos = styled.div`
  @media only screen and (max-width: 600px) {
  }
`;

export const H1 = styled.h1`
  margin-left: O;
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin: 10% 0;
  }
`;
