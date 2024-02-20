import React from "react";
import {
	FaCheckCircle,
	FaEllipsisV,
	FaPlus,
	FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { TfiWrite } from "react-icons/tfi";

function Assignments() {
	const { courseId } = useParams();
	const assignmentList = assignments.filter(
		(assignment) => assignment.course === courseId
	);
	return (
		<div className="flex-fill">
			<span className="d-flex">
				<span className="flex-fill">
					<input placeholder="Search For Assignment"></input>
				</span>
				<span className="d-flex justify-content-end wd-home-buttons">
					<button type="button" className="btn btn-light">
						<FaPlus style={{ padding: 1 }} />
						Group
					</button>
					<button type="button" className="btn btn-danger text-light">
						<FaPlus style={{ padding: 1 }} />
						Assignment
					</button>
					<button type="button" className="btn btn-light">
						<FaEllipsisV />
					</button>
				</span>
			</span>
			<hr />
			<ul className="list-group wd-modules">
				<li className="list-group-item">
					<div>
						<FaEllipsisV className="me-2" /> ASSIGNMENTS
						<span className="float-end">
							<span className="rounded-pill border border-dark p-1 m-2">
								40% of Total
							</span>
							<FaPlusCircle className="ms-2" />
							<FaEllipsisV className="ms-2" />
						</span>
					</div>
					<ul className="list-group">
						{assignmentList.map((assignment, index) => (
							<li key={index} className="list-group-item">
								<FaEllipsisV className="me-2" />
								<TfiWrite className="me-2 text-success" />
								<Link
									to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
									style={{ textDecoration: "none", color: "black" }}>
									{assignment.title}
								</Link>
								<span className="float-end">
									<FaCheckCircle className="text-success" />
									<FaEllipsisV className="ms-2" />
								</span>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
}
export default Assignments;
