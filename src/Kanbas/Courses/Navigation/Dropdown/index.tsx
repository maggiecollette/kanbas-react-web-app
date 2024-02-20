import { useLocation, useParams } from "react-router";
import CourseNavigation from "..";
import { FaAngleDown, FaBars } from "react-icons/fa";
function Dropdown() {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const pageName = pathname.split(courseId + "/")[1].replace("%20", " ");
	return (
		<div className="d-block d-md-none">
			<nav className="navbar navbar-dark bg-dark wd-navbar">
				<div className="container-fluid position-relative">
					<span>
						<a href="/Kanbas/Navigation/Dropdown/index.html">
							<span>
								<FaBars style={{ color: "grey" }} />
							</span>
						</a>
					</span>
					<span className="text-center">
						<h5 className="text-light">{courseId}</h5>
						<h5 className="text-light">{pageName}</h5>
					</span>
					<span className="float-end">
						<a href="/Kanbas/Courses/Home/screen.html">
							<FaAngleDown style={{ color: "grey" }} />
						</a>
					</span>
				</div>
			</nav>
		</div>
	);
}
export default Dropdown;
