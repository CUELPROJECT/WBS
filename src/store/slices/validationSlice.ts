import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import HttpClient from "@/utils/HttpClient";

import { RootState } from "../store";
import { JobDto, validation } from "@/types/validation.type";

interface validationState {
  loading: boolean;
  data: validation[];
  jobData: JobDto;
}

const initialState: validationState = {
  loading: false,
  data: [],
  jobData: {
    lastEnd_DateTime: ""
  },
};

// Async thunk
export const Get_WBS_ValidationAsync = createAsyncThunk(
  "validation/Get_WBS_ValidationAsync",
  async (task_code: string) => {
    const response = await HttpClient.get(
      `/Validation/Get_WBS_Validation?TASK_CODE=${task_code}`
    );
    return response.data;
  }
);
export const Get_Job_RunAsync = createAsyncThunk(
  "validation/Get_Job_RunAsync",
  async () => {
    const response = await HttpClient.get(`/Validation/Get_Job_Run`);
    return response.data;
  }
);

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    resetData(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Get_WBS_ValidationAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        Get_WBS_ValidationAsync.fulfilled,
        (state, action: PayloadAction<validation>) => {
          state.loading = false;
          state.data.push(action.payload);
        }
      );
    builder.addCase(
      Get_Job_RunAsync.fulfilled,
      (state, action: PayloadAction<JobDto>) => {
        state.jobData = action.payload;
      }
    );
  },
});

export const { resetData } = validationSlice.actions;
export const validationSelector = (state: RootState) => state.validationReducer;
export default validationSlice.reducer;
