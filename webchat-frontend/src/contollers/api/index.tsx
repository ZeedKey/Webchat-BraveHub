import axios from "axios";
import socketIOClient from "socket.io-client";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

interface IUserProps {
    email: string;
    password: string;
    firstName?: string;
    secondName?: string;
}

type TRequest = 'signIn' | 'signUp';
export class UserApiController {
    private static instance: any;
    public host = axios.create({
        baseURL: "http://localhost:3333"
    });

    public static getInstance(): any {
        if (!UserApiController.instance) {
            UserApiController.instance = socketIOClient("http://localhost:3333", {
                reconnection: true,
                transports: ["websocket"],
            });
        }
        return UserApiController.instance;
    }

    public async actionHandler(req: TRequest, userData: IUserProps) {
        const { data } = await this.host.post(`/auth/${req}`, { ...userData })
            .catch(error => {
                return error
            });
        Cookies.set("token", data.token, { secure: true });
        return jwtDecode(data.token);
    };

}

export const WS = UserApiController.getInstance();