import KanbasNavigation from "./Navigation";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Dropdown from "./Courses/Navigation/Dropdown";
import { courses } from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
	const [coursesState, setCourses] = useState(courses);

	const [defaultCourse, setDefaultCourse] = useState({
		_id: "0",
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
		image: "./images/card_photo_1.JPG",
	});

	const [showNew, setShowNew] = useState(false);

	const [showEdit, setShowEdit] = useState(false);

	const addNewCourse = () => {
		const newCourse = {
			...defaultCourse,
			_id: new Date().getTime().toString(),
		};
		setCourses([...coursesState, newCourse]);
		setShowNew(false);
	};

	const deleteCourse = (courseId: string) => {
		setCourses(coursesState.filter((course) => course._id !== courseId));
	};

	const updateCourse = () => {
		setCourses(
			coursesState.map((c) => {
				if (c._id === defaultCourse._id) {
					return defaultCourse;
				} else {
					return c;
				}
			})
		);
		setShowEdit(false);
	};
	return (
		<Provider store={store}>
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
							<Route
								path="Dashboard"
								element={
									<Dashboard
										coursesState={coursesState}
										setCourses={setCourses}
										defaultCourse={defaultCourse}
										setDefaultCourse={setDefaultCourse}
										showNew={showNew}
										setShowNew={setShowNew}
										showEdit={showEdit}
										setShowEdit={setShowEdit}
										addNewCourse={addNewCourse}
										deleteCourse={deleteCourse}
										updateCourse={updateCourse}
									/>
								}
							/>
							<Route
								path="Courses/:courseId/*"
								element={<Courses courses={coursesState} />}
							/>
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
		</Provider>
	);
}
export default Kanbas;
