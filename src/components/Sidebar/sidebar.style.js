import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  grid-column: 1/3;
  position: sticky;
  overflow: hidden;
  box-shadow: 0 0 3px #ccc;
  @media (max-width: 768px) {
    display: none;
    grid-column: 1/4;
  }
`;
