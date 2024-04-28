import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return ['Hi', 'Bye'];
  }

  @Get('/:id')
  getMessageById(@Param() param: any) {
    console.log('PARAM ________ ', param);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('BODY ______', body);
  }
}
