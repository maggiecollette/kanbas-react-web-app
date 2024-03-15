import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Labs/a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Labs/a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Labs/a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Labs/a4/ReduxExamples/todos/todosReducer";
export type TodoType = {
	id: string;
	title: string;
};

export interface LabState {
	helloReducer: { message: string };
	counterReducer: {
		count: number;
	};
	addReducer: {
		sum: number;
	};
	todosReducer: {
		todos: TodoType[];
		todo: TodoType;
	};
}
const store = configureStore({
	reducer: {
		helloReducer,
		counterReducer,
		addReducer,
		todosReducer,
	},
});
export default store;
