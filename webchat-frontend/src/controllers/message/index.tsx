import axios from "axios";
import socketIOClient from "socket.io-client";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { SocketsController } from "../sockets";

interface IUserProps {
    email: string;
    password: string;
    firstName?: string;
    secondName?: string;
}
type TRequestMessage = 'get' | 'post';

export class messageController {
    private host = axios.create({
        baseURL: "http://localhost:3333"
    });

    public async messageHandler(reqMessage: TRequestMessage, userData: IUserProps) {
        const { data } = await this.host.post(`/message/${reqMessage}`, { ...userData })
            .catch(error => {
                return error
            });
        Cookies.set("token", data.token, { secure: true });
        return jwtDecode(data.token);
    };
};