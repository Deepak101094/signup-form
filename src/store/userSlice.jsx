import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: [],
	reducers: {
		userInfo(state, action) {
			// state = [...state, action.payload];
			state.push(action.payload);
		},
	},
});
console.log(userSlice.actions);
export default userSlice.reducer;
export const { userInfo } = userSlice.actions;
