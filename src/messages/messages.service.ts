import { Injectable } from "@nestjs/common";
import { MessagesRepositary } from "./messages.repositary";

@Injectable()
export class MessagesService{
    constructor(public messageRepo: MessagesRepositary){
    }

    findOne(id: string){
        return this.messageRepo.findOne(id)
    }

    findAll(){
        return this.messageRepo.findAll()
    }

    create(content: string){
        return this.messageRepo.create(content)
    }
}