import "./Navbar.css";
import { IoMdMenu, IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoAppsOutline, IoNotificationsOutline } from "react-icons/io5";
import logo from "../../assets/adtube2.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <IoMdMenu
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          size={25}
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <IoIosSearch className="search-icon" color="gray" size={20} />
        </div>
      </div>

      <div className="nav-right flex-div">
        <RiVideoUploadLine className="upload-icon" size={25} color="#747474" />
        <IoAppsOutline className="more-icon" size={25} color="#747474" />
        <IoNotificationsOutline
          className="notification-icon"
          size={25}
          color="#747474"
        />
        <CgProfile className="user-icon" size={35} />
      </div>
    </nav>
  );
};

export default Navbar;
