
import { authAPI } from "../../services/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { IUser } from "../../models/user";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSession } from "./useSession";


export const useAuth = (action: 'signup' | 'signin') => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [result, setResult] = useState<any>();
    const {login} = useSession();

    switch (action) {
        case "signup": {
            return {
                send: (data: IUser) => {
                    const fetchedData: any = dispatch(authAPI.endpoints.signup.initiate(data))
                    const res = fetchedData.unwrap();
                    res
                        .catch((e: any) => alert(e.status))
                        .then((data: any) => {
                            Cookies.set('TOKEN', data.token);
                            login()
                            navigate('/chat');
                        })
                    return res
                },
                result: result
            }
        }
        case "signin": {
            return {
                send: (data: IUser) => {
                    const fetchedData: any = dispatch(authAPI.endpoints.signin.initiate(data))
                    const res = fetchedData.unwrap();
                    res
                        .catch((e: any) => alert(e.status))
                        .then((data: any) => {
                            console.log(data)
                            Cookies.set('TOKEN', data.token);
                            login()
                            navigate('/chat');
                        })
                    return res
                },
                result: result
            }
        }
    }
}