import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface LoginUser {
    loggedIn: boolean;
}



export var userData = {userId:"123456", username: "robin", password: "123456",  name: "Robin Yjord", email: "robin.yjord1@gmail.com", profileImg: "", loggedIn: false} 

const UserSlice = createSlice({
  name: "user",
  initialState: {value: userData},
  reducers: {
    loginUser: (state) => {
      state.value.loggedIn = true
    },
    loginOutUser: (state) => {
        state.value.loggedIn = false
      },
  },
});

export const { loginUser, loginOutUser } = UserSlice.actions;
export default UserSlice.reducer;