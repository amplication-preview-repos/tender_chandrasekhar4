import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageUpdateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  sender?: string | null;
  text?: string | null;
  timestamp?: Date | null;
};
