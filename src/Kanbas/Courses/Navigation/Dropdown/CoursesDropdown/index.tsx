import {
	FaBook,
	FaBullhorn,
	FaBullseye,
	FaCircle,
	FaComment,
	FaPlug,
	FaRocket,
} from "react-icons/fa";
import {
	FaCircleNodes,
	FaFileLines,
	FaFilePen,
	FaFolderClosed,
	FaGear,
	FaHouse,
	FaUserGroup,
} from "react-icons/fa6";
import "./index.css";
import { Link, useLocation, useParams } from "react-router-dom";

function CoursesNavigationDropdown() {
	const links = [
		{
			label: "Home",
			icon: <FaHouse />,
		},
		{
			label: "Modules",
			icon: <FaCircleNodes />,
		},
		{
			label: "Piazza",
			icon: <FaPlug />,
		},
		{
			label: "Zoom Meetings",
			icon: <FaPlug />,
		},
		{
			label: "Assignments",
			icon: <FaFilePen />,
		},
		{
			label: "Quizzes",
			icon: <FaRocket />,
		},
		{
			label: "Grades",
			icon: <FaBook />,
		},
		{
			label: "People",
			icon: <FaUserGroup />,
		},
		{
			label: "Panopto Video",
			icon: <FaPlug />,
		},
		{
			label: "Discussions",
			icon: <FaComment />,
		},
		{
			label: "Announcements",
			icon: <FaBullhorn />,
		},
		{
			label: "Pages",
			icon: <FaFileLines />,
		},
		{
			label: "Files",
			icon: <FaFolderClosed />,
		},
		{
			label: "Rubrics",
			icon: <FaFileLines />,
		},
		{
			label: "Outcomes",
			icon: <FaBullseye />,
		},
		{
			label: "Collaborations",
			icon: <FaCircle />,
		},
		{
			label: "Syllabus",
			icon: <FaBook />,
		},
		{
			label: "Settings",
			icon: <FaGear />,
		},
	];
	const { pathname } = useLocation();
	const courseId = pathname.split("Courses/")[1].split("/")[0];
	return (
		<div>
			<ul className="wd-canvas-dropdown-navigation">
				{links.map((link, index) => (
					<li key={index}>
						<Link to={`/Kanbas/Courses/${courseId}/${link.label}`}>
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
export default CoursesNavigationDropdown;
