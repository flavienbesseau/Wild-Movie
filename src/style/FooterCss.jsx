import styled from "styled-components";

export const Top = styled.div`
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid #b7b7b7;
  margin-top: 20px;
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10% 10px 10%;
  border-bottom: 1px solid #b7b7b7;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleBlocs = styled.div`
  width: 28%;
  text-align: justify;
  padding-bottom: 1px;
  padding-top: 13px;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const BlocLiens = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  background-color: #343a40;
  color: #b7b7b7;
`;
export const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin: 0 20px;
  &:hover {
    background: #b65ce7;
    border-radius: 50%;
  }
`;
export const Linkss = styled.a`
  text-decoration: none;
  color: #b7b7b7;
  &:hover {
    text-decoration: none;
    color: #f8f9fa;
  }
`;

export const TitleMidSize = styled.h4`
  color: #e8e8e8;
  text-align: center;
`;

export const P = styled.p`
  font-size: 0, 5em;
`;

export const Down = styled.div`
  text-align: center;
  padding-bottom: 1px;
  padding-top: 15px;
`;
