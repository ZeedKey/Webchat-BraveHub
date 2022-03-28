
import { authAPI } from "../../services/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { IUser } from "../../models/user";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSession } from "./useSession";
import { ITokenData } from "../../models/token";

export const useAuth = (action: 'signup' | 'signin') => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { login } = useSession();
    const [isError, setIsErorr] = useState<boolean>(false);

    switch (action) {
        case "signup": {
            return {
                send: (data: IUser) => {
                    const fetchedData: any = dispatch(authAPI.endpoints.signup.initiate(data))
                    const res = fetchedData.unwrap();
                    res
                        .catch(() => {
                            setIsErorr(true)
                        })
                        .then((data: ITokenData) => {
                            Cookies.set('TOKEN', `Bearer ${data.token}`);
                            login()
                            navigate('/chat');
                        })
                },
                isError: isError
            }
        }
        case "signin": {
            return {
                send: (data: IUser) => {
                    const fetchedData: any = dispatch(authAPI.endpoints.signin.initiate(data))
                    const res = fetchedData.unwrap();
                    res
                        .catch(() => {
                            setIsErorr(true)
                        })
                        .then((data: ITokenData) => {
                            Cookies.set('TOKEN', `Bearer ${data.token}`);
                            login()
                            navigate('/chat');
                        })
                },
                isError: isError
            }
        }
    }
}