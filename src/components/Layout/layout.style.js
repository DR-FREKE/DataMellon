import styled from "styled-components";

export const MainContainer = styled.main`
  /* background-color: red; */
`;

export const PageLayoutBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* background-color: yellow; */
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Main = styled.div`
  grid-column: 3/13;
  @media (max-width: 768px) {
    grid-column: 1/13;
  }
`;
export const BoardContent = styled.div`
  background-color: transparent;
  scrollbar-width: thin;
  overflow-y: auto;
  padding: 2em 2em 5em;
  max-height: 93vh;
  @media (max-width: 768px) {
    padding-inline: 1em;
  }
`;

export const DashboardLayout = styled.div`
  /* background-color: red; */
  padding: 1em;
  div:nth-child(1) {
    justify-content: flex-start;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
