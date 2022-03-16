import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  OnGatewayDisconnect,
  OnGatewayConnection,
} from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayDisconnect, OnGatewayConnection
{
  private logger: Logger = new Logger('AppGateway');
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    client.emit('connection', 'Successfully connected to server!'
    )
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconected: ${client.id}`);
  }

  afterInit(server: Server) {
    this.logger.log('Successfully initialized!');
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string): WsResponse<string> {
    return { event: 'msgToClient', data: text };
  }
}
