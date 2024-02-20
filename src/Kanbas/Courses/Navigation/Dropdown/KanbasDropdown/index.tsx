import {
	FaBook,
	FaInbox,
	FaRegCalendarAlt,
	FaRegClock,
	FaRegQuestionCircle,
	FaRegUserCircle,
	FaTachometerAlt,
} from "react-icons/fa";
import { FaArrowRightFromBracket, FaDisplay, FaHouse } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function KanbasNavigationDropdown() {
	const links = [
		{
			label: "Account",
			icon: (
				<FaRegUserCircle className="wd-kanbas-dropdown-navigation-icon wd-kanbas-dropdown-profile fs-2" />
			),
		},
		{
			label: "Dashboard",
			icon: (
				<FaTachometerAlt className="wd-kanbas-dropdown-navigation-icon fs-2" />
			),
		},
		{
			label: "Courses",
			icon: <FaBook className="wd-kanbas-dropdown-navigation-icon fs-2" />,
		},
		{
			label: "Calendar",
			icon: (
				<FaRegCalendarAlt className="wd-kanbas-dropdown-navigation-icon fs-2" />
			),
		},
		{
			label: "Inbox",
			icon: <FaInbox className="wd-kanbas-dropdown-navigation-icon fs-2" />,
		},
		{
			label: "History",
			icon: <FaRegClock className="wd-kanbas-dropdown-navigation-icon fs-2" />,
		},
		{
			label: "Studio",
			icon: <FaDisplay className="wd-kanbas-dropdown-navigation-icon fs-2" />,
		},
		{
			label: "Commons",
			icon: (
				<FaArrowRightFromBracket className="wd-kanbas-dropdown-navigation-icon fs-2" />
			),
		},
		{
			label: "Help",
			icon: (
				<FaRegQuestionCircle className="wd-kanbas-dropdown-navigation-icon fs-2" />
			),
		},
	];
	const { pathname } = useLocation();
	return (
		<div>
			<ul className="wd-kanbas-dropdown-navigation">
				{links.map((link, index) => (
					<li key={index}>
						<Link to={`/Kanbas/${link.label}`}>
							{link.icon}
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			<hr />
		</div>
	);
}
export default KanbasNavigationDropdown;
