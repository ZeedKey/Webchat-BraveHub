import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum themes {
  default = "theme",
}

export interface SessionState {
  theme: themes.default;
  isLogged: boolean;
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
}

const initialState: SessionState = {
  theme: themes.default,
  isLogged: true,
  isSignUpModalOpen: false,
  isSignInModalOpen: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    // setTheme: (state, PayloadAction<boolean>) => {
    //   state.theme = state;
    // },
    setIsLogged: (state: any, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setSignInModalOpen: (state: any) => {
      state.isSignInModalOpen = true;
    },
    setSignUpModalOpen: (state: any) => {
      state.isSignUpModalOpen = true;
    },
    setModalClose: (state: any) => {
      state.isSignUpModalOpen = false;
      state.isSignInModalOpen = false;
    },
  },
});
export const { setIsLogged, setModalClose, setSignInModalOpen, setSignUpModalOpen } = sessionSlice.actions;
export default sessionSlice.reducer;
