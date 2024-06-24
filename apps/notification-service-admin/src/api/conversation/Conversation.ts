import { Message } from "../message/Message";

export type Conversation = {
  createdAt: Date;
  id: string;
  lastMessage: string | null;
  messages?: Array<Message>;
  updatedAt: Date;
};
