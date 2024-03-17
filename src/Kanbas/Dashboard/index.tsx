import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
function Dashboard() {
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
		console.log(newCourse);
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
		<div className="flex-fill p-4">
			<h1 style={{ color: "#6c757d" }}>Dashboard</h1>
			<hr />
			<br />
			<div className="d-block ps-4">
				<span className="float-end">
					<button className="btn btn-danger" onClick={() => setShowNew(true)}>
						Add Course +
					</button>
				</span>
				<h2>Published Courses (12)</h2>
				<hr />
				<div className="row g-4">
					{coursesState.map((course) => (
						<div
							key={course._id}
							className="col-1 col-sm-2 col-lg-3 col-xl-4"
							style={{ width: 325 }}>
							<Link
								to={`/Kanbas/Courses/${course._id}/Home`}
								style={{ textDecoration: "none" }}>
								<div className="card shadow-sm">
									<img
										src={`/images/${course.image}`}
										alt="Image Missing!"
										className="card-img-top"
										style={{ maxHeight: 180 }}
									/>
									<div className="card-body wd-card-body">
										<p
											className="card-title"
											style={{ color: "blue", fontWeight: "bold", margin: 0 }}>
											{course.name}
										</p>
										<p
											style={{
												color: "#6c757d",
												fontSize: 16,
												margin: "4px 0px 0px",
											}}>
											{course.number}
										</p>
										<p
											style={{
												color: "#6c757d",
												fontSize: 14,
												margin: "4px 0px 0px",
											}}>
											{course.startDate}-{course.endDate}
										</p>
										<button
											className="btn"
											onClick={(event) => {
												event.preventDefault();
												setDefaultCourse(course);
												setShowEdit(true);
											}}>
											<FaRegPenToSquare />
										</button>
										<button
											className="btn btn-danger"
											onClick={(event) => {
												event.preventDefault();
												deleteCourse(course._id);
											}}>
											<FaRegTrashAlt />
										</button>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
				{showEdit && (
					<div className="bg-light border border-dark rounded p-3 position-fixed top-50 start-50 translate-middle">
						<h5>Edit Course</h5>
						<input
							value={defaultCourse.name}
							className="form-control"
							onChange={(e) =>
								setDefaultCourse({ ...defaultCourse, name: e.target.value })
							}
						/>
						<input
							value={defaultCourse.number}
							className="form-control"
							onChange={(e) =>
								setDefaultCourse({ ...defaultCourse, number: e.target.value })
							}
						/>
						<input
							value={defaultCourse.startDate}
							className="form-control"
							type="date"
							onChange={(e) =>
								setDefaultCourse({
									...defaultCourse,
									startDate: e.target.value,
								})
							}
						/>
						<input
							value={defaultCourse.endDate}
							className="form-control"
							type="date"
							onChange={(e) =>
								setDefaultCourse({
									...defaultCourse,
									endDate: e.target.value,
								})
							}
						/>
						<input
							className="form-control"
							type="file"
							onChange={(e) =>
								setDefaultCourse({ ...defaultCourse, image: e.target.value })
							}
						/>
						<button className="btn btn-success" onClick={updateCourse}>
							Update
						</button>
						<button
							className="btn btn-danger"
							onClick={() => setShowEdit(false)}>
							Cancel
						</button>
					</div>
				)}
				{showNew && (
					<div className="bg-light border border-dark rounded p-3 position-fixed top-50 start-50 translate-middle">
						<h5>New Course</h5>
						<input
							placeholder={"New Course"}
							className="form-control"
							onChange={(e) =>
								setDefaultCourse({ ...defaultCourse, name: e.target.value })
							}
						/>
						<input
							placeholder={"New Course Number"}
							className="form-control"
							onChange={(e) =>
								setDefaultCourse({ ...defaultCourse, number: e.target.value })
							}
						/>
						<input
							placeholder={new Date().toDateString()}
							className="form-control"
							type="date"
							onChange={(e) =>
								setDefaultCourse({
									...defaultCourse,
									startDate: e.target.value,
								})
							}
						/>
						<input
							placeholder={new Date().toDateString()}
							className="form-control"
							type="date"
							onChange={(e) =>
								setDefaultCourse({ ...defaultCourse, endDate: e.target.value })
							}
						/>
						<input
							className="form-control"
							type="file"
							onChange={(e) =>
								setDefaultCourse({ ...defaultCourse, image: e.target.value })
							}
						/>
						<button className="btn btn-success" onClick={addNewCourse}>
							Add
						</button>
						<button
							className="btn btn-danger"
							onClick={() => setShowNew(false)}>
							Cancel
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
export default Dashboard;
