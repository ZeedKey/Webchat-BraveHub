import axios from "axios";
import socketIOClient from "socket.io-client";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export class SocketsController {
    private static instance: any;
    public static getInstance(): any {
        if (!SocketsController.instance) {
            SocketsController.instance = socketIOClient("http://localhost:3333", {
                reconnection: true,
                transports: ["websocket"],
            });
        }
        return SocketsController.instance;
    }
}

export const WS = SocketsController.getInstance();