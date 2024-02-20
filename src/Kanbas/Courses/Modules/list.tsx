import React, { useState } from "react";
import { modules } from "../../Database";
import {
	FaEllipsisV,
	FaCheckCircle,
	FaPlusCircle,
	FaPlus,
} from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";
function ModuleList() {
	const { courseId } = useParams();
	const modulesList = modules.filter((module) => module.course === courseId);
	const [selectedModule, setSelectedModule] = useState(modulesList[0]);
	const [selectedLesson, setSelectedLesson] = useState(
		selectedModule.lessons[0]
	);
	return (
		<div className="flex-fill">
			<span className="d-flex justify-content-end wd-home-buttons">
				<button type="button" className="btn btn-light">
					Collapse All
				</button>
				<button type="button" className="btn btn-light">
					View Progress
				</button>
				<div className="dropdown">
					<button
						className="btn btn-light dropdown-toggle"
						id="publish-all-button"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<FaCheckCircle className="text-success" style={{ padding: 1 }} />
						Publish All
					</button>
					<ul className="dropdown-menu" aria-labelledby="publish-all-button">
						<li>
							<a href="#" className="dropdown-item">
								Publish All
							</a>
						</li>
					</ul>
				</div>
				<button type="button" className="btn btn-danger text-light">
					<FaPlus style={{ padding: 1 }} />
					Module
				</button>
				<button type="button" className="btn btn-light">
					<FaEllipsisV />
				</button>
			</span>
			<hr />
			<ul className="list-group wd-modules">
				{modulesList.map((module, index) => (
					<li
						key={index}
						className="list-group-item"
						onClick={() => setSelectedModule(module)}>
						<div>
							<FaEllipsisV className="me-2" />
							{module.name}
							<span className="float-end">
								<FaCheckCircle className="text-success" />
								<FaPlusCircle className="ms-2" />
								<FaEllipsisV className="ms-2" />
							</span>
						</div>
						{selectedModule._id === module._id && (
							<ul className="list-group">
								{module.lessons?.map((lesson, index) => (
									<li className="list-group-item" key={index}>
										<FaEllipsisV className="me-2" />
										{lesson.name}
										<span className="float-end">
											<FaCheckCircle className="text-success" />
											<FaEllipsisV className="ms-2" />
										</span>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
export default ModuleList;
