import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepositary } from './messages.repositary';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepositary]
})
export class MessagesModule {
}
