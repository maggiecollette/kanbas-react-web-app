import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

function ReduxExamples() {
	return (
		<>
			<HelloRedux />
			<CounterRedux />
			<AddRedux />
			<TodoList />
		</>
	);
}

export default ReduxExamples;
