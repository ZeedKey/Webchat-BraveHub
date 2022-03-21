import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway()
export class AppGateway {

    @WebSocketServer()
    server

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: any): void {
        this.server.emit('message', message);
    }
}