import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum themes {
  default = "theme",
}

export interface SessionState {
  theme: themes.default;
  isLogged: boolean;
}

const initialState: SessionState = {
  theme: themes.default,
  isLogged: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    // setTheme: (state, PayloadAction<boolean>) => {
    //   state.theme = state;
    // },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
});
export const { setLogin } = sessionSlice.actions;
export default sessionSlice.reducer;
