import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMessageDto } from '../dto/create.message.dto';
import { Message } from './Message.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message) private MessageRepository: typeof Message,
  ) {}

  async createMessage(dto: CreateMessageDto) {
    const message = await this.MessageRepository.create(dto);
    return message;
  }

  async getAllMessages() {
    const messages = await this.MessageRepository.findAll({
      include: { all: true },
    });
    return messages;
  }
}
