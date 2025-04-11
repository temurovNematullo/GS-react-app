import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registrationAPI } from "../../API/api";

const initialState = {
  usersData: [],
};

export const userSliceReducer = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUserData(state, action) {
      state.usersData = action.payload;
    },
  },
});

export const postUserData = createAsyncThunk(
  "userSlice/postUserData",
  async (formData, { dispatch }) => {
    try {
      await registrationAPI.postUserData(formData);
    } catch (error) {
      console.error("ERROR", error);
    }
  }
);

export const getUsersData = createAsyncThunk(
  "userSlive/getUsersData",
  async (_, { dispatch }) => {
    try {
      const data = await registrationAPI.getUsersData();
      dispatch(getUserData(data));
    } catch (error) {
      console.error("ERROR", error);
    }
  }
);

export const { getUserData } = userSliceReducer.actions;
export default userSliceReducer.reducer;
