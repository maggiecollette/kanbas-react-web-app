import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";

function Breadcrumb() {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const pageName = pathname.split(courseId + "/")[1].replace("%20", " ");

	return (
		<div className="d-none d-md-block">
			<div className="d-flex flex-column flex-fill">
				<nav className="wd-breadcrumb" aria-label="breadcrumb">
					<div className="container-fluid">
						<span className="float-start pe-2">
							<Link to={`/Kanbas/Courses/${courseId}/Home`}>
								<HiMiniBars3 />
							</Link>
						</span>
						<span className="float-start">
							<ol className="breadcrumb">
								<li className="breadcrumb-item text-danger">
									<Link to={`/Kanbas/Courses/${courseId}/Home`}>
										{courseId}
									</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									{pageName}
								</li>
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
