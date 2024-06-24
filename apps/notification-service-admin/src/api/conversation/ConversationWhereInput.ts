import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ConversationWhereInput = {
  id?: StringFilter;
  lastMessage?: StringNullableFilter;
  messages?: MessageListRelationFilter;
};
