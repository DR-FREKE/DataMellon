import { SidebarContainer } from "./sidebar.style";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <SidebarContainer className="sidebar">
      <div className="sidebarWrapper h-full">
        <div className="flex justify-center py-4 sidebarLogo">
          <span className="#">
            {/* <img src={logo} alt="" className="logo" /> */}
          </span>
        </div>
        <div className="sidebarMenu mt-14 py-2 bg-white w-full flex justify-center items-center">
          <ul className="flex flex-col w-full sidebarList">
            <li className="sidebarListItem active bg-rose-500 text-center text-white p-5">
              <div className="sidetext4">Overview</div>
            </li>
            <li className="sidebarListItem text-center text-black p-5">
              <div className="sidetext4">Graph</div>
            </li>
          </ul>
        </div>
      </div>
    </SidebarContainer>
  );
}
