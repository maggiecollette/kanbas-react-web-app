import ModuleList from "../Modules/list";
import Status from "./Status";
function Home() {
	return (
		<div className="d-flex flex-fill">
			<ModuleList />
			<Status />
		</div>
	);
}
export default Home;
