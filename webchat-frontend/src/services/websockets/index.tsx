import socketIOClient from "socket.io-client";
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