import axios from "axios";
import socketIOClient from "socket.io-client";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { SocketsController } from "../sockets";
import { ApiController } from "../api";

interface IUserProps {
    email: string;
    password: string;
    firstName?: string;
    secondName?: string;
}
type TRequestAuth = 'signIn' | 'signUp';
export class AuthController extends ApiController {
    public async authHandler(reqAuth: TRequestAuth, userData: IUserProps) {
        const { data } = await AuthController.host.post(`/auth/${reqAuth}`, { ...userData })
            .catch(error => {
                return error
            });
        Cookies.set("token", data.token, { secure: true });
        return jwtDecode(data.token);
    };
};