import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { setIsLogged } from "../../store/session";


export const useSession = () => {
    const isLogged = useSelector((state: RootState) => state.sessionReducer.isLogged);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return {
        login: () => {
            dispatch(setIsLogged(true));
        },
        logout: () => {
            dispatch(setIsLogged(false));
            Cookies.remove('TOKEN');
            navigate('/');
        },
        stateSession: isLogged
    }
}