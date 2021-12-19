import { AiOutlineBell } from "react-icons/ai";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Dropdown } from "react-bootstrap";
import { TopContainer, TopBarContent } from "./topbar.style";
import { FiSearch } from "react-icons/fi";
import { Badge } from "../Widgets/Badge/Badge";

export default function Topbar(props) {
  return (
    <TopContainer>
      <div className="container mx-auto px-0 py-2 m-0">
        <TopBarContent>
          <div className="flex-1 md:flex hidden">
            <h1 className="dash text-lg">Overview</h1>
          </div>
          <div className="flex flex-1 bg-transparent justify-end items-center gap-3">
            <div className="flex flex-shrink items-center justify-center px-2 py-1 text-sm font-bold leading-none text-black rounded-lg topbarIconContainer">
              <AiOutlineBell className="text-rose-500" size={30} />
              <Badge text="50" className="bg-rose-400 -mt-5 -ml-2 text-white" />
            </div>
            <div className="relative inline-block text-left">
              <div className="btn-div flex justify-center items-center border-2 p-0.5 border-rose-500">
                <button
                  type="button"
                  class="flex justify-center items-center w-full shadow-sm bg-white text-sm font-medium focus:outline-none dropdown-btn"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <img src="./images/Face.png" alt="" className="topAvatar" />
                  <p className="textStyle">Solomon Ndi</p>
                  <KeyboardArrowDownIcon className="arrowDown" />
                </button>{" "}
              </div>
            </div>
          </div>
        </TopBarContent>
      </div>
    </TopContainer>
  );
}
