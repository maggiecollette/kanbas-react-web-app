import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
    return (
        <div className="p-4">
            <h1 style={{color: "#6c757d"}}>Dashboard</h1>
            <hr/>
            <div className="ps-4">
                <h2>Published Courses (12)</h2>
                <hr/>
                <div className="row g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col-1 col-sm-2 col-lg-3 col-xl-4" style={{width: 325}}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} style={{textDecoration: "none"}}>
                                <div className="card shadow-sm">
                                    <img src={`/images/${course.image}`} alt="Image Missing!"
                                         className="card-img-top" style={{maxHeight: 180}}/>
                                    <div className="card-body wd-card-body">
                                        <p className="card-title" style={{color: "blue", fontWeight: "bold", margin: 0}}>
                                            {course.name}
                                        </p>
                                        <p style={{color: "#6c757d", fontSize: 16, margin: "4px 0px 0px"}}>
                                            {course.number}
                                        </p>
                                        <p style={{color: "#6c757d", fontSize: 14, margin: "4px 0px 0px"}}>
                                            {course.startDate}-{course.endDate}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn"
                                              style={{color: "#6c757d"}}>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default Dashboard