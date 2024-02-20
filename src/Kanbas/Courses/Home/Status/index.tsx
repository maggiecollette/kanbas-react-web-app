import {
	FaCircleXmark,
	FaCircleCheck,
	FaFileImport,
	FaShareFromSquare,
	FaLifeRing,
	FaChartSimple,
	FaXmark,
} from "react-icons/fa6";
import "./index.css";
import { FaBell, FaBullhorn, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Status() {
	const buttons = [
		{
			to: "",
			name: "Import Existing Content",
			icon: <FaFileImport style={{ margin: 5 }} />,
		},
		{
			to: "",
			name: "Import From Commons",
			icon: <FaShareFromSquare style={{ margin: 5 }} />,
		},
		{
			to: "",
			name: "Choose Home Page",
			icon: <FaLifeRing style={{ margin: 5 }} />,
		},
		{
			to: "",
			name: "View Course Stream",
			icon: <FaChartSimple style={{ margin: 5 }} />,
		},
		{
			to: "",
			name: "New Announcement",
			icon: <FaBullhorn style={{ margin: 5 }} />,
		},
		{
			to: "",
			name: "New Analytics",
			icon: <FaChartSimple style={{ margin: 5 }} />,
		},
		{
			to: "",
			name: "View Course Notifications",
			icon: <FaBell style={{ margin: 5 }} />,
		},
	];
	const toDo = [
		{
			to: "",
			name: "Grade A1 - ENV + HTML",
			description: "100 points Sep 18 11:59pm",
		},
		{
			to: "",
			name: "Grade A2 - CSS",
			description: "100 points Sep 30 11:59pm",
		},
	];
	const comingUp = [
		{
			to: "",
			name: "Lecture",
			course: "CS4550.12631.202410",
			date: "Sep 7 at 11:45am",
		},
		{
			to: "",
			name: "Lecture",
			course: "CS4550.12631.202410",
			date: "Sep 11 at 11:45am",
		},
		{
			to: "",
			name: "CS5610 06 SP23 Lecture",
			course: null,
			date: "Sep 11 at 6:00pm",
		},
	];
	return (
		<div className="d-none d-xl-block wd-courses-sidebar">
			<h6>Course Status</h6>
			<button type="button">
				<FaCircleXmark style={{ margin: 5 }} />
				Unpublish
			</button>
			<button type="button" className="bg-success text-light">
				<FaCircleCheck style={{ margin: 5 }} />
				Published
			</button>
			<ul className="list-group wd-course-status">
				{buttons.map((button, index) => (
					<li key={index} className="list-group-item">
						<Link to={button.to}>
							{button.icon}
							{button.name}
						</Link>
					</li>
				))}
			</ul>
			<h6>To Do</h6>
			<hr />
			<ul className="wd-courses-sidebar-links wd-to-do-content">
				{toDo.map((toDo, index) => (
					<li key={index}>
						<span className="float-end">
							<FaXmark style={{ margin: 5 }} />
						</span>
						<Link to={toDo.to}>
							{toDo.name}
							<p>{toDo.description}</p>
						</Link>
					</li>
				))}
			</ul>
			<span className="float-end">
				<FaCalendar style={{ margin: 5 }} />
				<a href="#" className="wd-anchor">
					View Calendar
				</a>
			</span>
			<h6>Coming Up</h6>
			<hr />
			<ul className="wd-courses-sidebar-links wd-coming-up-content">
				{comingUp.map((upcoming, index) => (
					<li key={index}>
						<Link to={upcoming.to}>
							{upcoming.name}
							{upcoming.course ? <p>{upcoming.course}</p> : <></>}
							<p>{upcoming.date}</p>
						</Link>
					</li>
				))}
			</ul>
			<a href="#" className="wd-more-link">
				12 more in the next week...
			</a>
		</div>
	);
}
export default Status;
