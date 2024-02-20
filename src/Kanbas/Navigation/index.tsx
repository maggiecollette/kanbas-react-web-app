import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaRegClock,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { FaDisplay, FaArrowRightFromBracket } from "react-icons/fa6";
import logo from "../images/northeastern-logo.png";
function KanbasNavigation() {
  const links = [
    {
      label: "Account",
      icon: (
        <FaRegUserCircle className="wd-kanbas-navigation-icon wd-kanbas-profile fs-2" />
      ),
    },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt className="wd-kanbas-navigation-icon fs-2" />,
    },
    {
      label: "Courses",
      icon: <FaBook className="wd-kanbas-navigation-icon fs-2" />,
    },
    {
      label: "Calendar",
      icon: <FaRegCalendarAlt className="wd-kanbas-navigation-icon fs-2" />,
    },
    {
      label: "Inbox",
      icon: <FaInbox className="wd-kanbas-navigation-icon fs-2" />,
    },
    {
      label: "History",
      icon: <FaRegClock className="wd-kanbas-navigation-icon fs-2" />,
    },
    {
      label: "Studio",
      icon: <FaDisplay className="wd-kanbas-navigation-icon fs-2" />,
    },
    {
      label: "Commons",
      icon: (
        <FaArrowRightFromBracket className="wd-kanbas-navigation-icon fs-2" />
      ),
    },
    {
      label: "Help",
      icon: <FaRegQuestionCircle className="wd-kanbas-navigation-icon fs-2" />,
    },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li className="wd-kanbas-list-img">
        <a href="http://northeastern.edu">
          <img src={logo} />
        </a>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon} {link.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
