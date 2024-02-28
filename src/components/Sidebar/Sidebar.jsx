import "./Sidebar.css";
import { IoHomeSharp, IoNewspaperOutline } from "react-icons/io5";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { SlScreenDesktop, SlMusicToneAlt } from "react-icons/sl";
import { GrTechnology, GrGamepad } from "react-icons/gr";
import { RiArticleLine } from "react-icons/ri";
import cat from "../../assets/cat1.jpg";
import rat from "../../assets/rat1.jpg";
import monkey from "../../assets/monkey1.jpg";
import squirrel from "../../assets/squirrel1.jpg";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <IoHomeSharp
            className="side-icon"
            color={`${category === 0 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <GrGamepad
            className="side-icon"
            color={`${category === 20 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <LiaCarSideSolid
            className="side-icon"
            color={`${category === 2 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <MdOutlineSportsBaseball
            className="side-icon"
            color={`${category === 17 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <SlScreenDesktop
            className="side-icon"
            color={`${category === 24 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <GrTechnology
            className="side-icon"
            color={`${category === 28 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <SlMusicToneAlt
            className="side-icon"
            color={`${category === 10 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <RiArticleLine
            className="side-icon"
            color={`${category === 22 ? "black" : "#747474"}`}
            size={20}
          />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <IoNewspaperOutline
            className="side-icon"
            color={`${category === 25 ? "black" : "#747474"}`}
            size={20}
          />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={cat} alt="" /> <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={rat} alt="" /> <p>Jerry</p>
        </div>
        <div className="side-link">
          <img src={monkey} alt="" /> <p>Jaggu</p>
        </div>
        <div className="side-link">
          <img src={squirrel} alt="" /> <p>Scrat</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
