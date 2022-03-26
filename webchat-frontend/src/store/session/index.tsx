import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum themes {
  default = "theme",
}

export interface SessionState {
  theme: themes.default;
  isLogged: boolean;
  isSignInModalOpen: boolean,
  isSignUpModalOpen: boolean,
}

const initialState: SessionState = {
  theme: themes.default,
  isLogged: false,
  isSignUpModalOpen: false,
  isSignInModalOpen: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setIsLogged: (state: SessionState, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setSignInModalOpen: (state: SessionState) => {
      state.isSignInModalOpen = true;
    },
    setSignUpModalOpen: (state: SessionState) => {
      state.isSignUpModalOpen = true;
    },
    setModalClose: (state: SessionState) => {
      state.isSignUpModalOpen = false;
      state.isSignInModalOpen = false;
    },
  },
});
export const { setIsLogged, setModalClose, setSignInModalOpen, setSignUpModalOpen } = sessionSlice.actions;
export default sessionSlice.reducer;
