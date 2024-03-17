import { useState } from "react";
import {
	FaEllipsisV,
	FaCheckCircle,
	FaPlusCircle,
	FaPlus,
	FaRegTrashAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
	const { courseId } = useParams();
	const moduleList = useSelector(
		(state: KanbasState) => state.modulesReducer.modules
	);
	const module = useSelector(
		(state: KanbasState) => state.modulesReducer.module
	);
	const dispatch = useDispatch();
	const [selectedModule, setSelectedModule] = useState(moduleList[0]);
	const [showNewModule, setShowNewModule] = useState(false);
	const [showModuleEdit, setShowModuleEdit] = useState(false);

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
				<button
					type="button"
					className="btn btn-danger text-light"
					onClick={() => setShowNewModule(true)}>
					<FaPlus style={{ padding: 1 }} />
					Module
				</button>
				<button type="button" className="btn btn-light">
					<FaEllipsisV />
				</button>
			</span>
			<hr />
			<ul className="list-group wd-modules">
				{moduleList
					.filter((module) => module.course === courseId)
					.map((module, index) => (
						<li key={index} className="list-group-item">
							<div className="flex-fill">
								<FaEllipsisV className="me-2" />
								{module.name}
								<span className="float-end">
									<FaCheckCircle className="text-success" />
									<FaPlusCircle
										onClick={() => setSelectedModule(module)}
										className="ms-2"
									/>
									<span className="dropdown">
										<button
											className="bg-transparent"
											id="module-dropdown"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											<FaEllipsisV className="ms-2" />
										</button>
										<ul
											className="dropdown-menu"
											aria-labelledby="module-dropdown">
											<li>
												<button
													className="dropdown-item"
													onClick={() => dispatch(deleteModule(module._id))}>
													<FaRegTrashAlt className="text-danger" />
												</button>
												<button
													className="dropdown-item"
													onClick={(event) => {
														event.preventDefault();
														dispatch(setModule(module));
														setShowModuleEdit(true);
													}}>
													<FaRegPenToSquare />
												</button>
											</li>
										</ul>
									</span>
								</span>
							</div>
							{selectedModule._id === module._id && (
								<ul className="list-group">
									{module.lessons?.map((lesson: any, index: number) => (
										<li className="list-group-item" key={index}>
											<FaEllipsisV className="me-2" />
											{lesson.name}
											<span className="float-end">
												<FaCheckCircle className="text-success" />
												<FaEllipsisV />
											</span>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
			</ul>

			{showNewModule && (
				<div className="bg-light border border-dark rounded p-3 position-fixed top-50 start-50 translate-middle">
					<input
						placeholder={"New Module Name"}
						className="form-control"
						onChange={(e) =>
							dispatch(setModule({ ...module, name: e.target.value }))
						}
					/>
					<textarea
						placeholder={"Description"}
						className="form-control"
						onChange={(e) =>
							dispatch(setModule({ ...module, description: e.target.value }))
						}
					/>
					<button
						className="btn btn-success"
						onClick={() => {
							dispatch(addModule({ ...module, course: courseId }));
							setShowNewModule(false);
						}}>
						Add
					</button>
					<button
						className="btn btn-danger"
						onClick={() => setShowNewModule(false)}>
						Cancel
					</button>
				</div>
			)}
			{showModuleEdit && (
				<div className="w-50 bg-light border border-dark rounded p-3 position-fixed top-50 start-50 translate-middle">
					<input
						value={module.name}
						className="form-control"
						onChange={(e) =>
							dispatch(setModule({ ...module, name: e.target.value }))
						}
					/>
					<textarea
						value={module.description}
						className="form-control"
						onChange={(e) =>
							dispatch(setModule({ ...module, description: e.target.value }))
						}
					/>
					<button
						className="btn btn-success"
						onClick={() => {
							dispatch(updateModule(module));
							setShowModuleEdit(false);
						}}>
						Update
					</button>
					<button
						className="btn btn-danger"
						onClick={() => setShowModuleEdit(false)}>
						Cancel
					</button>
				</div>
			)}
		</div>
	);
}
export default ModuleList;
