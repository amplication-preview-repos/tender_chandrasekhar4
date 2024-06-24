import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  lastMessage?: string | null;
  messages?: MessageUpdateManyWithoutConversationsInput;
};
