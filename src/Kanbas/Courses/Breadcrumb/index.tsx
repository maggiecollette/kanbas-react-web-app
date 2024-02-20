import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";

function Breadcrumb() {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const pageNames = pathname
		.split(courseId + "/")[1]
		.replace("%20", " ")
		.split("/");

	return (
		<div className="d-none d-md-block">
			<div className="d-flex flex-column flex-fill">
				<nav className="wd-breadcrumb" aria-label="breadcrumb">
					<div className="container-fluid">
						<span className="float-start pe-2">
							<Link to={`/Kanbas/Courses/${courseId}/Home`}>
								<HiMiniBars3 style={{ color: "red" }} />
							</Link>
						</span>
						<span className="float-start">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link
										to={`/Kanbas/Courses/${courseId}/Home`}
										className="wd-breadcrumb-back">
										{courseId}
									</Link>
								</li>
								{pageNames.map((name, index) => (
									<li className="breadcrumb-item" aria-current="page">
										{pageNames.length !== index + 1 ? (
											<Link
												to={`${pathname.split(`/${pageNames[index + 1]}`)[0]}`}
												className="wd-breadcrumb-back">
												{name}
											</Link>
										) : (
											<Link to={`${pathname}`} className="wd-breadcrumb-here">
												{name}
											</Link>
										)}
									</li>
								))}
							</ol>
						</span>
						<span className="float-end">
							<button type="button">
								<i className="fa-solid fa-glasses"></i>
								Student View
							</button>
						</span>
					</div>
				</nav>
			</div>
			<hr />
		</div>
	);
}
export default Breadcrumb;
