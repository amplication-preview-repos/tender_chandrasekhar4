import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "lastMessage";

export const ConversationTitle = (record: TConversation): string => {
  return record.lastMessage?.toString() || String(record.id);
};
