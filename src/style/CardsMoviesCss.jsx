import styled from "styled-components";
import { Link } from "react-router-dom";

export const Essai = styled.div`
  @media only screen and (max-width: 600px) {
  }
`;

export const Img = styled.img`
  width: 160px;
  height: 240px;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  @media only screen and (max-width: 600px) {
    width: 140px;
    height: 220px;
  }
`;
export const P = styled.p`
  margin-top: 10px;
  width: 10rem;
  text-align: center;
  color: white;
`;

export const Heart = styled.div`
  margin-top: 10px;
  width: 20%;
`;

export const Eye = styled.div`
  margin-top: 10px;
  width: 20%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkNav = styled(Link)`
  color: black;
  hover: black;
  &:hover {
    color: black;
  }
  margin: 0.5rem;
`;
