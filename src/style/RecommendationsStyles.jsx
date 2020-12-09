import styled from "styled-components";

const RecommendationsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export default RecommendationsStyles;
