import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('messageToServer')
  handleMessage(client: Socket, message: any): void {
    this.server.emit('messageToClient', message, client.id);
  }
}
