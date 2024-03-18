import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";


const initialState = {
  modules: modules,
  module: { name: "New Module", description: "New Description" },
  lesson: { name: "New Lesson", description: "New Description", module: "0"},
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString(), lessons: [] },
          ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setLesson: (state, action) => {
      state.lesson = action.payload;
    },
    deleteLesson: (state, action) => {
      state.modules = state.modules.map(
        (module) => {
        if (module._id === action.payload.module) {
          module.lessons = module.lessons.filter(
            (lesson) => lesson._id !== action.payload._id
          )
        }
        return module;
      });
    }, 
    addLesson: (state, action) => {
    state.modules = state.modules.map((module) => {
        if (module._id === action.payload.module) {
          module.lessons = [{ ...action.payload, _id: new Date().getTime().toString(), module: action.payload.module }, ...module.lessons];
        } 
          return module;
      });
    }, 
    updateLesson: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload.module) {
          module.lessons = module.lessons.map((lesson) => {
            if (lesson._id === action.payload._id) {
              return action.payload;
            }
            else {
              return lesson;
            }
          });
        } 
           return module;
      });
    }
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, deleteLesson, addLesson, updateLesson, setLesson } = modulesSlice.actions;
export default modulesSlice.reducer;