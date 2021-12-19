import { connect } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import {
  MainContainer,
  PageLayoutBox,
  Main,
  BoardContent,
} from "./layout.style";

const Layout = ({ children, ...props }) => {
  return (
    <MainContainer>
      <PageLayoutBox>
        <Sidebar />
        <Main>
          <Topbar className="topbar-container" {...props} />
          <BoardContent>{children}</BoardContent>
        </Main>
      </PageLayoutBox>
    </MainContainer>
  );
};

export default Layout;
