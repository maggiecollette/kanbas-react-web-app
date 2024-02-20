import KanbasNavigation from "./Navigation";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Dropdown from "./Courses/Navigation/Dropdown";

function Kanbas() {
	return (
		<div className="d-flex">
			<div>
				<KanbasNavigation />
			</div>
			<div className={"d-flex flex-column flex-fill"}>
				<Dropdown />
				<div style={{ flexGrow: 1 }}>
					<Routes>
						<Route path="/" element={<Navigate to="Dashboard" />} />
						<Route path="Account" element={<Account />} />
						<Route path="Dashboard" element={<Dashboard />} />
						<Route path="Courses/:courseId/*" element={<Courses />} />
						<Route path="Calendar/*" element={<h1>Calendar</h1>} />
						<Route path="Inbox/*" element={<h1>Inbox</h1>} />
						<Route path="History/*" element={<h1>History</h1>} />
						<Route path="Studio/*" element={<h1>Studio</h1>} />
						<Route path="Commons/*" element={<h1>Commons</h1>} />
						<Route path="Help/*" element={<h1>Help</h1>} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Kanbas;
