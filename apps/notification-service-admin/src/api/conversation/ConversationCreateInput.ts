import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  lastMessage?: string | null;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
};
