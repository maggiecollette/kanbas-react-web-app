import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
    lesson: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;