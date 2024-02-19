import {Route, Routes} from "react-router";
import Nav from "../Nav";
import {Link} from "react-router-dom";
import Assignment3 from "./a3";

function Labs() {
    return (
        <div className="container-fluid">
            <Nav />
            <h1>Labs</h1>
            <Link to="/Labs/a3">Assignment 3</Link>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
            </Routes>
        </div>
    );
}
export default Labs;