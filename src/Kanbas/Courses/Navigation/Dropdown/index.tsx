import { useLocation, useParams } from "react-router";
import { FaAngleDown, FaBars } from "react-icons/fa";
import KanbasNavigationDropdown from "./KanbasDropdown";
import CoursesNavigationDropdown from "./CoursesDropdown";
function Dropdown() {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const pageName = pathname.includes("Courses")
		? pathname.split("Kanbas/Courses/")[1].split("/")
		: pathname.split("/Kanbas/");
	return (
		<div className="d-block d-md-none">
			<nav className="navbar navbar-dark bg-dark wd-navbar">
				<div className="container-fluid position-relative">
					<span>
						<button
							className="btn"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#kanbas"
							aria-expanded="false"
							aria-controls="kanbas">
							<FaBars style={{ color: "grey" }} />
						</button>
					</span>
					<span className="mx-auto text-center">
						{pageName.map((label, index) => (
							<h5 key={index} className="text-light">
								{label}
							</h5>
						))}
					</span>
					{pathname.includes("Courses") ? (
						<span className="float-end">
							<div>
								<button
									className="btn"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#courses"
									aria-expanded="false"
									aria-controls="courses">
									<FaAngleDown style={{ color: "grey" }} />
								</button>
							</div>
						</span>
					) : (
						<></>
					)}
				</div>
			</nav>
			<div className="collapse collapse-horizontal" id="kanbas">
				<KanbasNavigationDropdown />
			</div>
			{pathname.includes("Courses") ? (
				<div className="collapse" id="courses">
					<CoursesNavigationDropdown />
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
export default Dropdown;
