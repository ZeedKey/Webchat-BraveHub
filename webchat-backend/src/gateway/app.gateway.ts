import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessageService } from 'src/message/message.service';

@WebSocketGateway()
export class AppGateway {
  constructor(
    private messageService: MessageService,
  ) {}
  @WebSocketServer()
  server;

  @SubscribeMessage('messageToServer')
  handleMessage(client: Socket, message: any): void {
    this.server.emit('messageToClient', message, client.id);
    this.messageService.createMessage({
      author: client.id,
      body: message
    })
  }
}
