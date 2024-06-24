import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  sender?: StringNullableFilter;
  text?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
