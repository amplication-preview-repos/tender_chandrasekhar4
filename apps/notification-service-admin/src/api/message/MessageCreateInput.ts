import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageCreateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  sender?: string | null;
  text?: string | null;
  timestamp?: Date | null;
};
