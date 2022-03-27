import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessageService } from 'src/message/message.service';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private messageService: MessageService) {}
  @WebSocketServer()
  server;

  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('messageToServer')
  handleMessage(client: Socket, message: any): void {
    this.server.emit('messageToClient', message);
    this.messageService.createMessage({
      author: message.author,
      body: message.body,
    });
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    this.server.emit('close', `client ${client.id} disconnected`);
  }

  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit('connection', `client ${client.id} connected`);
  }
}
