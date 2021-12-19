import styled from "styled-components";

export const TopContainer = styled.div`
  background-color: #fff;
  padding: 1em;
  box-shadow: 0px 0px 3px #ccc;
`;
export const TopBarContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    /* background-color: red; */
  }
  .btn-div {
    /* padding: 2px; */
    border-radius: 50px;
  }
  .dropdown-btn {
    padding: 0.5em 1em;
    border-radius: 50px;
    background-color: rgb(244 63 94);
    color: #fff;
  }
`;
