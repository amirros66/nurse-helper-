import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  patients: [],
  tasks: [],
};

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    patientTaskFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    patientSuccess(state, action) {
      state.loading = false;
      state.patients.push(action.payload);
    },
    taskSuccess(state, action) {
      state.loading = false;
      state.tasks.push(action.payload);
    },
    toggleTaskCompleted: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].completed = !state.tasks[index].completed;
      }
    },
  },
});

export const {
  startLoading,
  patientTaskFailed,
  patientSuccess,
  taskSuccess,
  toggleTaskCompleted,
} = toDoListSlice.actions;
export default toDoListSlice.reducer;
