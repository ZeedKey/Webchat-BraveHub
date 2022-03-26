import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setModalClose, setSignInModalOpen, setSignUpModalOpen } from "../../store/session";


export const useModal = (action: 'signup' | 'signin') => {
    const isSignUpOpen = useSelector((state: RootState) => state.sessionReducer.isSignUpModalOpen);
    const isSignInOpen = useSelector((state: RootState) => state.sessionReducer.isSignInModalOpen);
    const dispatch = useDispatch()

    switch (action) {
        case "signup": {
            return {
                openSignUp: () => {
                    dispatch(setSignUpModalOpen());
                },
                close: () => {
                    dispatch(setModalClose());
                },
                stateSignUp: isSignUpOpen
            }
        }
        case "signin": {
            return {
                openSignIn: () => {
                    dispatch(setSignInModalOpen());
                },
                close: () => {
                    dispatch(setModalClose());
                },
                stateSignIn: isSignInOpen
            }
        }
    }
}