import { useLocation, useParams } from "react-router";
import CourseNavigation from "..";
import { FaAngleDown, FaBars } from "react-icons/fa";
import KanbasNavigationDropdown from "./kanbas";
import CoursesNavigationDropdown from "./courses";
function Dropdown() {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const pageName = pathname.split(courseId + "/")[1].replace("%20", " ");
	return (
		<div className="d-block d-md-none">
			<nav className="navbar navbar-dark bg-dark wd-navbar">
				<div className="container-fluid position-relative">
					<span>
						<div>
							<button
								className="btn"
								type="button"
								data-toggle="collapse"
								data-target="#kanbas"
								aria-expanded="false"
								aria-controls="kanbas">
								<FaBars style={{ color: "grey" }} />
							</button>
							<div className="collapse" id="kanbas">
								<KanbasNavigationDropdown />
							</div>
						</div>
					</span>
					<span className="text-center">
						<h5 className="text-light">{courseId}</h5>
						<h5 className="text-light">{pageName}</h5>
					</span>
					<span className="float-end">
						<div>
							<button
								className="btn"
								type="button"
								data-toggle="collapse"
								data-target="#courses"
								aria-expanded="false"
								aria-controls="courses">
								<FaAngleDown style={{ color: "grey" }} />
							</button>
							<div className="collapse" id="courses">
								<CoursesNavigationDropdown />
							</div>
						</div>
					</span>
				</div>
			</nav>
		</div>
	);
}
export default Dropdown;
