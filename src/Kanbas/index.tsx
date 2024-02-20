import KanbasNavigation from "./Navigation";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import History from "./History";
import Studio from "./Studio";
import Commons from "./Commons";
import Help from "./Help";

function Kanbas() {
    return (
        <div className="d-flex">
            <div>
                <KanbasNavigation />
            </div>
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<Account />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Calendar/*" element={<Calendar />} />
                    <Route path="Inbox/*" element={<Inbox />} />
                    <Route path="History/*" element={<History />} />
                    <Route path="Studio/*" element={<Studio />} />
                    <Route path="Commons/*" element={<Commons />} />
                    <Route path="Help/*" element={<Help />} />
                </Routes>
            </div>
        </div>
    );}
export default Kanbas;