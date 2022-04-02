import socketIOClient from "socket.io-client";

const API_HOST: string | undefined = process.env.NODE_ENV === "production" ?
    process.env.REACT_APP_SOCKET_HOST_PROD :
    process.env.REACT_APP_SOCKET_HOST_DEV;
export class SocketsController {
    private static instance: any;
    public static getInstance(): any {
        if (!SocketsController.instance) {
            SocketsController.instance = socketIOClient(`${API_HOST}`, {
                reconnection: true,
                transports: ["websocket"],
            });
        }
        return SocketsController.instance;
    }
}

export const WS = SocketsController.getInstance();