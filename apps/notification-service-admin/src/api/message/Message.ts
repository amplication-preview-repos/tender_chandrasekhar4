import { Conversation } from "../conversation/Conversation";

export type Message = {
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  text: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
